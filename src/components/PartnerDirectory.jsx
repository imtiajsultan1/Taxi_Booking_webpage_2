import { useAppContext } from "../context/AppContext"
import { partnerStructure } from "../data/partners"
import { translations } from "../lib/translations"

export default function PartnerDirectory() {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedCity,
    setSelectedCity,
    language,
  } = useAppContext()

  const t = translations[language].partnerDirectory

  const countrySlugs = Object.keys(partnerStructure)
  const availableCities = selectedCountry ? Object.keys(partnerStructure[selectedCountry]?.cities ?? {}) : []
  const partners =
    selectedCountry && selectedCity
      ? partnerStructure[selectedCountry]?.cities?.[selectedCity]?.partners ?? []
      : []

  const handleCountryChange = (event) => {
    const country = event.target.value
    setSelectedCountry(country)

    const firstCity = Object.keys(partnerStructure[country]?.cities ?? {})[0] ?? ""
    setSelectedCity(firstCity)
  }

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }

  const formatCountry = (slug) => partnerStructure[slug]?.label?.[language] ?? slug
  const formatCity = (slug) => partnerStructure[selectedCountry]?.cities?.[slug]?.label?.[language] ?? slug

  return (
    <section id="partner-directory" className="relative overflow-hidden bg-slate-950 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_70px_rgba(15,23,42,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_34px_80px_rgba(250,204,21,0.35)]">
            <div className="flex flex-col gap-8">
              {[
                {
                  id: "country",
                  label: t.filters.country,
                  value: selectedCountry,
                  onChange: handleCountryChange,
                  options: countrySlugs,
                  formatter: formatCountry,
                },
                {
                  id: "city",
                  label: t.filters.city,
                  value: selectedCity,
                  onChange: handleCityChange,
                  options: availableCities,
                  formatter: formatCity,
                },
              ].map(({ id, label, value, onChange, options, formatter }) => (
                <div key={id} className="relative flex flex-col gap-3">
                  <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {label}
                  </label>
                  <div className="relative">
                    <select id={id} value={value} onChange={onChange} className="select-dark">
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {formatter(option)}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">
                      ▾
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_80px_rgba(8,47,73,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_35px_85px_rgba(250,204,21,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <dl className="relative space-y-6 text-slate-200">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">
                      {t.labels.partner}
                    </dt>
                    <dd className="text-2xl font-semibold text-white">{partner.name[language]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">
                      {t.labels.location}
                    </dt>
                    <dd className="text-base text-slate-200">{partner.location[language]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">
                      {t.labels.services}
                    </dt>
                    <dd className="text-base text-slate-200">{partner.services[language]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">
                      {t.labels.model}
                    </dt>
                    <dd className="text-base text-slate-200">{partner.model[language]}</dd>
                  </div>
                </dl>

                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-10 inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(250,204,21,0.4)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  {partner.websiteLabel[language] ?? t.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
