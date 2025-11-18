import { Wifi, Coffee, Dumbbell, Bath, Waves, Car } from "lucide-react";

const items = [
  { icon: Wifi, label: "High‑speed Wi‑Fi" },
  { icon: Coffee, label: "Breakfast Included" },
  { icon: Dumbbell, label: "Modern Gym" },
  { icon: Bath, label: "Spa & Sauna" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Car, label: "Valet Parking" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-slate-950 text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Thoughtful amenities</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Everything you need for a perfect stay, designed for both leisure and business travelers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition">
              <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10 group-hover:bg-white/20">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm text-slate-200 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
