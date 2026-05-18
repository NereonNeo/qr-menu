---
name: eslint-coverage-gaps
description: The no-restricted-imports ESLint rule only covers entities/features/widgets — shared/ui internal paths are NOT lint-guarded, so violations in that layer require manual review
metadata:
  type: feedback
---

The project's `no-restricted-imports` pattern covers `@/entities/*/**`, `@/features/*/*/**`, and `@/widgets/*/*/**` but has **no pattern for `@/shared/**`\*\*. This means:

- Direct imports like `import { X } from "@/shared/ui/badge/badge.entry"` won't trigger an ESLint error even though convention requires going through `index.ts`.
- Cross-`shared/ui` sibling imports (e.g. `avatar` importing from `../indicator/indicator.entry`) also pass lint without a warning.

**Why:** The ESLint config was written for sliced layers. `shared/` doesn't have slices and therefore wasn't included in the pattern.

**How to apply:** When reviewing code in `src/shared/ui`, manually check that internal files import siblings via `index.ts` (not `.entry.ts`), and that consumers outside `shared/` also go through `index.ts`. Don't rely on lint output alone for `shared/` boundary checks.
