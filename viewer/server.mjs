import http from "node:http";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const viewerDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(viewerDir, "..");
const databaseDir = path.join(repoRoot, "database");
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
};

function parseLooseJson(text) {
  return JSON.parse(text.replace(/,\s*([}\]])/g, "$1"));
}

function edgeTarget(key, value) {
  if (/^[A-Z0-9]{8}$/.test(key)) return key;
  const match = String(value ?? "").match(/^([A-Z0-9]{8}):/);
  return match?.[1] ?? null;
}

function collectEdgesFromMap(edges, nodeId, map, relationPrefix) {
  if (!map || typeof map !== "object" || Array.isArray(map)) return;
  for (const [key, value] of Object.entries(map)) {
    const target = edgeTarget(key, value);
    if (!target || target === nodeId) continue;
    edges.push({
      from: nodeId,
      to: target,
      relation: `${relationPrefix}.${key}`,
      label: String(value),
    });
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function buildIndex() {
  const files = await walk(databaseDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));
  const mdFiles = files.filter((file) => file.endsWith(".md"));
  const mdByDir = new Map();
  for (const file of mdFiles) {
    const dir = path.basename(path.dirname(file));
    const item = {
      id: path.basename(file, ".md"),
      path: path.relative(repoRoot, file).replaceAll("\\", "/"),
      label: path.basename(file),
    };
    if (!mdByDir.has(dir)) mdByDir.set(dir, []);
    mdByDir.get(dir).push(item);
  }

  const nodes = [];
  const edges = [];
  const parseErrors = [];

  for (const file of jsonFiles) {
    const relativePath = path.relative(repoRoot, file).replaceAll("\\", "/");
    const raw = await readFile(file, "utf8");
    let data;
    try {
      data = parseLooseJson(raw);
    } catch (error) {
      parseErrors.push({ path: relativePath, message: error.message });
      continue;
    }

    const id = data.id || path.basename(path.dirname(file));
    const definitions = Object.keys(data.definitions || {});
    const statements = Object.keys(data.statements || {});
    const proofs = Object.keys(data.proofs || {});
    const textFiles = (mdByDir.get(id) || []).sort((a, b) => a.label.localeCompare(b.label));
    const typeText = typeof data.type === "string"
      ? data.type
      : data.type && typeof data.type === "object"
        ? Object.values(data.type).join("; ")
        : "";
    const nodeKind = data.type === "theorem" ? "theorem" : "definition";

    nodes.push({
      id,
      name: data.name || id,
      kind: nodeKind,
      path: relativePath,
      type: data.type ?? null,
      typeText,
      dependencies: data.dependencies || {},
      definitions,
      statements,
      proofs,
      textFiles,
      searchable: [
        id,
        data.name,
        data.template,
        typeText,
        ...Object.values(data.dependencies || {}),
        ...definitions,
        ...statements,
        ...proofs,
      ].filter(Boolean).join(" ").toLowerCase(),
    });

    collectEdgesFromMap(edges, id, data.dependencies, "dependencies");
    collectEdgesFromMap(edges, id, data.type, "type");
    for (const [definitionId, definition] of Object.entries(data.definitions || {})) {
      collectEdgesFromMap(edges, id, definition.dependencies, `definitions.${definitionId}`);
    }
    for (const [statementId, statement] of Object.entries(data.statements || {})) {
      collectEdgesFromMap(edges, id, statement.dependencies, `statements.${statementId}`);
    }
    for (const [proofId, proof] of Object.entries(data.proofs || {})) {
      collectEdgesFromMap(edges, id, proof.dependencies, `proofs.${proofId}`);
    }
  }

  const nodeIds = new Set(nodes.map((node) => node.id));
  const unresolvedEdges = edges.filter((edge) => !nodeIds.has(edge.to));
  const resolvedEdges = edges.filter((edge) => nodeIds.has(edge.to));

  return {
    generatedAt: new Date().toISOString(),
    counts: {
      nodes: nodes.length,
      edges: resolvedEdges.length,
      unresolvedEdges: unresolvedEdges.length,
      parseErrors: parseErrors.length,
    },
    nodes: nodes.sort((a, b) => a.name.localeCompare(b.name)),
    edges: resolvedEdges,
    unresolvedEdges,
    parseErrors,
  };
}

function safeRepoPath(rawPath) {
  if (!rawPath || typeof rawPath !== "string") throw new Error("Missing path");
  if (path.isAbsolute(rawPath)) throw new Error("Absolute paths are not allowed");
  const normalized = rawPath.replaceAll("\\", "/");
  if (normalized.includes("..")) throw new Error("Parent paths are not allowed");
  if (!normalized.startsWith("database/") && !normalized.startsWith("docs/")) {
    throw new Error("Only database/ and docs/ files can be edited from the viewer");
  }
  const ext = path.extname(normalized);
  if (![".json", ".md"].includes(ext)) throw new Error("Only JSON and Markdown files can be edited");
  return path.join(repoRoot, normalized);
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function sendJson(response, status, payload) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const requested = path.normalize(path.join(viewerDir, pathname));
  if (!requested.startsWith(viewerDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  if (!await pathExists(requested)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "content-type": mime[path.extname(requested)] || "application/octet-stream" });
  createReadStream(requested).pipe(response);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "GET" && url.pathname === "/api/index") {
      await sendJson(response, 200, await buildIndex());
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/file") {
      const filePath = safeRepoPath(url.searchParams.get("path"));
      response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      response.end(await readFile(filePath, "utf8"));
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/file") {
      const body = JSON.parse(await readBody(request));
      const filePath = safeRepoPath(body.path);
      const content = String(body.content ?? "");
      if (filePath.endsWith(".json")) JSON.parse(content);
      await writeFile(filePath, content, "utf8");
      await sendJson(response, 200, { ok: true, path: body.path });
      return;
    }

    if (request.method === "GET") {
      await serveStatic(request, response);
      return;
    }

    response.writeHead(405);
    response.end("Method not allowed");
  } catch (error) {
    await sendJson(response, 400, { ok: false, error: error.message });
  }
});

server.listen(port, () => {
  console.log(`Riemann Atlas viewer: http://localhost:${port}`);
});
