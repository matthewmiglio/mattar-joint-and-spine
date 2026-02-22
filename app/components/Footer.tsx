import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0c1220] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-white text-xl tracking-wider">
              Mattar <span className="text-[#C8A96E]">Joint &amp; Spine</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Providing chiropractic care and StemWave regenerative therapy in
              ******* *********, Michigan since 1982.
            </p>
            <a
              href="tel:5864773284"
              className="inline-block mt-4 text-[#C8A96E] hover:text-[#d4b87e] transition-colors font-medium"
            >
              ***-***-****
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-[#C8A96E] transition-colors">About</Link>
              <Link href="/services" className="block text-sm hover:text-[#C8A96E] transition-colors">Services</Link>
              <Link href="/gallery" className="block text-sm hover:text-[#C8A96E] transition-colors">Gallery</Link>
              <Link href="/testimonials" className="block text-sm hover:text-[#C8A96E] transition-colors">Testimonials</Link>
              <Link href="/faq" className="block text-sm hover:text-[#C8A96E] transition-colors">FAQ</Link>
              <Link href="/contact" className="block text-sm hover:text-[#C8A96E] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>******* *********, MI</p>
              <p>Macomb County</p>
              <a href="tel:5864773284" className="block hover:text-[#C8A96E] transition-colors">
                ***-***-****
              </a>
              <p className="pt-2 text-xs text-gray-500">Contact Pam to schedule</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} M***** Joint &amp; Spine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
