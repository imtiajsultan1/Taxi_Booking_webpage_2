import { Globe2, Landmark, Settings2, Rocket } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import { translations } from "../lib/translations"

const icons = [Globe2, Landmark, Settings2, Rocket]

export default function AboutSection() {
  const { language } = useAppContext()
  const t = translations[language].about

  return (
    <section id="about-the-platform" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.4),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t.heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{t.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div
                key={feature.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_24px_60px_rgba(250,204,21,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-300">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="relative space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-white/80">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
