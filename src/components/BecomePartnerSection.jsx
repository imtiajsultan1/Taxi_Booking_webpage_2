import { useAppContext } from "../context/AppContext"
import { translations } from "../lib/translations"

export default function BecomePartnerSection() {
  const { language } = useAppContext()
  const t = translations[language].become

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
              {t.pill}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h2>
            <p className="text-lg leading-relaxed text-slate-300">{t.intro}</p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_26px_70px_rgba(8,47,73,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_34px_80px_rgba(250,204,21,0.35)]">
            <ul className="space-y-6">
              {t.benefitGroups.map((group) => (
                <li key={group.title} className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{group.title}</h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm font-semibold text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_24px_55px_rgba(250,204,21,0.35)]"
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

        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_30px_80px_rgba(8,47,73,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_38px_90px_rgba(250,204,21,0.35)] lg:grid-cols-2">
          {t.infoColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <p className="text-sm text-slate-300">{column.body}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex rounded-full bg-yellow-400 px-10 py-3 text-base font-semibold text-slate-900 shadow-[0_22px_48px_rgba(250,204,21,0.45)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
