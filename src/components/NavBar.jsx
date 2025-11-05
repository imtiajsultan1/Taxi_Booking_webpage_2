import logoImage from "../assets/logo.jpg"
import { useAppContext } from "../context/AppContext"
import { translations } from "../lib/translations"

const linkTargets = {
  consumers: "#home",
  business: "#partner-directory",
  careers: "#partner-form",
  blog: "#contact",
}

export default function NavBar() {
  const { language, toggleLanguage } = useAppContext()
  const navItems = translations[language].nav.items
  const heroText = translations[language].hero

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      <nav className="mt-6 flex w-[min(1100px,95%)] items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-lg bg-black/40">
            <img src={logoImage} alt="Navidi logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-200/80">Navidi</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-sm font-semibold text-white/70">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={linkTargets[item.id] ?? "#"}
                  className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle heroText={heroText} language={language} toggleLanguage={toggleLanguage} />
        </div>

        <LanguageToggle
          heroText={heroText}
          language={language}
          toggleLanguage={toggleLanguage}
          className="md:hidden"
        />
      </nav>
    </header>
  )
}

function LanguageToggle({ heroText, language, toggleLanguage, className = "" }) {
  const isEnglish = language === "en"
  const highlightLeft = isEnglish ? "6px" : "calc(50% + 3px)"
  const highlightWidth = "calc(50% - 9px)"

  return (
    <button
      type="button"
      aria-label={heroText.languageToggleAria}
      onClick={toggleLanguage}
      className={`relative flex h-9 w-28 items-center overflow-hidden rounded-full border border-yellow-500/60 bg-black/40 px-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 shadow-[0_16px_40px_rgba(15,23,42,0.55)] transition hover:border-yellow-400/80 hover:text-white ${className}`}
    >
      <span className="pointer-events-none absolute inset-[5px] rounded-full border border-yellow-400/50" />
      <span
        className="pointer-events-none absolute top-[6px] bottom-[6px] rounded-full bg-yellow-400 text-sm font-bold text-slate-900 shadow-[0_12px_30px_rgba(250,204,21,0.35)] transition-all duration-300 ease-in-out"
        style={{ left: highlightLeft, width: highlightWidth }}
      >
        {isEnglish ? "EN" : "RU"}
      </span>
      <span className={`relative z-10 flex-1 text-center transition-colors ${isEnglish ? "text-transparent" : "text-white/60"}`}>
        EN
      </span>
      <span className={`relative z-10 flex-1 text-center transition-colors ${!isEnglish ? "text-transparent" : "text-white/60"}`}>
        RU
      </span>
    </button>
  )
}


