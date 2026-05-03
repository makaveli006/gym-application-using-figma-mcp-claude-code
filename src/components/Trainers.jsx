const trainers = [
  {
    name: 'Ryan Carter',
    role: 'Head Strength Coach',
    specialties: ['Powerlifting', 'Bodybuilding', 'Nutrition'],
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&crop=face',
    instagram: '@ryan_fit',
  },
  {
    name: 'Sara Mitchell',
    role: 'CrossFit Trainer',
    specialties: ['CrossFit', 'HIIT', 'Olympic Lifting'],
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1609899537878-14f01c5a1a1c?w=400&h=500&fit=crop&crop=face',
    instagram: '@sara_strong',
  },
  {
    name: 'Marcus Johnson',
    role: 'Cardio & Boxing Coach',
    specialties: ['Boxing', 'MMA', 'Cardio'],
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&h=500&fit=crop&crop=face',
    instagram: '@marcus_combat',
  },
  {
    name: 'Lena Hoffman',
    role: 'Yoga & Wellness Coach',
    specialties: ['Yoga', 'Pilates', 'Meditation'],
    experience: '7 years',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&crop=face',
    instagram: '@lena_wellness',
  },
]

export default function Trainers() {
  return (
    <section className="py-14 md:py-20 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
            Our Experts
          </p>
          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Meet Our <span className="text-[#D90A14]">Trainers</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-[380px] md:max-w-[460px] mx-auto text-sm md:text-base">
            Our certified coaches are dedicated to helping you unlock your full potential
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D90A14]/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-[200px] sm:h-[260px] md:h-[280px] lg:h-[320px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'brightness(0.9) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#D90A14] text-xs font-medium">{trainer.instagram}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-4 lg:p-5">
                <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">{trainer.name}</h3>
                <p className="text-[#D90A14] text-xs md:text-sm font-medium mt-0.5 mb-2 md:mb-3">{trainer.role}</p>

                <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                  {trainer.specialties.map((s) => (
                    <span key={s} className="bg-[#262626] text-[#9CA3AF] text-[10px] md:text-xs px-2 py-0.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[#9CA3AF] text-[10px] md:text-xs">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {trainer.experience} experience
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
