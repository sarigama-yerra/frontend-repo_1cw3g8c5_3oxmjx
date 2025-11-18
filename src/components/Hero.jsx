import { Menu, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1501117716987-c8e3f9fc0f54?q=80&w=2000&auto=format&fit=crop"
        alt="Hotel lobby"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/90" />

      <nav className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-wide">Hottel Ridox</a>
          <div className="hidden md:flex items-center gap-8 text-slate-100/90">
            <a href="#amenities" className="hover:text-white transition">Amenities</a>
            <a href="#rooms" className="hover:text-white transition">Rooms</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#book" className="ml-2 rounded-full bg-white/10 px-5 py-2 text-white backdrop-blur hover:bg-white/20 transition">Book now</a>
          </div>
          <button className="md:hidden text-white/90" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 md:pt-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100/90 ring-1 ring-white/20 backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Downtown • Ocean View • 24/7 Service
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Your luxurious escape at
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Hottel Ridox
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-slate-200/90 text-lg md:text-xl">
            Immerse yourself in timeless elegance, curated comfort, and exceptional hospitality in the heart of the city.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">
              Reserve your stay
            </a>
            <a href="#rooms" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition">
              Explore rooms
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-200/90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 012-3456</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <span>Complimentary breakfast • Free cancellation</span>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 right-0 text-slate-950" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,32L60,69.3C120,107,240,181,360,176C480,171,600,85,720,74.7C840,64,960,128,1080,133.3C1200,139,1320,85,1380,58.7L1440,32L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
      </svg>
    </header>
  );
}
