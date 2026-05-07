# Riemann Atlas Viewer

This is a local-first graph viewer and editor for the migrated atlas database.

Run it from the repository root:

```bash
node viewer/server.mjs
```

Then open:

```text
http://localhost:4173
```

The server builds a dependency index from `database/` on demand. The browser UI can search nodes, inspect incoming and outgoing dependency links, edit JSON, render paired Markdown files with MathJax, edit their source, and save changes back to the local working tree.

The write API is deliberately narrow: it only edits `.json` and `.md` files under `database/` and `docs/`.
