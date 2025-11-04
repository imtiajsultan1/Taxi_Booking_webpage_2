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
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-100 py-24 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute bottom-[-90px] right-[-130px] h-80 w-80 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Explore Our Partners Around the World</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[32px] border border-amber-100 bg-white p-8 shadow-[0_20px_45px_rgba(203,213,225,0.35)]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  City
                </label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(event) => setSelectedCity(event.target.value)}
                  className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
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
                className="group relative overflow-hidden rounded-[32px] border border-amber-100 bg-white p-10 shadow-[0_28px_65px_rgba(203,213,225,0.45)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_32px_75px_rgba(253,230,138,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/0 via-amber-100/0 to-amber-100/40 opacity-0 transition duration-300 group-hover:opacity-100" />
                <dl className="relative space-y-6 text-slate-700">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Partner:</dt>
                    <dd className="text-2xl font-semibold text-slate-900">{partner}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Location:</dt>
                    <dd className="text-base">{selectedCity}, {selectedCountry}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Services:</dt>
                    <dd className="text-base">{services}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Model:</dt>
                    <dd className="text-base">{model}</dd>
                  </div>
                </dl>

                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-amber-200 shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:bg-slate-800"
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
