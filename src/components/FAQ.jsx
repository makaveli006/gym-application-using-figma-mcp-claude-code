import { useState } from 'react'

const faqs = [
  {
    question: 'How do I get started at FitMaker?',
    answer: 'Getting started is easy! Simply sign up for a free trial, choose your membership plan, and schedule your first session. Our team will guide you through an initial fitness assessment to create a personalized plan.',
  },
  {
    question: 'What are the gym operating hours?',
    answer: 'FitMaker is open 24/7 for all members. Our staff is available Monday through Friday from 6 AM to 10 PM, and weekends from 8 AM to 8 PM for live support.',
  },
  {
    question: 'Do you offer personal training sessions?',
    answer: 'Yes! We offer one-on-one personal training sessions with our certified coaches. These can be purchased as individual sessions or as part of our premium membership plans.',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: "Absolutely. We offer flexible membership options with no long-term contracts. You can cancel anytime with 30 days notice, and we'll process your cancellation promptly.",
  },
  {
    question: 'Are group classes included in the membership?',
    answer: 'Group classes are included in our Center and Booster plans. Pro plan members get access to 2 group classes per week. Classes include yoga, HIIT, boxing, CrossFit, and more.',
  },
  {
    question: 'Is there parking available at the gym?',
    answer: 'Yes, we offer free parking for all members in our dedicated parking lot. We also have secure bike storage facilities for cyclists.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-4 md:py-5 flex items-center justify-between gap-3 md:gap-4 text-left group"
        onClick={onToggle}
      >
        <span className={`font-medium text-[14px] md:text-[15px] transition-colors ${isOpen ? 'text-[#D90A14]' : 'text-white group-hover:text-[#D90A14]'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#D90A14] rotate-45' : 'bg-[#262626]'}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 md:pb-5">
          <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-14 md:py-20 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px]">
        {/* On tablet/mobile: stacked, on lg: side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#D90A14] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3">
              FAQ
            </p>
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              Frequently Asked <span className="text-[#D90A14]">Questions</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-[460px]">
              Got questions? We've got answers. If you don't find what you're looking for,
              our support team is always ready to help.
            </p>
            <button className="bg-[#D90A14] text-white px-6 md:px-7 py-2.5 md:py-3 rounded-xl text-[13px] md:text-[14px] font-medium hover:bg-[#b5080f] transition-colors">
              Contact Support
            </button>
          </div>

          {/* Right - FAQ list */}
          <div className="bg-[#1A1A1A] rounded-2xl px-4 md:px-6 lg:px-8 border border-white/5">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
