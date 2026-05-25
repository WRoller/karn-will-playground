import { ActionFeed } from "./components/ActionFeed";
import { EarnedGrowthCard } from "./components/EarnedGrowthCard";
import { GraphView } from "./components/GraphView";
import { business } from "./data/seed";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-800 bg-slate-950/90 px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-500/90">
              Source
            </p>
            <h1 className="text-xl font-semibold text-white">
              {business.name}
            </h1>
            <p className="text-sm text-slate-400">
              {business.vertical} · Referral graph demo
            </p>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500">
            Prototype · seed data
          </span>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-6">
          <EarnedGrowthCard />
          <GraphView />
        </div>
        <ActionFeed />
      </main>
    </div>
  );
}
