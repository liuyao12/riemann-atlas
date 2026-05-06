# Architecture Notes

Riemann Atlas is not organized around one compulsory subtype hierarchy.

The inherited library mostly records definitions and theorems with `type` and `dependencies` metadata. In this rebuild, that metadata should be understood as one view among many: a useful structural view, but not the only way a mathematical object or statement may be grounded.

## Nodes

A node may represent a definition, theorem, proof, example, construction, visualization, computation, or explanatory note.

## Views

A view is a way of reading the graph. Examples:

- classical prerequisite view
- computable approximation view
- Lean or proof-assistant formalization view
- historical motivation view
- abstraction view
- visualization or interactive map view

## Foundations

A foundation is a rigorous grounding path. The classical set/group/ring/field/real-number route is one foundation. A computable route through natural numbers, rational numbers, algorithms, approximants, and limiting processes is another. A proof assistant formalization is another.

The goal is to make the active foundation or abstraction level visible whenever a statement is made.
