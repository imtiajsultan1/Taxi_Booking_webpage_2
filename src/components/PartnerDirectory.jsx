import { useAppContext } from "../context/AppContext"

const arrow = String.fromCharCode(8594)

const partnerData = {
  Belarus: {
    Mogilev: [
      {
        partner: "AutoFlot Dispatcher",
        services: "Ride-sharing",
        model: "Subscription-based driver network where drivers set their own prices.",
        websiteLabel: `Visit AutoFlot Website ${arrow}`,
        websiteUrl: "https://autoflot.by/",
      },
    ],
  },
}

export default function PartnerDirectory() {
  const { selectedCountry, setSelectedCountry, selectedCity, setSelectedCity } = useAppContext()

  const countries = Object.keys(partnerData)
  const cities = selectedCountry ? Object.keys(partnerData[selectedCountry]) : []
  const partners =
    selectedCountry && selectedCity ? partnerData[selectedCountry]?.[selectedCity] ?? [] : []

  const handleCountryChange = (event) => {
    const country = event.target.value
    setSelectedCountry(country)

    const firstCity = Object.keys(partnerData[country] ?? {})[0] ?? ""
    setSelectedCity(firstCity)
  }

  return (
    <section
      id="partner-directory"
      className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Explore Our Partners Around the World</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_70px_rgba(15,23,42,0.55)] backdrop-blur">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25)] focus:border-yellow-300/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  City
                </label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(event) => setSelectedCity(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25)] focus:border-yellow-300/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {partners.map(({ partner, services, model, websiteLabel, websiteUrl }) => (
              <article
                key={partner}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_80px_rgba(8,47,73,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_35px_85px_rgba(250,204,21,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <dl className="relative space-y-6 text-slate-200">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">Partner:</dt>
                    <dd className="text-2xl font-semibold text-white">{partner}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">Location:</dt>
                    <dd className="text-base text-slate-200">
                      {selectedCity}, {selectedCountry}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">Services:</dt>
                    <dd className="text-base text-slate-200">{services}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/80">Model:</dt>
                    <dd className="text-base text-slate-200">{model}</dd>
                  </div>
                </dl>

                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-10 inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(250,204,21,0.4)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  {websiteLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
