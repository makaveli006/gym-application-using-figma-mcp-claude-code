import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px] h-[64px] md:h-[72px] flex items-center gap-4 md:gap-6">
        {/* Logo */}
        <div className="flex flex-col items-start shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-[#D90A14] w-9 h-7 md:w-10 md:h-8 rounded-[4px]" />
            <span className="font-semibold text-[16px] md:text-[18px] text-white leading-none">
              Fit<span className="text-[#D90A14]">Maker</span>
            </span>
          </div>
          <span className="hidden sm:block text-white text-[10px] md:text-[11px] font-light capitalize mt-1 tracking-wide">
            Transform Your Body
          </span>
        </div>

        {/* Search bar — visible from md up */}
        <div className="hidden md:flex bg-[#262626] rounded-xl h-[36px] w-[36px] items-center justify-center shrink-0 cursor-pointer hover:bg-[#333] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Nav Links — visible on lg+ only */}
        <div className="hidden lg:flex flex-1 items-center justify-between">
          <div className="flex flex-1 items-center justify-around">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <span className="text-white font-medium text-[15px] capitalize">Home</span>
              <div className="h-[2px] w-[80px] bg-[#D90A14] rounded-full" />
            </div>
            {['Programs', 'Coaching'].map((item) => (
              <button key={item} className="flex items-center gap-1 text-white font-medium text-[15px] capitalize hover:text-[#D90A14] transition-colors">
                {item}
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                  <polyline points="4,1 9,6 4,11" />
                </svg>
              </button>
            ))}
            {['Membership', 'About Us'].map((item) => (
              <button key={item} className="text-white font-medium text-[15px] capitalize hover:text-[#D90A14] transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Auth Buttons — visible on md+ */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0 ml-auto lg:ml-0">
          <button className="border border-[#CD4E17] text-[#CD4E17] px-3 md:px-4 py-1.5 rounded-xl text-[13px] md:text-[14px] font-light h-8 md:h-9 hover:bg-[#CD4E17]/10 transition-colors">
            Login
          </button>
          <button className="bg-[#D90A14] text-white px-3 md:px-5 py-1.5 rounded-xl text-[13px] md:text-[14px] font-light h-8 md:h-9 hover:bg-[#b5080f] transition-colors">
            Sign Up
          </button>
        </div>

        {/* Hamburger — shown on md: for nav links (tablet), on mobile for everything */}
        <button
          className="lg:hidden ml-auto md:ml-3 text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu — tablet shows nav links + auth, mobile shows everything */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-white/10 px-5 md:px-8 py-5 flex flex-col gap-1">
          {['Home', 'Programs', 'Coaching', 'Membership', 'About Us'].map((item) => (
            <button
              key={item}
              className="text-white font-medium text-[15px] capitalize text-left py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-[#D90A14] transition-colors"
            >
              {item}
            </button>
          ))}
          {/* Auth buttons in mobile menu only */}
          <div className="flex gap-3 pt-3 mt-1 border-t border-white/10 md:hidden">
            <button className="flex-1 border border-[#CD4E17] text-[#CD4E17] px-4 py-2.5 rounded-xl text-[14px] font-light">
              Login
            </button>
            <button className="flex-1 bg-[#D90A14] text-white px-4 py-2.5 rounded-xl text-[14px] font-light">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
