export default function BecomePartnerSection() {
  const benefits = [
    "Operate under your own brand.",
    "Choose your own business model.",
    "Get instant access to our technical infrastructure and customers.",
    "Focus on operations - we handle the tech, consumer access, and promotions.",
  ]

  const scrollToForm = () => {
    const element = document.getElementById("partner-form")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="become-a-partner"
      className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute right-[-140px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-emerald-400/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Build Your Own Service on Our Platform</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            We&apos;re looking for local operators, entrepreneurs, and organizations who want to run their own ride,
            delivery, or local service network - powered by our technology.
          </p>
        </div>

        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_80px_rgba(8,47,73,0.55)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <ul className="space-y-5 text-base font-semibold text-slate-100">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:border-yellow-400/40 hover:bg-white/[0.12]"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_32px_70px_rgba(8,47,73,0.55)]">
            <div className="relative flex h-32 w-full max-w-[260px] items-center justify-center">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_18px_35px_rgba(8,47,73,0.6)]" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-500/10">
                <div className="h-14 w-14 rounded-full border border-yellow-500/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
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
