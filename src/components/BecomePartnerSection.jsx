export default function BecomePartnerSection() {
  const benefitGroups = [
    {
      title: "Autonomy",
      items: ["Operate under your own brand.", "Choose your own business model."],
    },
    {
      title: "Enablement",
      items: [
        "Get instant access to our technical infrastructure and customers.",
        "Focus on operations - we handle the tech, consumer access, and promotions.",
      ],
    },
  ]

  const scrollToForm = () => {
    const element = document.getElementById("partner-form")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="become-a-partner" className="relative overflow-hidden bg-slate-950 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute right-[-160px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200/80">
              Partners
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Build Your Own Service on Our Platform</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              We&apos;re looking for local operators, entrepreneurs, and organizations who want to run their own ride,
              delivery, or local service network - powered by our technology.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_26px_70px_rgba(8,47,73,0.55)] backdrop-blur">
            <ul className="space-y-6">
              {benefitGroups.map((group) => (
                <li key={group.title} className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{group.title}</h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm font-semibold text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.45)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_30px_80px_rgba(8,47,73,0.55)] backdrop-blur lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">What You Get</h3>
            <p className="text-sm text-slate-300">
              Tap into our geospatial platform, gain instant customer visibility, and grow with transparent reporting,
              secure payments, and localized marketing support tailored to every city.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">How We Partner</h3>
            <p className="text-sm text-slate-300">
              Launch quickly with onboarding guidance, dedicated partner success, and tooling that adapts to your
              operational model—from subscription fleets to on-demand networks.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex rounded-full bg-yellow-400 px-10 py-3 text-base font-semibold text-slate-900 shadow-[0_22px_48px_rgba(250,204,21,0.45)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Apply to Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}
