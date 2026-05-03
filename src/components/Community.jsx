export default function Community() {
  return (
    <section className="py-14 md:py-20 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-[#D90A14]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[400px] h-[200px] md:h-[300px] bg-[#D90A14]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
              Community
            </p>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              Join Our <span className="text-[#D90A14]">Community</span> &amp; Transform Together
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Be part of something bigger. Our FitMaker community is filled with
              motivated individuals who push each other to new heights every day.
              Share progress, get advice, and celebrate victories together.
            </p>

            <div className="flex flex-col gap-4 md:gap-5 mb-8 md:mb-10">
              {[
                { icon: '💬', title: 'Active Forums', desc: 'Connect with thousands of members daily' },
                { icon: '📱', title: 'Mobile App', desc: 'Track workouts, nutrition, and progress' },
                { icon: '🏆', title: 'Monthly Challenges', desc: 'Compete and win exciting prizes' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D90A14]/10 rounded-xl flex items-center justify-center text-lg md:text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[14px] md:text-[15px]">{item.title}</h4>
                    <p className="text-[#9CA3AF] text-xs md:text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <button className="bg-[#D90A14] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-[14px] md:text-[15px] font-medium hover:bg-[#b5080f] transition-colors">
                Join the Community
              </button>
              <button className="text-[#D90A14] text-[14px] md:text-[15px] font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right - Image collage */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="https://images.unsplash.com/photo-1549476464-37392f717541?w=300&h=400&fit=crop"
              alt="Community workout"
              className="w-full h-[200px] md:h-[240px] lg:h-[260px] object-cover rounded-xl md:rounded-2xl"
              style={{ filter: 'brightness(0.85)' }}
            />
            <div className="flex flex-col gap-3 md:gap-4">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
                alt="Group class"
                className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover rounded-xl md:rounded-2xl"
                style={{ filter: 'brightness(0.85)' }}
              />
              <div className="bg-[#D90A14] rounded-xl md:rounded-2xl p-4 md:p-5 flex flex-col justify-center">
                <p className="text-white font-bold text-2xl md:text-3xl">10K+</p>
                <p className="text-white/80 text-xs md:text-sm mt-1">Active Members</p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5">
              <p className="text-[#D90A14] font-bold text-2xl md:text-3xl">4.9★</p>
              <p className="text-white font-medium text-xs md:text-sm mt-1">Average Rating</p>
              <p className="text-[#9CA3AF] text-[10px] md:text-xs mt-0.5">From 2,400+ reviews</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=200&fit=crop"
              alt="Training community"
              className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover rounded-xl md:rounded-2xl"
              style={{ filter: 'brightness(0.85)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
