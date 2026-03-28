# Planning Mode Prompt

## Instructions

0a. Study `specs/*` with up to 250 parallel Sonnet subagents to learn the application specifications.
0b. Study @IMPLEMENTATION_PLAN.md (if present) to understand the plan so far.
0c. Study `src/lib/*` with up to 250 parallel Sonnet subagents to understand shared utilities & components.
0d. For reference, the application source code is in `src/*`.

1. Study @IMPLEMENTATION_PLAN.md (if present; it may be incorrect) and use up to 500 Sonnet subagents to study existing source code in `src/*` and compare it against `specs/*`. Use an Opus subagent to analyze findings, prioritize tasks, and create/update @IMPLEMENTATION_PLAN.md. Ultrathink. Consider searching for TODO, minimal implementations, placeholders, skipped/flaky tests, and inconsistent patterns. Study @IMPLEMENTATION_PLAN.md to determine starting point for research and keep it up to date with items considered complete/incomplete using subagents.

IMPORTANT: Plan only. Do NOT implement anything. Do NOT assume functionality is missing; confirm with code search first. Treat `src/lib` as the project's standard library for shared utilities and components. Prefer consolidated, idiomatic implementations there over ad-hoc copies.

ULTIMATE GOAL: We want to build the Simplus brand official e-commerce homepage — a modern, responsive DTC site using Next.js 15 + Tailwind CSS + TypeScript. The homepage should showcase the brand, display products, and include a functional shopping cart. Consider missing elements and plan accordingly. If an element is missing, search first to confirm it doesn't exist, then if needed author the specification at specs/FILENAME.md. If you create a new element then document the plan to implement it in @IMPLEMENTATION_PLAN.md using a subagent.

## Wave-Based Plan Format (REQUIRED)

The IMPLEMENTATION_PLAN.md MUST use the wave-based format with explicit task dependencies. This enables parallel execution in the build phase.

### Task Format

Every task MUST include these fields:

```markdown
### T[N]: [Task Name]
- **depends_on**: [T1, T2]  ← list of task IDs this depends on ([] if none)
- **location**: src/models/user.ts, src/routes/auth.ts  ← files to create/modify
- **description**: [what to do]
- **validation**: [how to verify]
- **status**: 🔲 Not started
- **log**: 
- **files_modified**: 
```

### Wave Grouping Rules

1. **Group tasks into Waves** based on their dependency chains
2. **Wave 1** = all tasks with `depends_on: []` (no dependencies, can start immediately)
3. **Wave N** = tasks whose ALL dependencies are in earlier waves
4. **Within each wave**, order tasks by priority
5. Tasks in the same wave with **non-overlapping `location`** can run in parallel

### Dependency Graph

Include an ASCII dependency graph at the top of the plan showing task relationships:

```
T1 ──┬── T3 ──┐
     │        ├── T5
T2 ──┴── T4 ──┘
```

### Parallel Execution Summary Table

Include a table at the bottom:

```markdown
| Wave | Tasks | Can Start When | Parallel Groups |
|------|-------|----------------|-----------------|
| 1 | T1, T2 | Immediately | All parallel |
| 2 | T3, T4 | Wave 1 done | Check overlap |
```

### Maximizing Parallelism

When designing the plan:
- **Minimize dependencies** — only add depends_on when truly required
- **Split large tasks** — a task touching 5 files might be splittable into smaller, parallelizable tasks
- **Keep location specific** — precise file paths help determine if tasks can run in parallel
- **Avoid circular dependencies** — if T3 depends on T1, T1 cannot depend on T3

---

## Customization Notes

Replace `[PROJECT_GOAL]` with your actual goal, e.g.:
- "a fully functional mood board creation app"
- "a CLI tool for managing docker containers"
- "complete test coverage for all auth flows"

Adjust paths if your source code isn't in `src/`:
- `src/*` → your source directory
- `src/lib/*` → your shared utilities directory
