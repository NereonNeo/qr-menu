---
name: shared-ui-entry-vs-index
description: shared/ui components must use index.ts as their public barrel, not {scope}.entry.ts — confirmed by examining the pre-existing button, link, dropzone dirs
metadata:
  type: feedback
---

`shared/ui` sub-directories (e.g. `button/`, `link/`, `dropzone/`) export via `index.ts`, NOT `{scope}.entry.ts`. This is stated in CLAUDE.md and confirmed by the existing codebase pattern.

The new components added in the drawer/avatar/badge/indicator batch all incorrectly use `{scope}.entry.ts` instead of `index.ts`.

**Why:** `shared/` is not divided into slices; it is organised by type. The `.entry.ts` convention applies only to sliced layers (entities, features, widgets). The ESLint rule does NOT enforce this for `shared/`, so violations slip through linting silently.

**How to apply:** When reviewing or writing any file under `src/shared/ui/*`, the public barrel must be `index.ts`. Flag any `*.entry.ts` files in that directory as a naming convention violation.
