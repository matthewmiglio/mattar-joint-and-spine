import Link from 'next/link';

export default function ChiropracticPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <img
          src="/images/AdobeStock_114404159 (1).webp"
          alt="Chiropractic Care"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">Our Services</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Chiropractic Care</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Manual adjustments and specialized techniques to relieve pain, improve mobility, and restore proper joint motion.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* What Is Chiropractic Care */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">The Science</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              Optimizing Your <span className="text-[#C8A96E]">Nervous System</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                The goal of chiropractic care is to optimize the function of the nervous system by
                detecting spinal misalignments. The nervous system &mdash; consisting of the brain,
                spinal cord, and nerves &mdash; is responsible for controlling and coordinating all
                bodily functions.
              </p>
              <p>
                By ensuring proper alignment of the spine, chiropractic care plays a crucial role in
                promoting overall health and alleviating pain. This alignment allows for uninterrupted
                nerve communication throughout the body, facilitating the restoration of well-being.
              </p>
              <p>
                Restoring proper joint motion also reduces friction and wear between joints, which
                cause joint arthritis, inflammation, and disc thinning.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/AdobeStock_72148101 (1).webp"
              alt="Spinal alignment"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-5xl">Our Techniques</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { title: 'Manual Adjustments', desc: 'Gentle hands-on spinal adjustments to restore proper alignment and relieve nerve pressure.' },
              { title: 'Table Assisted (Drop)', desc: 'Low-force adjustments using a specialized drop table for precise, comfortable corrections.' },
              { title: 'Instrument Adjustments', desc: 'Very low-force instrument-assisted techniques ideal for sensitive areas and patients.' },
              { title: 'Spinal Decompression', desc: 'Flexion and traction therapy to relieve disc pressure and improve spinal mobility.' },
              { title: 'Trigger Point Therapy', desc: 'Targeted pressure to release muscle knots and reduce referred pain patterns.' },
              { title: 'Postural Correction', desc: 'Assessment and treatment of forward head posture and other alignment issues.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors duration-500 group">
                <div className="w-8 h-px bg-[#C8A96E] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">The Results</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">Benefits of Chiropractic</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              'Pain relief without medication',
              'Improved mobility and flexibility',
              'Reduced joint inflammation',
              'Better posture and spinal health',
              'Enhanced nervous system function',
              'Slowed disc degeneration',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#C8A96E] mt-2 shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Schedule Your Visit</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Dr. Mattar provides gentle, painless procedures customized to your personal needs.
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
