import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const phases = [
  {
    title: "Phase 0 — Foundations",
    summary:
      "Set up the secure, local-first baseline so later collectors and agents have a reliable home.",
    steps: [
      "Harden the desktop shell (Electron/Tauri) with strict TypeScript, linting, and telemetry toggles.",
      "Stand up SQLite + ChromaDB behind a local data-access layer with encryption at rest.",
      "Add diagnostics for capture completeness, latency, and resource budgets.",
    ],
  },
  {
    title: "Phase 1 — Context Extraction",
    summary:
      "Continuously capture windows, URLs, text, files, and time segments with lightweight OCR fallbacks.",
    steps: [
      "Ship OS hooks for active window/app tracking and session timing.",
      "Deliver the Chrome extension with local native messaging for URL + DOM capture.",
      "Integrate Tesseract snapshots for non-DOM apps and file-system watchers for desktop/downloads.",
    ],
  },
  {
    title: "Phase 2 — Cognitive Graph",
    summary:
      "Normalize captured signals into a living graph with short-, mid-, and long-term memory layers.",
    steps: [
      "Define node/edge schemas for tasks, files, people, projects, and habits.",
      "Build ingestion to merge events, attach embeddings, and decay or promote memories over time.",
      "Expose a query API for \"what matters now\", follow-ups, and related resources.",
    ],
  },
  {
    title: "Phase 3 — Mission Control",
    summary:
      "Generate proactive workflows triggered by day start, idle return, and context changes.",
    steps: [
      "Implement the context interpreter that scores relevance from the graph slice.",
      "Blend heuristics + local LLM summaries to propose next-best actions with explanations.",
      "Ship the Mission Control UI surface with cards for recent work, priorities, and people to follow up with.",
    ],
  },
  {
    title: "Phase 4 — Workspace Autopilot",
    summary:
      "Safely organize the workspace with reversible, observable actions.",
    steps: [
      "Train the semantic file classifier and duplicate detector with dry-run previews.",
      "Batch renames/moves/cleanup into a reversible execution layer with an undo log.",
      "Schedule autopilot runs around downloads, desktop churn, and new workflow blocks.",
    ],
  },
  {
    title: "Phase 5 — Reliability & Safety",
    summary:
      "Add guardrails, auditing, and performance protections for always-on autonomy.",
    steps: [
      "Per-scope consent, opt-outs, and a user-facing action/audit timeline.",
      "Resource budgets for OCR/embeddings with graceful degradation.",
      "Packaging, signed updates, and crash recovery for the desktop agent.",
    ],
  },
];

export function ImplementationRoadmap({ className }: { className?: string }) {
  return (
    <Container className={cn("py-20 md:py-24", className)}>
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
            Bridge MVP
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">Step-by-step implementation</h2>
          <p className="text-base text-muted dark:text-muted-dark md:text-lg">
            A sequenced plan that turns the specification into shippable, observable milestones without
            compromising the local-first contract.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-2xl border border-primary/10 bg-white/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur dark:border-white/10 dark:bg-black/50"
            >
              <h3 className="text-xl font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm text-muted dark:text-muted-dark">{phase.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/80 dark:text-white/80">
                {phase.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
