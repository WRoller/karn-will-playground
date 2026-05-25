import { topAdvocate } from "../data/seed";

function formatMoney(n: number) {
  return `$${n.toLocaleString()}`;
}

export function GraphView() {
  const a = topAdvocate;

  return (
    <section className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Referral graph
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">{a.name}</h2>
          <p className="text-sm text-slate-400">{a.role}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Strength</p>
          <p className="text-xl font-semibold text-amber-300">{a.strengthScore}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="w-full max-w-xs rounded-xl border-2 border-amber-500/50 bg-amber-950/40 px-4 py-3 text-center">
          <p className="font-medium text-amber-100">{a.name}</p>
          <p className="text-xs text-amber-200/70">Advocate · root</p>
        </div>

        <div className="flex h-6 w-px bg-slate-600" aria-hidden />

        <div className="grid w-full gap-2 sm:grid-cols-3">
          {a.referrals.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-slate-600/80 bg-slate-800/50 px-3 py-3 text-center"
            >
              <p className="text-sm font-medium text-slate-100">{c.name}</p>
              <p className="mt-1 text-xs text-emerald-400/90">
                {formatMoney(c.ltv)} LTV
              </p>
              <p className="mt-0.5 text-xs text-slate-500">{c.lastVisit}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 w-full rounded-lg bg-slate-800/80 px-4 py-2 text-center text-sm">
          <span className="text-slate-400">Subtree LTV </span>
          <span className="font-semibold text-emerald-300">
            {formatMoney(a.subtreeLtv)}
          </span>
          <span className="text-slate-500"> · {a.referrals.length} referrals</span>
        </div>
      </div>
    </section>
  );
}
