export default function Rooms() {
  const rooms = [
    {
      name: "Deluxe King",
      img:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop",
      price: 189,
      features: ["City view", "King bed", "Ensuite bath"],
    },
    {
      name: "Ocean Suite",
      img:
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2000&auto=format&fit=crop",
      price: 289,
      features: ["Ocean view", "Living area", "Balcony"],
    },
    {
      name: "Executive Twin",
      img:
        "https://images.unsplash.com/photo-1505692794403-34d4982efcf8?q=80&w=2000&auto=format&fit=crop",
      price: 159,
      features: ["Workspace", "Twin beds", "Rain shower"],
    },
  ];

  return (
    <section id="rooms" className="bg-slate-950 text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Signature rooms</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Beautifully appointed spaces crafted for comfort. Choose the perfect room for your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={room.img} alt={room.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{room.name}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm">${room.price}/night</span>
                </div>
              </div>
              <div className="p-4 md:p-5 flex items-center gap-3 text-slate-300 text-sm">
                {room.features.map((f) => (
                  <span key={f} className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
