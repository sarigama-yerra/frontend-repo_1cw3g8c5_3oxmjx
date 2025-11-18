import Hero from './components/Hero'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Amenities />
      <Rooms />
      <CTA />
      <footer id="contact" className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-slate-300">
          <div>
            <h4 className="text-white font-semibold">Hottel Ridox</h4>
            <p className="mt-3 text-sm text-slate-400">A sanctuary of comfort and sophistication by the sea.</p>
          </div>
          <div>
            <h5 className="text-white font-medium">Explore</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
              <li><a href="#rooms" className="hover:text-white transition">Rooms</a></li>
              <li><a href="#book" className="hover:text-white transition">Book</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>+1 (555) 012-3456</li>
              <li>hello@ridoxhotel.com</li>
              <li>123 Ocean Ave, Bay City</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Follow</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-slate-500 border-t border-white/10">© {new Date().getFullYear()} Hottel Ridox. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
