'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const serviceLinks = [
  { name: 'Chiropractic Care', href: '/services/chiropractic' },
  { name: 'StemWave Therapy', href: '/services/stemwave' },
  { name: 'Treatment Areas', href: '/services/treatment-areas' },
];

const alternativeLinks = [
  { name: 'Alt 1 — Classic Elegance', href: '/alternatives/1' },
  { name: 'Alt 2 — Clean Professional', href: '/alternatives/2' },
  { name: 'Alt 3 — Editorial Narrative', href: '/alternatives/3' },
  { name: 'Alt 4 — Bold Contemporary', href: '/alternatives/4' },
  { name: 'Alt 5 — Warm Wellness', href: '/alternatives/5' },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 text-gray-300 hover:text-[#C8A96E] text-sm uppercase tracking-wide transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [altsOpen, setAltsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAltsOpen, setMobileAltsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const altsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (altsRef.current && !altsRef.current.contains(e.target as Node)) {
        setAltsOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setAltsOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navLink =
    'text-gray-300 hover:text-[#C8A96E] transition-colors duration-200 text-sm tracking-wide uppercase px-3 py-2';
  const dropdownBtn = `${navLink} flex items-center cursor-pointer`;
  const dropdownItem =
    'block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-[#C8A96E] hover:bg-white/5 transition-colors duration-200';

  return (
    <header className="sticky top-0 z-50 bg-[#0c1220]/95 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="font-serif text-white text-lg lg:text-xl tracking-wider">
              Mattar{' '}
              <span className="text-[#C8A96E] group-hover:text-[#d4b87e] transition-colors duration-300">
                Joint &amp; Spine
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <Link href="/" className={navLink}>Home</Link>
            <Link href="/about" className={navLink}>About</Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAltsOpen(false); }}
                className={dropdownBtn}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronIcon open={servicesOpen} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a2234] rounded-lg shadow-xl shadow-black/30 border border-white/10 py-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={dropdownItem}
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className={navLink}>Gallery</Link>
            <Link href="/testimonials" className={navLink}>Testimonials</Link>
            <Link href="/faq" className={navLink}>FAQ</Link>
            <Link href="/areas-we-serve" className={navLink}>Areas We Serve</Link>
            <Link href="/contact" className={navLink}>Contact</Link>

            {/* Home Page Alternatives Dropdown */}
            <div ref={altsRef} className="relative">
              <button
                onClick={() => { setAltsOpen(!altsOpen); setServicesOpen(false); }}
                className={dropdownBtn}
                aria-expanded={altsOpen}
                aria-haspopup="true"
              >
                Home Page Alternatives
                <ChevronIcon open={altsOpen} />
              </button>
              {altsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-[#1a2234] rounded-lg shadow-xl shadow-black/30 border border-white/10 py-1">
                  {alternativeLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={dropdownItem}
                      onClick={() => setAltsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:text-[#C8A96E] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0c1220] border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:text-[#C8A96E] text-sm uppercase tracking-wide transition-colors"
              >
                Services
                <ChevronIcon open={mobileServicesOpen} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1">
                  {serviceLinks.map((item) => (
                    <MobileLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>

            <MobileLink href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</MobileLink>
            <MobileLink href="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</MobileLink>
            <MobileLink href="/faq" onClick={() => setMobileOpen(false)}>FAQ</MobileLink>
            <MobileLink href="/areas-we-serve" onClick={() => setMobileOpen(false)}>Areas We Serve</MobileLink>
            <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>

            {/* Mobile Alternatives */}
            <div>
              <button
                onClick={() => setMobileAltsOpen(!mobileAltsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:text-[#C8A96E] text-sm uppercase tracking-wide transition-colors"
              >
                Home Page Alternatives
                <ChevronIcon open={mobileAltsOpen} />
              </button>
              {mobileAltsOpen && (
                <div className="pl-6 space-y-1">
                  {alternativeLinks.map((item) => (
                    <MobileLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>

            {/* Phone CTA */}
            <div className="pt-4 border-t border-white/10 mt-4">
              <a
                href="tel:5864773284"
                className="block px-3 py-3 bg-[#C8A96E] text-[#0c1220] text-center rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#d4b87e] transition-colors"
              >
                Call ***-***-****
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
