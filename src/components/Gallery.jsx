const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    alt: 'Gym floor',
    mdSpan: 'md:col-span-2',
    mdHeight: 'md:h-[280px] lg:h-[300px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    alt: 'Weight training',
    mdSpan: '',
    mdHeight: 'md:h-[280px] lg:h-[300px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
    alt: 'Cardio area',
    mdSpan: '',
    mdHeight: 'md:h-[200px] lg:h-[220px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    alt: 'HIIT class',
    mdSpan: '',
    mdHeight: 'md:h-[200px] lg:h-[220px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&h=400&fit=crop',
    alt: 'Boxing training',
    mdSpan: 'md:col-span-2',
    mdHeight: 'md:h-[200px] lg:h-[220px]',
  },
]

export default function Gallery() {
  return (
    <section className="py-14 md:py-20 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
              Our Facilities
            </p>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
              Inside <span className="text-[#D90A14]">FitMaker</span>
            </h2>
          </div>
          <button className="self-start sm:self-auto border border-[#D90A14] text-[#D90A14] px-5 md:px-6 py-2 md:py-2.5 rounded-xl text-[13px] md:text-[14px] font-medium hover:bg-[#D90A14] hover:text-white transition-all">
            View All Photos
          </button>
        </div>

        {/* Mobile: 2-col simple grid | md+: 3-col with spans */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden cursor-pointer h-[160px] sm:h-[180px] ${img.mdHeight} ${img.mdSpan}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'brightness(0.85) contrast(1.1) saturate(0.9)' }}
              />
              <div className="absolute inset-0 bg-[#D90A14]/0 group-hover:bg-[#D90A14]/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
