const state = {
  index: null,
  nodesById: new Map(),
  selectedId: null,
  filter: "all",
  activeTextPath: null,
};

const el = {
  stats: document.querySelector("#stats"),
  refreshButton: document.querySelector("#refreshButton"),
  searchInput: document.querySelector("#searchInput"),
  resultList: document.querySelector("#resultList"),
  graphSvg: document.querySelector("#graphSvg"),
  graphTitle: document.querySelector("#graphTitle"),
  nodeName: document.querySelector("#nodeName"),
  nodeMeta: document.querySelector("#nodeMeta"),
  summaryType: document.querySelector("#summaryType"),
  summaryDependencies: document.querySelector("#summaryDependencies"),
  summaryTextFiles: document.querySelector("#summaryTextFiles"),
  jsonPath: document.querySelector("#jsonPath"),
  jsonEditor: document.querySelector("#jsonEditor"),
  saveJsonButton: document.querySelector("#saveJsonButton"),
  textFileSelect: document.querySelector("#textFileSelect"),
  textEditor: document.querySelector("#textEditor"),
  saveTextButton: document.querySelector("#saveTextButton"),
  statusLine: document.querySelector("#statusLine"),
};

async function apiJson(url, options) {
  const response = await fetch(url, options);
  const payload = await response.json();
  if (!response.ok || payload.ok === false) throw new Error(payload.error || response.statusText);
  return payload;
}

async function apiText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(await response.text());
  return response.text();
}

function setStatus(message) {
  el.statusLine.textContent = message;
}

function compact(value) {
  if (value === null || value === undefined) return "-";
  if (typeof value === "string") return value || "-";
  if (Array.isArray(value)) return value.join(", ") || "-";
  return Object.entries(value).map(([key, item]) => `${key}: ${item}`).join("; ") || "-";
}

function nodeSubtitle(node) {
  const textCount = node.textFiles.length;
  return `${node.id} | ${node.kind}${textCount ? ` | ${textCount} text file${textCount === 1 ? "" : "s"}` : ""}`;
}

async function loadIndex(keepSelection = true) {
  setStatus("Loading graph index...");
  state.index = await apiJson("/api/index");
  state.nodesById = new Map(state.index.nodes.map((node) => [node.id, node]));
  el.stats.textContent = `${state.index.counts.nodes} nodes | ${state.index.counts.edges} links | ${state.index.counts.unresolvedEdges} unresolved`;
  renderResults();
  if (keepSelection && state.selectedId && state.nodesById.has(state.selectedId)) {
    await selectNode(state.selectedId);
  } else if (!state.selectedId && state.index.nodes.length) {
    await selectNode(state.index.nodes[0].id);
  }
  setStatus(`Index loaded at ${new Date(state.index.generatedAt).toLocaleTimeString()}`);
}

function matchingNodes() {
  const query = el.searchInput.value.trim().toLowerCase();
  return state.index.nodes
    .filter((node) => state.filter === "all" || node.kind === state.filter)
    .filter((node) => !query || node.searchable.includes(query))
    .slice(0, 160);
}

function renderResults() {
  if (!state.index) return;
  const nodes = matchingNodes();
  el.resultList.replaceChildren(...nodes.map((node) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = node.id === state.selectedId ? "active" : "";
    button.innerHTML = `<strong></strong><span></span>`;
    button.querySelector("strong").textContent = node.name;
    button.querySelector("span").textContent = nodeSubtitle(node);
    button.addEventListener("click", () => selectNode(node.id));
    li.append(button);
    return li;
  }));
}

function setActiveTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tabName}Tab`);
  });
}

async function selectNode(id) {
  const node = state.nodesById.get(id);
  if (!node) return;
  state.selectedId = id;
  state.activeTextPath = node.textFiles[0]?.path || null;
  renderResults();
  renderSummary(node);
  renderGraph(node);
  await loadEditors(node);
}

function renderSummary(node) {
  el.graphTitle.textContent = node.name;
  el.nodeName.textContent = node.name;
  el.nodeMeta.textContent = nodeSubtitle(node);
  el.summaryType.textContent = compact(node.type);
  el.summaryDependencies.textContent = compact(node.dependencies);
  el.summaryTextFiles.textContent = node.textFiles.map((file) => file.label).join(", ") || "-";
}

function relationClass(edge, selectedId) {
  return edge.from === selectedId ? "outgoing" : "incoming";
}

function renderGraph(selectedNode) {
  const svg = el.graphSvg;
  const rect = svg.getBoundingClientRect();
  const width = Math.max(rect.width, 640);
  const height = Math.max(rect.height, 420);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const outgoing = state.index.edges.filter((edge) => edge.from === selectedNode.id).slice(0, 36);
  const incoming = state.index.edges.filter((edge) => edge.to === selectedNode.id).slice(0, 36);
  const graphNodes = new Map([[selectedNode.id, { ...selectedNode, role: "selected" }]]);

  for (const edge of outgoing) {
    const target = state.nodesById.get(edge.to);
    if (target) graphNodes.set(target.id, { ...target, role: "outgoing" });
  }
  for (const edge of incoming) {
    const source = state.nodesById.get(edge.from);
    if (source) graphNodes.set(source.id, { ...source, role: "incoming" });
  }

  const cx = width / 2;
  const cy = height / 2;
  const left = incoming.map((edge) => edge.from);
  const right = outgoing.map((edge) => edge.to);
  const positions = new Map([[selectedNode.id, { x: cx, y: cy }]]);
  layoutSide(left, cx - width * 0.28, cy, Math.min(height * 0.38, 220), positions);
  layoutSide(right, cx + width * 0.28, cy, Math.min(height * 0.38, 220), positions);

  const edges = [...incoming, ...outgoing].filter((edge) => positions.has(edge.from) && positions.has(edge.to));
  const edgeElements = edges.map((edge) => {
    const a = positions.get(edge.from);
    const b = positions.get(edge.to);
    const line = svgEl("line", {
      class: `edge ${relationClass(edge, selectedNode.id)}`,
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
    });
    line.append(svgTitle(edge.label));
    return line;
  });

  const nodeElements = [...graphNodes.values()].map((node) => {
    const pos = positions.get(node.id);
    if (!pos) return null;
    const group = svgEl("g", { class: "node-group", tabindex: 0 });
    const radius = node.id === selectedNode.id ? 18 : 13;
    const fill = node.id === selectedNode.id ? "#186d70" : node.role === "incoming" ? "#3f67a8" : "#a56c14";
    group.append(svgEl("circle", { class: "node-circle", cx: pos.x, cy: pos.y, r: radius, fill }));
    const label = svgEl("text", {
      class: "node-label",
      x: pos.x,
      y: pos.y + radius + 15,
      "text-anchor": "middle",
    });
    label.textContent = truncate(node.name, 34);
    group.append(label);
    group.append(svgTitle(`${node.name}\n${node.id}`));
    group.addEventListener("click", () => selectNode(node.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter") selectNode(node.id);
    });
    return group;
  }).filter(Boolean);

  svg.replaceChildren(...edgeElements, ...nodeElements);
}

function layoutSide(ids, x, cy, radius, positions) {
  const unique = [...new Set(ids)];
  const count = unique.length;
  if (!count) return;
  unique.forEach((id, index) => {
    const angle = count === 1 ? 0 : -Math.PI / 2 + (Math.PI * index) / (count - 1);
    positions.set(id, {
      x,
      y: cy + Math.sin(angle) * radius,
    });
  });
}

function svgEl(name, attrs) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
  return element;
}

function svgTitle(text) {
  const title = svgEl("title", {});
  title.textContent = text;
  return title;
}

function truncate(text, max) {
  return text.length <= max ? text : `${text.slice(0, max - 3)}...`;
}

async function loadEditors(node) {
  el.jsonPath.textContent = node.path;
  el.jsonEditor.value = await apiText(`/api/file?path=${encodeURIComponent(node.path)}`);
  el.textFileSelect.replaceChildren(...node.textFiles.map((file) => {
    const option = document.createElement("option");
    option.value = file.path;
    option.textContent = file.label;
    return option;
  }));
  el.textFileSelect.disabled = node.textFiles.length === 0;
  el.saveTextButton.disabled = node.textFiles.length === 0;
  el.textEditor.value = "";
  if (state.activeTextPath) {
    el.textFileSelect.value = state.activeTextPath;
    el.textEditor.value = await apiText(`/api/file?path=${encodeURIComponent(state.activeTextPath)}`);
  }
}

async function saveFile(filePath, content) {
  await apiJson("/api/file", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ path: filePath, content }),
  });
}

el.searchInput.addEventListener("input", renderResults);
el.refreshButton.addEventListener("click", () => loadIndex(true));

document.querySelectorAll(".segmented").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".segmented").forEach((item) => item.classList.toggle("active", item === button));
    renderResults();
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

el.textFileSelect.addEventListener("change", async () => {
  state.activeTextPath = el.textFileSelect.value;
  el.textEditor.value = await apiText(`/api/file?path=${encodeURIComponent(state.activeTextPath)}`);
});

el.saveJsonButton.addEventListener("click", async () => {
  const node = state.nodesById.get(state.selectedId);
  if (!node) return;
  try {
    JSON.parse(el.jsonEditor.value);
    await saveFile(node.path, el.jsonEditor.value.endsWith("\n") ? el.jsonEditor.value : `${el.jsonEditor.value}\n`);
    await loadIndex(true);
    setStatus(`Saved ${node.path}`);
  } catch (error) {
    setStatus(`JSON save failed: ${error.message}`);
  }
});

el.saveTextButton.addEventListener("click", async () => {
  if (!state.activeTextPath) return;
  try {
    await saveFile(state.activeTextPath, el.textEditor.value.endsWith("\n") ? el.textEditor.value : `${el.textEditor.value}\n`);
    await loadIndex(true);
    setStatus(`Saved ${state.activeTextPath}`);
  } catch (error) {
    setStatus(`Text save failed: ${error.message}`);
  }
});

window.addEventListener("resize", () => {
  const node = state.nodesById.get(state.selectedId);
  if (node) renderGraph(node);
});

loadIndex(false).catch((error) => {
  el.stats.textContent = "Unable to load graph";
  setStatus(error.message);
});
