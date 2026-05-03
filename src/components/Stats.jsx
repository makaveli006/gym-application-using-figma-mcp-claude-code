const stats = [
  {
    value: '96%',
    label: 'Client Satisfaction',
    description: 'Our members love their results and experience',
  },
  {
    value: '+5',
    label: 'Years of Experience',
    description: 'Trust in our proven track record of transforming',
  },
  {
    value: '10K+',
    label: 'Community Members',
    description: 'Be part of a thriving fitness community',
  },
  {
    value: '50+',
    label: 'Expert Coaches',
    description: 'Work with certified professionals daily',
  },
]

export default function Stats() {
  return (
    <section className="bg-[#111111] border-y border-white/5 py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 py-5 md:py-2 px-4 md:px-6 lg:px-10
                ${i % 2 === 0 ? 'pr-4 md:pr-6' : 'pl-4 md:pl-6'}
                ${i < 2 ? 'border-b md:border-b-0' : ''}
                ${i % 2 !== 0 ? 'border-l md:border-l-0' : ''}
                border-white/10
              `}
            >
              <span className="text-[#D90A14] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                {stat.value}
              </span>
              <p className="text-white font-semibold text-sm md:text-sm lg:text-base">
                {stat.label}
              </p>
              <p className="text-[#9CA3AF] text-xs leading-snug hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
