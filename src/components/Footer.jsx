const footerLinks = {
  Programs: ['Weight Training', 'Cardio Blast', 'CrossFit', 'Boxing & MMA', 'HIIT Sessions', 'Yoga'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press', 'Blog', 'Contact'],
  Support: ['FAQ', 'Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      {/* CTA strip */}
      <div className="bg-[#D90A14]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px] py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Ready to Transform Your Body?</h3>
            <p className="text-white/80 text-xs md:text-sm mt-1">Start your free trial today — no commitment required</p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button className="bg-white text-[#D90A14] px-5 md:px-8 py-2.5 md:py-3 rounded-xl text-[13px] md:text-[14px] font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-[13px] md:text-[14px] font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[98px] py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand — full width on mobile, 2 cols on md, 2 cols on lg */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#D90A14] w-9 h-7 md:w-10 md:h-8 rounded-[4px]" />
              <span className="font-semibold text-[16px] md:text-[18px] text-white">
                Fit<span className="text-[#D90A14]">Maker</span>
              </span>
            </div>
            <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed mb-5 md:mb-6 max-w-[280px]">
              FitMaker is your premier fitness destination. Expert coaches, state-of-the-art facilities,
              and a community that drives results.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2 md:gap-3">
              {[
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'YouTube', path: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
              ].map((social) => (
                <button
                  key={social.name}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#262626] flex items-center justify-center text-[#9CA3AF] hover:bg-[#D90A14] hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Links — 1 col each on mobile (2 cols total per row), 1 col each on lg */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-[13px] md:text-[15px] mb-4 md:mb-5">{category}</h4>
              <ul className="flex flex-col gap-2.5 md:gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#9CA3AF] text-xs md:text-sm hover:text-[#D90A14] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 md:mt-12 pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[#9CA3AF] text-xs md:text-sm">
            © 2025 FitMaker. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[#9CA3AF] text-[10px] md:text-xs hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
