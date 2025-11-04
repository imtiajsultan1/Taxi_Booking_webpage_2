import { useAppContext } from "../context/AppContext"
import { translations } from "../lib/translations"

export default function Footer() {
  const { language } = useAppContext()
  const t = translations[language].footer

  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 py-16 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.85),_rgba(2,6,23,0.95))]" />
        <div className="absolute bottom-[-140px] right-[-160px] h-[360px] w-[360px] rounded-full bg-yellow-400/12 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_26px_70px_rgba(8,47,73,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_34px_80px_rgba(250,204,21,0.35)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-5">
              <h2 className="text-2xl font-semibold text-white">{t.heading}</h2>
              <p className="text-sm text-slate-300">{t.body}</p>
          <div className="grid gap-3 text-sm text-slate-100">
            <a href={`mailto:${t.email}`} className="font-semibold transition hover:text-yellow-300">
              {t.email}
            </a>
                <span className="text-slate-300">{t.phone}</span>
                <span className="text-slate-300">{t.address}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">{t.socialHeading}</h3>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-white/80">
                <a href="#" className="transition hover:text-yellow-300">
                  LinkedIn
                </a>
                <a href="#" className="transition hover:text-yellow-300">
                  X/Twitter
                </a>
                <a href="#" className="transition hover:text-yellow-300">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} {t.copyright}</p>
      </div>
    </footer>
  )
}
