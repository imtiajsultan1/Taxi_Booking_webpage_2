export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.8),_rgba(2,6,23,0.95))]" />
        <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-yellow-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 text-white">
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_28px_60px_rgba(15,23,42,0.6)] backdrop-blur">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <ul className="space-y-3 text-base text-white/75">
            <li>Email: support@[yourdomain].com</li>
            <li>Phone: +XXX XX XXX XXXX</li>
            <li>Address: [Your HQ address]</li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white/75 backdrop-blur">
          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-white">
            X/Twitter
          </a>
          <a href="#" className="transition hover:text-white">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
