import { Globe2, Landmark, Settings2, Rocket } from "lucide-react"

const features = [
  {
    icon: Globe2,
    description: "Unified platform for ride-sharing, delivery, and local services.",
  },
  {
    icon: Landmark,
    description: "Local partners operate under their own brands.",
  },
  {
    icon: Settings2,
    description: "We handle the tech, marketing, and consumer access.",
  },
  {
    icon: Rocket,
    description: "Scalable, flexible, and ready for any market.",
  },
]

export default function AboutSection() {
  return (
    <section id="about-the-platform" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.4),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Empowering Local Partners with Global Technology
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We build the technology that powers geospatial services. Our partners bring their local expertise, manage
            service providers, and define their own business models. Together, we offer consumers more choices - transparent
            pricing, local operators, and seamless experiences - all in one app.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, description }) => (
            <div
              key={description}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_24px_60px_rgba(250,204,21,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-300">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="relative text-base leading-relaxed text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
