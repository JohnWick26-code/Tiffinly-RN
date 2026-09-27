# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code style: DO NOT write comments

**Write zero comments in this codebase.** This rule is absolute and overrides any
default instinct to explain code. It applies to every file you create or edit.

Specifically, never emit:

- `//` line comments, including "explain the tricky bit" asides
- `/* */` block comments
- `/** */` JSDoc or doc blocks above functions, components, types, props or hooks
- Per-property doc comments inside interfaces and prop types
- Section banners or divider comments (`// ─── COLORS ───`)
- `{/* */}` comments inside JSX
- TODO / FIXME / NOTE markers

The code must explain itself through naming and structure instead. If something
genuinely needs explaining, put it in the chat response, not in the file.

The only comments permitted are machine-read directives that change behaviour —
`eslint-disable`, `@ts-expect-error`, `@ts-ignore`, `prettier-ignore` — and only
when actually required.

When editing an existing file, do not reintroduce comments that were removed, and
do not add comments to code you are merely moving or refactoring.

## Project

**Tiffinly** — a React Native mobile app built with Expo (SDK 54). Uses the new React Native architecture (`newArchEnabled: true`). Package manager is **bun**.

## Commands

```bash
bun install          # install dependencies
bun run start        # start Expo dev server (scan QR with Expo Go)
bun run ios          # open in iOS simulator
bun run android      # open in Android emulator
bun run web          # open in browser
```

TypeScript type-checking (no separate lint config present yet):
```bash
bunx tsc --noEmit
```

## Architecture

This is a freshly scaffolded Expo project. Current entry points:

- `index.ts` — registers the root component via `registerRootComponent`
- `App.tsx` — root component (currently the default scaffold)
- `app.json` — Expo config: portrait orientation, light UI style, tablet support on iOS, edge-to-edge on Android

The project does **not** yet use Expo Router — navigation structure is not established. When adding screens, choose between file-based routing (`expo-router`) or a manual navigator (`react-navigation`) and set it up before creating multiple screens.

## Key constraints from app.json

- Orientation locked to **portrait**
- `predictiveBackGestureEnabled: false` on Android
- `userInterfaceStyle: "light"` (no dark mode handling currently)

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
