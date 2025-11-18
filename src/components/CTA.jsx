export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0, transparent 50%),\n           radial-gradient(circle at 80% 0%, rgba(255,255,255,0.2) 0, transparent 40%),\n           radial-gradient(circle at 40% 80%, rgba(255,255,255,0.25) 0, transparent 45%)'
      }} />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to experience Ridox?</h2>
            <p className="mt-3 text-blue-50/90 max-w-lg">
              Book directly with us for the best rates, flexible cancellation, and exclusive member perks.
            </p>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-2xl ring-1 ring-white/20 p-4 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="date" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-white/20 focus:ring-2 focus:ring-white/40 outline-none" placeholder="Check-in" />
            <input type="date" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-white/20 focus:ring-2 focus:ring-white/40 outline-none" placeholder="Check-out" />
            <select className="w-full rounded-lg bg-white/10 px-4 py-3 text-white ring-1 ring-white/20 focus:ring-2 focus:ring-white/40 outline-none">
              <option className="text-slate-900">2 Guests</option>
              <option className="text-slate-900">1 Guest</option>
              <option className="text-slate-900">3 Guests</option>
              <option className="text-slate-900">4 Guests</option>
            </select>
            <button className="sm:col-span-3 rounded-lg bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-blue-50 transition">Check availability</button>
          </form>
        </div>
      </div>
    </section>
  );
}
