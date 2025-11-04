"use client"

import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { partnerStructure } from "../data/partners"
import { translations } from "../lib/translations"

function FormField({ id, label, placeholder = "", value, onChange, type = "text", required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner placeholder:text-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
      />
    </div>
  )
}

export default function PartnerForm() {
  const {
    formSubmitted,
    setFormSubmitted,
    selectedCountry,
    selectedCity,
    language,
  } = useAppContext()

  const t = translations[language].form

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    country: selectedCountry,
    city: "",
    serviceCategory: t.serviceOptions[0],
    message: "",
  })

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      serviceCategory: t.serviceOptions[0],
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      country: selectedCountry,
    }))
  }, [selectedCountry])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      address: "",
      country: selectedCountry,
      city: "",
      serviceCategory: t.serviceOptions[0],
      message: "",
    })
  }

  const countryOptions = Object.keys(partnerStructure)
  const formatCountry = (slug) => partnerStructure[slug]?.label?.[language] ?? slug
  const defaultCityPlaceholder =
    partnerStructure[selectedCountry]?.cities?.[selectedCity]?.label?.[language] ?? t.fields.city.placeholder

  return (
    <section id="partner-form" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,204,21,0.15),_transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t.heading}</h2>
          <p className="text-base text-white/70">{t.subheading}</p>
        </div>

        {formSubmitted && (
          <div className="mt-8 rounded-2xl border border-emerald-400/40 bg-emerald-500/15 px-6 py-4 text-center text-emerald-100 shadow-[0_18px_40px_rgba(16,185,129,0.25)]">
            {t.success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-10 rounded-[36px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_36px_90px_rgba(250,204,21,0.4)]"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              id="companyName"
              label={t.fields.company.label}
              placeholder={t.fields.company.placeholder}
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <FormField
              id="email"
              type="email"
              label={t.fields.email.label}
              placeholder={t.fields.email.placeholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormField
              id="phone"
              label={t.fields.phone.label}
              placeholder={t.fields.phone.placeholder}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <FormField
              id="address"
              label={t.fields.address.label}
              placeholder={t.fields.address.placeholder}
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.fields.country.label}
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="select-dark"
                >
                  {countryOptions.map((country) => (
                    <option key={country} value={country}>
                      {formatCountry(country)}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">▾</span>
              </div>
            </div>

            <FormField
              id="city"
              label={t.fields.city.label}
              placeholder={defaultCityPlaceholder}
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="serviceCategory"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
            >
              {t.fields.serviceCategory.label}
            </label>
            <div className="relative">
              <select
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                className="select-dark"
              >
                {t.serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">▾</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.fields.message.placeholder}
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner placeholder:text-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex rounded-full bg-yellow-400 px-10 py-3 text-base font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              {t.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

