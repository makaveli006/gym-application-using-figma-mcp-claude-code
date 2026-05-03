const plans = [
  {
    name: 'Pro Plan',
    price: '$29',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to all gym equipment',
      '2 group classes per week',
      'Fitness assessment',
      'Locker room access',
      'Mobile app access',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Center Plan',
    price: '$59',
    period: '/month',
    description: 'Our most popular plan for serious fitness enthusiasts',
    features: [
      'Everything in Pro Plan',
      'Unlimited group classes',
      'Monthly 1-on-1 coaching',
      'Nutrition consultation',
      'Priority class booking',
      'Guest passes (2/month)',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Booster Plan',
    price: '$99',
    period: '/month',
    description: 'Elite training for those who demand the best results',
    features: [
      'Everything in Center Plan',
      'Unlimited personal training',
      'Custom meal planning',
      'Body composition analysis',
      'Recovery services',
      'VIP lounge access',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill="#D90A14" />
      <path d="M4.5 8L7 10.5L11.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="py-14 md:py-20 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-3">
            Pricing Plans
          </p>
          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Choose Your <span className="text-[#D90A14]">Plan</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-[460px] mx-auto text-sm md:text-base">
            Flexible membership options designed to fit your lifestyle and fitness goals
          </p>
        </div>

        {/* Plans — horizontal scroll on tablet, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-7 lg:p-8 flex flex-col gap-5 md:gap-6 transition-transform hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-[#D90A14] shadow-2xl shadow-[#D90A14]/30 md:scale-[1.02]'
                  : 'bg-[#1A1A1A] border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#D90A14] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1 text-white">
                  {plan.name}
                </h3>
                <p className={`text-sm leading-snug ${plan.highlighted ? 'text-white/80' : 'text-[#9CA3AF]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-4xl md:text-5xl text-white">
                  {plan.price}
                </span>
                <span className={`text-sm md:text-base font-medium ${plan.highlighted ? 'text-white/70' : 'text-[#9CA3AF]'}`}>
                  {plan.period}
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <ul className="flex flex-col gap-2.5 md:gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    {plan.highlighted ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <circle cx="8" cy="8" r="8" fill="white" />
                        <path d="M4.5 8L7 10.5L11.5 6" stroke="#D90A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-[#D1D5DB]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3 rounded-xl font-medium text-[14px] md:text-[15px] transition-all ${
                  plan.highlighted
                    ? 'bg-white text-[#D90A14] hover:bg-white/90'
                    : 'bg-[#D90A14] text-white hover:bg-[#b5080f]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
