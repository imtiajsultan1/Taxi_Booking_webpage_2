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
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-100 py-24 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-80px] h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Build Your Own Service on Our Platform</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            We&apos;re looking for local operators, entrepreneurs, and organizations who want to run their own ride,
            delivery, or local service network - powered by our technology.
          </p>
        </div>

        <div className="grid gap-10 rounded-[32px] border border-amber-200 bg-white p-10 shadow-[0_24px_60px_rgba(148,163,184,0.25)] md:grid-cols-[1.1fr_0.9fr]">
          <ul className="space-y-5 text-base font-semibold text-slate-800">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-2xl border border-amber-100 bg-amber-50/70 px-6 py-4 shadow-[0_10px_30px_rgba(251,191,36,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-10 shadow-inner">
            <div className="relative flex h-32 w-full max-w-[260px] items-center justify-center">
              <div className="absolute inset-0 rounded-3xl border border-slate-200 bg-white shadow-[0_18px_35px_rgba(148,163,184,0.25)]" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-amber-200 bg-amber-50/60">
                <div className="h-14 w-14 rounded-full border border-amber-300/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex rounded-full bg-slate-900 px-10 py-3 text-base font-semibold text-amber-200 shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Apply to Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}
