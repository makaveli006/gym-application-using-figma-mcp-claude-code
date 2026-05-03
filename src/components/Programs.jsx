const programs = [
  {
    title: 'Weight Training',
    description: 'Build muscle mass and strength with our structured weight training programs',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
    tag: 'Strength',
    duration: '60 min',
  },
  {
    title: 'Cardio Blast',
    description: 'High-intensity cardio sessions to torch calories and boost endurance',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop',
    tag: 'Cardio',
    duration: '45 min',
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Improve mobility, reduce stress and enhance your overall body balance',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=300&fit=crop',
    tag: 'Flexibility',
    duration: '50 min',
  },
  {
    title: 'CrossFit Training',
    description: 'Functional movements performed at high intensity for total fitness',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop',
    tag: 'CrossFit',
    duration: '55 min',
  },
  {
    title: 'Boxing & MMA',
    description: 'Learn combat techniques while getting an incredible full-body workout',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
    tag: 'Combat',
    duration: '60 min',
  },
  {
    title: 'HIIT Sessions',
    description: 'Short bursts of intense exercise alternated with rest periods',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    tag: 'HIIT',
    duration: '30 min',
  },
]

export default function Programs() {
  return (
    <section className="py-14 md:py-20 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
              Our Programs
            </p>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
              Our <span className="text-[#D90A14]">Fitness</span> Programs
            </h2>
          </div>
          <p className="text-[#9CA3AF] max-w-full md:max-w-[320px] lg:max-w-[380px] text-sm leading-relaxed">
            Explore a wide range of expert-designed fitness programs to help you achieve your goals
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D90A14]/40 transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden h-[180px] md:h-[200px] lg:h-[220px]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#D90A14] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {program.tag}
                </span>
                <span className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {program.duration}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-white font-semibold text-base md:text-lg mb-1.5 group-hover:text-[#D90A14] transition-colors">
                  {program.title}
                </h3>
                <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {program.description}
                </p>
                <button className="flex items-center gap-2 text-[#D90A14] text-sm font-medium hover:gap-3 transition-all">
                  Learn More
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <button className="border border-[#D90A14] text-[#D90A14] px-7 md:px-8 py-2.5 md:py-3 rounded-xl text-[14px] md:text-[15px] font-medium hover:bg-[#D90A14] hover:text-white transition-all">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}
