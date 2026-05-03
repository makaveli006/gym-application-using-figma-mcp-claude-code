const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 10h11M6.5 13.5h7M3 3h18v18H3z" />
        <path d="M14 17.5l2 2 4-4" />
      </svg>
    ),
    title: 'Custom Workout Plans',
    description: 'Personalized training programs tailored to your fitness level and goals.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    ),
    title: 'Expert Certified Coaches',
    description: 'Work with nationally certified trainers who bring years of experience.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Advanced Equipment',
    description: 'State-of-the-art machines and free weights for every workout need.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: 'Nutrition Guidance',
    description: 'Expert dietary advice and meal planning to accelerate your results.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '24/7 Gym Access',
    description: 'Train whenever it fits your schedule with round-the-clock access.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Community Support',
    description: 'A motivating community of like-minded individuals pushing each other.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D90A14]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=800&fit=crop"
                alt="Training session"
                className="w-full h-[320px] md:h-[420px] lg:h-[600px] object-cover"
                style={{ filter: 'brightness(0.85) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#D90A14] rounded-xl md:rounded-2xl p-4 md:p-5 max-w-[180px] md:max-w-[200px]">
              <p className="text-white font-bold text-2xl md:text-3xl">500+</p>
              <p className="text-white/80 text-sm mt-1">Transformations this year</p>
            </div>
          </div>

          {/* Right - Features */}
          <div>
            <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
              Why Choose Us
            </p>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
              What You <span className="text-[#D90A14]">Need</span> To Succeed
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
              Everything you need to achieve your fitness goals is right here at FitMaker.
              We provide the tools, coaching, and community support for real results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3 md:gap-4 group">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D90A14]/10 flex items-center justify-center text-[#D90A14] group-hover:bg-[#D90A14] group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[14px] md:text-[15px] mb-1">{feature.title}</h4>
                    <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 md:mt-10 bg-[#D90A14] text-white px-7 md:px-8 py-3 md:py-3.5 rounded-xl text-[14px] md:text-[15px] font-medium hover:bg-[#b5080f] transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
