"use client"

import Lottie from "lottie-react"
import mapPointer from "../assets/Map Location Pointer.json"
import { useAppContext } from "../context/AppContext"
import { translations } from "../lib/translations"

export default function HeroSection() {
  const { language, toggleLanguage } = useAppContext()
  const t = translations[language].hero

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_rgba(2,6,23,0.95))]" />
        <div className="absolute -top-24 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-160px] h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-6">
        <div className="mb-10 flex justify-end">
          <button
            type="button"
            aria-label={t.languageToggleAria}
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:border-yellow-400/60 hover:text-white"
          >
            <span
              className={`flex-1 rounded-full px-3 py-1 text-center transition-all duration-300 ease-out ${
                language === "en"
                  ? "bg-yellow-400 text-slate-900 shadow-[0_12px_30px_rgba(250,204,21,0.35)]"
                  : "text-white/60"
              }`}
            >
              EN
            </span>
            <span className="text-white/40">|</span>
            <span
              className={`flex-1 rounded-full px-3 py-1 text-center transition-all duration-300 ease-out ${
                language === "ru"
                  ? "bg-yellow-400 text-slate-900 shadow-[0_12px_30px_rgba(250,204,21,0.35)]"
                  : "text-white/60"
              }`}
            >
              RU
            </span>
          </button>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-10">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.heading}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">{t.subheading}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("partner-directory")}
                className="rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                {t.primaryCta}
              </button>
              <button
                onClick={() => scrollToSection("partner-form")}
                className="rounded-full border border-yellow-400/70 px-8 py-3 text-base font-semibold text-yellow-300 transition hover:-translate-y-0.5 hover:bg-yellow-300/10"
              >
                {t.secondaryCta}
              </button>
            </div>
          </div>

          <div className="hidden h-full w-full place-items-center lg:grid">
            <div className="relative flex h-[380px] w-[380px] items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <div className="absolute inset-10 rounded-[28px] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 shadow-[0_0_80px_rgba(250,204,21,0.25)]" />
              <Lottie animationData={mapPointer} loop autoplay className="relative h-[260px] w-[260px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
