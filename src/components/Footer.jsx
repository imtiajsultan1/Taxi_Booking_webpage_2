export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 py-16 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.85),_rgba(2,6,23,0.95))]" />
        <div className="absolute bottom-[-140px] right-[-160px] h-[360px] w-[360px] rounded-full bg-yellow-400/12 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="text-sm text-slate-300">
            Connect with our partner success team to explore opportunities, request a platform walkthrough, or plan
            your launch in a new city.
          </p>
          <div className="grid gap-3 text-sm text-slate-100">
            <a href="mailto:support@yourdomain.com" className="font-semibold transition hover:text-yellow-300">
              support@yourdomain.com
            </a>
            <span className="text-slate-300">Phone: +XXX XX XXX XXXX</span>
            <span className="text-slate-300">Address: [Your HQ address]</span>
          </div>
        </div>

        <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_26px_70px_rgba(8,47,73,0.55)] backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Stay Connected</h3>
          <div className="grid gap-3 text-sm font-semibold text-white/80">
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
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} RideHub. All rights reserved. Powering local services everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
