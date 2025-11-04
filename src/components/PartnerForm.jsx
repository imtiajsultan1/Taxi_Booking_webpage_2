"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"

const countries = ["Belarus"]
const serviceCategories = [
  "Ride-sharing",
  "Delivery",
  "Local services",
  "Advertising / Promotions",
]

export default function PartnerForm() {
  const { formSubmitted, setFormSubmitted } = useAppContext()
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    country: countries[0],
    city: "",
    serviceCategory: serviceCategories[0],
    message: "",
  })

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
      country: countries[0],
      city: "",
      serviceCategory: serviceCategories[0],
      message: "",
    })
  }

  return (
    <section id="partner-form" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,204,21,0.15),_transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Join Our Partner Network</h2>
        </div>

        {formSubmitted && (
          <div className="mt-8 rounded-2xl border border-emerald-400/40 bg-emerald-500/15 px-6 py-4 text-center text-emerald-100 shadow-[0_18px_40px_rgba(16,185,129,0.25)]">
            Thank you! Our team will contact you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-10 rounded-[36px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Company / Team Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="select-dark"
                >
                  {countries.map((country) => (
                    <option key={country} value={country} className="text-slate-900">
                      {country}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">▾</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="serviceCategory" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Service Category
            </label>
            <div className="relative">
              <select
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                className="select-dark"
              >
                {serviceCategories.map((service) => (
                  <option key={service} value={service} className="text-slate-900">
                    {service}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">▾</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Message / Description
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-inner focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex rounded-full bg-yellow-400 px-10 py-3 text-base font-semibold text-black shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
