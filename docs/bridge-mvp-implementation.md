# Bridge MVP Implementation Roadmap

This roadmap translates the Bridge MVP specification into sequenced, testable work packages. Each phase can be shipped incrementally while preserving the local-first, privacy-preserving architecture.

## Phase 0 — Foundations and Observability
- **Project setup**: Harden Next.js/Electron/Tauri scaffold, configure strict TypeScript, lint, and formatting gates.
- **Local data layer**: Provision SQLite schema for structured telemetry and ChromaDB for embeddings; wrap both behind a local data-access layer.
- **Security & privacy**: Enable full local storage guarantees, encrypted at rest, with configurable data retention windows.
- **Diagnostics**: Instrument logging, metrics, and feature flags to gate experimental collectors.

## Phase 1 — Context Extraction (Non-Negotiable)
- **Window/app tracking**: OS-level hooks to record active window, app title, and timestamps.
- **Browser capture**: Chrome extension to capture URL + title + top-level DOM text; send locally via native messaging.
- **Lightweight OCR**: Integrate Tesseract for active window snapshots when DOM/text is unavailable; backoff to heuristics to avoid over-capture.
- **File activity**: File system watcher to log opened files, paths, and recency; detect downloads/desktop updates.
- **Temporal patterns**: Classify sessions as active/idle/focus; store recurring time blocks.
- **Entity spotting**: Lightweight NER over captured text to extract people, projects, and organizations.
- **Testing**: Replay synthetic sessions and validate capture completeness + performance budgets.

## Phase 2 — Cognitive Graph (Memory Fabric)
- **Schema**: Define nodes for tasks, files, webpages, people, projects, apps, habits, deadlines, and context blocks. Define edges like `belongs-to-project`, `opened-after`, `due-soon`, `must-follow-up-with`, and `activity-pattern-detected`.
- **Ingestion pipeline**: Normalize Phase 1 events into graph updates with deduplication, node merging, and aging rules for short-/mid-/long-term memories.
- **Embedding enrichment**: Persist embeddings for pages/files in ChromaDB and link to graph nodes for semantic lookup.
- **Query API**: Provide fast queries for "what matters now" (recency + priority), follow-ups, and relevant resources.
- **Testing**: Graph unit tests for merge rules, edge creation, and memory decay.

## Phase 3 — Mission Control (Autonomous Workflow Engine)
- **Trigger fabric**: Event-driven hooks for day start, idle return, task completion, context switches, and natural pauses.
- **Context interpreter**: Summarize current graph slice (recent tasks, people, files) and compute importance scores.
- **Next-best-action engine**: Blend heuristics + LLM summaries to rank actions; ensure explainability metadata for each suggestion.
- **UI surface**: Electron/Tauri window that quietly refreshes; cards for "Finished last", "Matters now", "Recommended next", "People to respond to", and "Resources".
- **Testing**: Scenario-driven tests that assert action ordering for known graph states.

## Phase 4 — Workspace Autopilot (Safe Autonomous Execution)
- **Classifier**: Semantic file classifier to map files to projects and destinations; duplicate detection by hash + similarity.
- **Planner**: Action planner that batches renames/moves/cleanup with dry-run previews.
- **Execution layer**: Safe, reversible operations with a local undo log and rate limits.
- **Automation triggers**: Run after downloads, desktop churn, or before a new workflow block; open necessary apps/files and close distractions.
- **Testing**: Sandboxed filesystem tests that validate reversibility and project grouping.

## Phase 5 — Reliability, Safety, and UX Polish
- **Guardrails**: User consent prompts for new collectors, with per-scope opt-out controls.
- **Performance**: CPU/GPU/IO budgets for OCR and embeddings; degrade gracefully under load.
- **Auditing**: Timeline view of actions taken/ignored; exportable logs for debugging.
- **Packaging**: Signed installers, auto-update channel, and crash recovery.

## Delivery Principles
- Ship vertical slices per phase with user-visible value.
- Keep all data local-first; no outbound network by default.
- Prefer reversible, observable actions before autonomous mutation.
- Maintain human-readable explanations for every automated decision.
