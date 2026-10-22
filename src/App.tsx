const stats = [
  { label: 'Total savings', value: 'KSh 2.4M', change: '+12.5%', accent: 'emerald' },
  { label: 'Active members', value: '486', change: '+24', accent: 'sky' },
  { label: 'Loan portfolio', value: 'KSh 1.1M', change: '+8.1%', accent: 'amber' },
  { label: 'On-time payments', value: '94.6%', change: '+2.4%', accent: 'violet' },
]

const goals = [
  { name: 'School fees fund', amount: 'KSh 280,000', progress: 72, due: 'Due in 9 days' },
  { name: 'Emergency reserve', amount: 'KSh 150,000', progress: 54, due: 'Due in 21 days' },
  { name: 'Business capital', amount: 'KSh 620,000', progress: 81, due: 'Due in 14 days' },
]

const activities = [
  { title: 'Contribution received', detail: 'Mary Wanjiku contributed KSh 8,500', time: '2h ago' },
  { title: 'Loan approved', detail: 'Peter Njoroge loan of KSh 45,000 approved', time: '5h ago' },
  { title: 'Meeting scheduled', detail: 'Monthly general meeting set for Friday', time: '1d ago' },
  { title: 'Fine issued', detail: 'Late payment fine processed for 3 members', time: '2d ago' },
]

const quickActions = ['New member', 'Collect funds', 'Loan review', 'Generate report']

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-emerald-950/20 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/50">
              <img src="/logo.svg" alt="Smart Chama logo" className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">Smart Chama</p>
              <h1 className="text-xl font-semibold text-white">Member dashboard</h1>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            {['Overview', 'Contributions', 'Loans', 'Members', 'Reports'].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 transition hover:border-emerald-400/50 hover:text-white"
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        <main className="space-y-8">
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-lg shadow-slate-950/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
              </article>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Group performance</p>
                  <h2 className="text-2xl font-semibold text-white">Savings momentum</h2>
                </div>
                <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 transition hover:bg-emerald-400" type="button">
                  Export report
                </button>
              </div>

              <div className="grid grid-cols-7 gap-3">
                {[42, 58, 48, 76, 72, 88, 96].map((bar, index) => (
                  <div key={index} className="flex h-40 items-end justify-center">
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-500 via-emerald-400 to-lime-300"
                      style={{ height: `${bar}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Quick actions</h3>
                <span className="rounded-full bg-sky-500/10 px-2 py-1 text-xs text-sky-300">Live</span>
              </div>

              <div className="space-y-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                    type="button"
                  >
                    <span>{action}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                ))}
              </div>
            </aside>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Goal tracker</h3>
                <span className="text-sm text-slate-400">This cycle</span>
              </div>

              <div className="space-y-5">
                {goals.map((goal) => (
                  <div key={goal.name} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{goal.name}</p>
                        <p className="text-sm text-slate-400">{goal.amount}</p>
                      </div>
                      <span className="text-sm text-emerald-300">{goal.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{goal.due}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Recent activity</h3>
                <button className="text-sm text-emerald-300" type="button">View all</button>
              </div>

              <ul className="space-y-4">
                {activities.map((item) => (
                  <li key={item.title} className="flex gap-3 border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="flex-1">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                    </div>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
