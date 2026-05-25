import { earnedGrowth } from "../data/seed";

export function EarnedGrowthCard() {
  const total = earnedGrowth.referralRevenue + earnedGrowth.paidRevenue;

  return (
    <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 to-slate-900/80 p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/90">
        Earned Growth
      </p>
      <div className="mt-2 flex items-end gap-3">
        <span className="text-4xl font-semibold text-emerald-300">
          {earnedGrowth.percent}%
        </span>
        <span className="pb-1 text-sm text-slate-400">of new revenue</span>
      </div>
      <p className="mt-1 text-sm text-emerald-200/80">{earnedGrowth.trend}</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${earnedGrowth.percent}%` }}
        />
      </div>
      <div className="mt-3 flex justify-between text-xs text-slate-400">
        <span>
          Trust & referrals ${earnedGrowth.referralRevenue.toLocaleString()}
        </span>
        <span>Paid ${earnedGrowth.paidRevenue.toLocaleString()}</span>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        ${total.toLocaleString()} new revenue (last 90 days) · mocked capture
      </p>
    </section>
  );
}
