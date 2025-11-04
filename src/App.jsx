/* 
  Main App component - root container for the single-page application.
  Combines all section components and wraps app with Context API provider.
  Manages overall application structure and layout.
*/

import { AppProvider } from "./context/AppContext"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import PartnerDirectory from "./components/PartnerDirectory"
import BecomePartnerSection from "./components/BecomePartnerSection"
import PartnerForm from "./components/PartnerForm"
import Footer from "./components/Footer"

function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 -left-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="absolute top-1/4 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-500/10 blur-2xl" />
        </div>

        <main className="relative flex flex-col gap-0">
          <HeroSection />
          <AboutSection />
          <PartnerDirectory />
          <BecomePartnerSection />
          <PartnerForm />
          <Footer />
        </main>
      </div>
    </AppProvider>
  )
}

export default App
