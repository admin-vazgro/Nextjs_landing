"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0c331f] text-white pt-20 pb-10 rounded-t-[40px] mt-32">
      {/* TOP MARQUEE TEXT */}

      <div className="overflow-hidden text-[70px] md:text-[110px] font-medium tracking-tight border-b border-white/10 pb-8">
  <div className="marquee">
    <div className="marquee__inner">
      <span>* Progrize</span>
      <span>* Progrise</span>
      <span>* Rise</span>
      <span>* Jobs</span>

      {/* Duplicate for seamless loop */}
      <span>* Progrize</span>
      <span>* Progrise</span>
      <span>* Rise</span>
      <span>* Jobs</span>
    </div>
  </div>
</div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* LEFT BRAND SECTION */}
        <div>
          <h3 className="text-xl font-light mb-3">Progrize↗</h3>
          <p className="text-gray-300 text-sm font-light">A product by Vazgro</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-lg">
            <a href="#" className="hover:text-gray-300 transition">🐦</a>
            <a href="#" className="hover:text-gray-300 transition">📸</a>
            <a href="#" className="hover:text-gray-300 transition">💼</a>
            <a href="#" className="hover:text-gray-300 transition">▶️</a>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-lg font-medium mb-5">Company</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Culture</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-lg font-medium mb-5">Support</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">Getting started</a></li>
            <li><a href="#" className="hover:text-white transition">Help center</a></li>
            <li><a href="#" className="hover:text-white transition">Server status</a></li>
            <li><a href="#" className="hover:text-white transition">Report a bug</a></li>
            <li><a href="#" className="hover:text-white transition">Chat support</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-medium mb-5">Contacts us</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-2">📧 contact@company.com</li>
            <li className="flex items-center gap-2">📞 (414) 687 - 5892</li>
            <li className="flex items-start gap-2">
              📍 794 Mcallister St <br /> San Francisco, 94102
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-300 text-sm">
        Copyright © 2024 | 
        <a href="#" className="ml-2 hover:text-white">Terms and Conditions</a> | 
        <a href="#" className="ml-2 hover:text-white">Privacy Policy</a>
      </div>
    </footer>
  );
}
