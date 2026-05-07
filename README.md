# Riemann Atlas

A collaborative atlas of mathematical definitions, theorems, proofs, examples, visualizations, and foundations.

Riemann Atlas treats dependencies as views rather than as a single forced ontology. A statement may be approached through classical real analysis, computable approximations, formal proof systems, historical motivation, algebraic abstraction, or other foundations.

This repository begins as a migration of [`neobourbaki/Library`](https://github.com/neobourbaki/Library). The inherited `database/` entries are preserved as source material, while the project direction changes: fields such as `type` and `dependencies` are no longer meant to impose a single foundational spine. They are legacy structural views that will be joined by other views.

## First Design Principle

The same mathematical statement can live at several levels of abstraction.

For example, the Fundamental Theorem of Calculus may be presented through rational approximation processes, classical real analysis over real numbers, formal proof-system definitions, or later algebraic abstractions. None of these views has to be the root ontology of the whole library.

## Repository Shape

- `database/` preserves the existing migrated library entries.
- `docs/architecture.md` describes the new dependency-as-view direction.
- `docs/legacy-node-audit.md` tracks the first pass over the migrated node schema.
- `foundations/` is for rigorous grounding paths such as computable analysis, classical real analysis, and formalized mathematics.
- `views/` is for navigational layers: prerequisite views, abstraction views, historical views, computational views, and proof-assistant views.
- `viewer/` contains a local dependency-graph viewer and editor prototype.
