import { useState } from "react";
import { actions, type ActionCard } from "../data/seed";

const typeLabels: Record<ActionCard["type"], string> = {
  thank: "Thank",
  reengage: "Re-engage",
  ask: "Ask (peak window)",
};

const typeColors: Record<ActionCard["type"], string> = {
  thank: "bg-sky-500/20 text-sky-300",
  reengage: "bg-violet-500/20 text-violet-300",
  ask: "bg-amber-500/20 text-amber-300",
};

export function ActionFeed() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyMessage(action: ActionCard) {
    await navigator.clipboard.writeText(action.message);
    setCopiedId(action.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <section className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        Today&apos;s actions
      </p>
      <p className="mt-1 text-sm text-slate-400">
        Suggested by Growth Copilot · one-tap copy (mock send)
      </p>

      <ul className="mt-4 space-y-3">
        {actions.map((action) => (
          <li
            key={action.id}
            className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[action.type]}`}
              >
                {typeLabels[action.type]}
              </span>
              {action.priority === "high" && (
                <span className="text-xs text-rose-400/90">High priority</span>
              )}
            </div>
            <h3 className="mt-2 font-medium text-white">{action.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{action.reason}</p>
            <p className="mt-3 rounded-lg bg-slate-900/80 p-3 text-sm italic text-slate-300">
              &ldquo;{action.message}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => copyMessage(action)}
              className="mt-3 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 sm:w-auto"
            >
              {copiedId === action.id ? "Copied!" : "Copy message"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
