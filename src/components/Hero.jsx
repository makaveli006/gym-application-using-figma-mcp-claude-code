export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] overflow-hidden flex items-center pt-[64px] md:pt-[72px]">
      {/* Background decorative ellipses */}
      <div className="absolute left-0 top-0 bottom-0 w-[160px] md:w-[260px] bg-gradient-to-r from-[#D90A14]/20 to-transparent rounded-r-full blur-3xl" />
      <div className="absolute right-0 top-0 bottom-0 w-[200px] md:w-[338px] bg-gradient-to-l from-[#D90A14]/15 to-transparent rounded-l-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px] w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] py-10 md:py-14 lg:py-16">
          {/* Left content */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 md:w-8 bg-[#D90A14]" />
              <span className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest">
                Your Fitness Journey Starts Here
              </span>
            </div>

            <h1 className="text-white font-bold leading-tight">
              <span className="text-2xl md:text-3xl lg:text-5xl font-medium capitalize block mb-1">
                Achieve Your
              </span>
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-[#D90A14] block leading-none">
                FITNESS
              </span>
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-[#D90A14] block leading-none">
                GOALS
              </span>
              <span className="text-2xl md:text-3xl lg:text-5xl font-medium capitalize block mt-2">
                With FitMaker
              </span>
            </h1>

            <p className="text-[#9CA3AF] text-sm md:text-base lg:text-lg leading-relaxed max-w-[420px] md:max-w-[480px]">
              Join the community that transforms bodies and builds mental toughness.
              Expert coaches, proven programs, and a supportive community await you.
            </p>

            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <button className="bg-[#D90A14] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-[14px] md:text-[15px] font-medium hover:bg-[#b5080f] transition-colors shadow-lg shadow-[#D90A14]/30">
                Get Started
              </button>
              <button className="flex items-center gap-2 md:gap-3 text-white hover:text-[#D90A14] transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D90A14] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="text-[14px] md:text-[15px] font-medium">Watch Video</span>
              </button>
            </div>

            <div className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=40&h=40&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="member"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#0D0D0D] object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">10,000+ Members</p>
                <p className="text-[#9CA3AF] text-xs">Join our growing community</p>
              </div>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="relative flex justify-center md:justify-end order-first md:order-last">
            {/* Red glow behind athlete */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[380px] md:w-[360px] md:h-[460px] lg:w-[400px] lg:h-[500px] bg-[#D90A14]/20 rounded-full blur-[60px] md:blur-[80px]" />
            </div>

            {/* Athlete image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=700&fit=crop"
                alt="Fitness athlete"
                className="w-[280px] h-[360px] sm:w-[340px] sm:h-[420px] md:w-[400px] md:h-[500px] lg:w-[560px] lg:h-[660px] object-cover object-top rounded-2xl"
                style={{ filter: 'contrast(1.1) saturate(0.9)' }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-6 right-2 md:top-8 md:right-0 lg:-right-4 bg-[#1A1A1A] border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 z-20">
              <p className="text-[#D90A14] font-bold text-xl md:text-2xl">96%</p>
              <p className="text-white text-[10px] md:text-xs font-medium">Client Satisfaction</p>
            </div>
            <div className="absolute bottom-10 left-2 md:bottom-12 md:left-0 lg:-left-4 bg-[#1A1A1A] border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 z-20">
              <p className="text-[#D90A14] font-bold text-xl md:text-2xl">+5</p>
              <p className="text-white text-[10px] md:text-xs font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
