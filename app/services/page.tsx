import Link from 'next/link';

const services = [
  {
    title: 'Chiropractic Care',
    href: '/services/chiropractic',
    image: '/images/AdobeStock_114404159 (1).webp',
    description:
      'Manual adjustments and techniques to relieve pain, improve mobility, and restore proper joint motion. Gentle, painless procedures customized to your personal needs, including table-assisted and instrument adjustments.',
  },
  {
    title: 'StemWave Therapy',
    href: '/services/stemwave',
    image: '/images/stemwave.webp',
    description:
      'FDA-listed regenerative acoustic wave therapy that activates your body\u2019s natural healing. Non-invasive focused acoustic waves increase blood flow, reduce inflammation, and stimulate stem cell activation for tissue repair.',
  },
  {
    title: 'Treatment Areas',
    href: '/services/treatment-areas',
    image: '/images/Stemwave SM051.webp',
    description:
      'From neck and back conditions to shoulders, knees, and soft tissue injuries, our treatments address a wide variety of musculoskeletal conditions \u2014 offering an effective alternative to surgery, injections, or medications.',
  },
];

export default function Services() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">
            What We Offer
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="text-[#C8A96E]">Services</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A regenerative approach to healing combining chiropractic excellence
            with cutting-edge acoustic wave technology.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-1">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="relative group overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[550px] block"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="w-10 h-px bg-[#C8A96E] mb-6 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-serif text-3xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                    {service.description}
                  </p>
                  <span className="text-[#C8A96E] text-sm uppercase tracking-[0.15em] group-hover:text-[#d4b87e] transition-colors duration-300">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
              Also Available
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              Supporting Your Recovery
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-white/10">
            {[
              {
                name: 'Rehabilitative Exercises',
                desc: 'Easy-to-follow rehab exercises to improve flexibility and muscle tone.',
              },
              {
                name: 'Nutritional Supplements',
                desc: 'Access to the finest and purest nutritional supplements to support healing.',
              },
              {
                name: 'Massage Therapy',
                desc: 'Over 15 years of professional massage therapy to loosen muscles and reduce stress.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-[#0a0a0a] p-10 hover:bg-[#111111] transition-colors duration-500 group"
              >
                <div className="w-8 h-px bg-[#C8A96E] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-xl mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ready to Start Healing?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam directly to answer questions or schedule your
            appointment.
          </p>
          <a
            href="tel:5864773284"
            className="inline-block px-12 py-5 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
          >
            Schedule Consultation
          </a>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
