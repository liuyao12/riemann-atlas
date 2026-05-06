# Legacy Node Audit

This audit records the first structural pass over the migrated `database/` nodes.

The original id scheme uses short opaque ids such as `0G633VZJ`. These ids are best treated as stable node identifiers rather than semantic names. Human meaning should live in `name`, templates, statements, definitions, views, and future aliases.

## Current Shape

- JSON node files: 324
- Parseable after this pass: 324
- Markdown files under `database/`: 521
- Definition records: 384
- Definition records with empty `comment`: 340
- Definition records with no local dependencies: 139

## Structural Repairs Made

- Fixed malformed JSON in several migrated files.
- Corrected misspelled top-level `defintions` and `definitons` keys to `definitions`.
- Normalized malformed matrix type metadata in `7RG754YE`.
- Made `database/thm_template.json` valid JSON.

## Remaining Structural Gaps

Some references point to ids that are not present as nodes yet:

- `S63HRXXC`: matrix algebra --of order `{n}` over `{R}`
- `0NJKG2T0`: algebra --over `{R}`
- `71ZFNGRI`: object --in `{C}`
- `9E3ZA9F8`: morphism --in `{C}`
- `93SVAXQP`: endomorphism / endomorphism ring --of `{V}`
- `5FE9DKX2`: Borel subalgebra --of `{g}`

Some definition records refer to Markdown files that are not present at the expected path:

- `database/0TRS03M6/S63HRXXC_1.md`
- `database/0XWSLPKQ/0XWSLPKQ.md`
- `database/11K55UPI/83R3LTWK_a.md`
- `database/11K55UPI/83R3LTWK_b.md`
- `database/3EFEFC0N/3EFEFC0N.md`
- `database/4CID84AD/4CID84AD.md`
- `database/4IAC0008/4IAC0008.md`
- `database/4P80ZG3D/RDL85FLK_c.md`
- `database/6B2A4HQ9/6B2A4HQ9.md`
- `database/75BT39WI/75BT39WI.md`

## Semantic Completion Plan

The next pass should not blindly erase dependencies. Existing `dependencies` and `type` entries often correctly describe the setting of a concept, as in `dominant integral weight`. Instead, each node should gradually gain view-level metadata that makes the role of those dependencies explicit.

Recommended additions:

- `legacy`: notes about migrated fields whose meaning is inherited from the old library.
- `views.classical_prerequisites`: the traditional prerequisite reading of the node.
- `views.abstraction`: whether the node is an abstraction from examples, a setting-specific construction, or a theorem-level statement.
- `views.computational`: when a computational or approximant-based reading exists.
- `foundations`: grounding paths in which the node is intended to be meaningful.

This keeps the original dependency information while making it only one navigational layer of Riemann Atlas.
