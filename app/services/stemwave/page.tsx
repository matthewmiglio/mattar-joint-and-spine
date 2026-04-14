import Link from 'next/link';

export default function StemWavePage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <img
          src="/images/stemwave.webp"
          alt="StemWave Therapy"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">Our Services</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">StemWave Therapy</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            FDA-listed regenerative acoustic wave therapy that activates your body&apos;s natural healing.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* What Is StemWave */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">The Technology</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              What Is <span className="text-[#C8A96E]">StemWave?</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                StemWave is a regenerative medicine technique that utilizes harmless, yet powerful
                acoustic waves to activate your body&apos;s natural healing mechanisms. This technology
                helps patients with musculoskeletal conditions by increasing blood flow and reducing
                inflammation.
              </p>
              <p>
                By creating new blood vessels, StemWave allows your stem cells to navigate to the
                treatment area for tissue repair and inflammation reduction. It&apos;s a cutting-edge,
                non-invasive treatment that encourages natural healing without drugs or surgery.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/Stemwave SM051.webp"
              alt="StemWave Device"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Why StemWave</p>
            <h2 className="font-serif text-3xl md:text-5xl">Key Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { label: 'FDA Listed', desc: 'Cleared and recognized as a safe, effective treatment.' },
              { label: 'Non-Invasive', desc: 'No surgery, no needles, no anesthesia required.' },
              { label: 'No Downtime', desc: 'Return to your daily activities immediately after.' },
              { label: 'Drug-Free', desc: 'A natural alternative to medications and injections.' },
            ].map((item) => (
              <div key={item.label} className="bg-[#111111] p-10 text-center">
                <p className="font-serif text-2xl text-[#C8A96E] mb-3">{item.label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Your Visit</p>
            <h2 className="font-serif text-3xl md:text-5xl">What to Expect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Preparation', desc: 'A gel is applied to the surface of the treatment area to ensure optimal wave delivery.' },
              { step: '02', title: 'Treatment', desc: 'The StemWave applicator delivers focused acoustic waves to the targeted area. Sessions average 10-15 minutes.' },
              { step: '03', title: 'Recovery', desc: 'No downtime required. Many patients notice improvement after the very first session.' },
            ].map((item) => (
              <div key={item.step}>
                <p className="font-serif text-5xl text-[#C8A96E]/30 mb-4">{item.step}</p>
                <div className="w-8 h-px bg-[#C8A96E] mb-6" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 text-center">
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">10-15</p>
              <p className="text-gray-500 text-sm mt-1">Minutes per session</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">8-12</p>
              <p className="text-gray-500 text-sm mt-1">Sessions typical</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">3-4</p>
              <p className="text-gray-500 text-sm mt-1">Treatments to see results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Experience StemWave</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam directly to learn more about StemWave therapy or schedule your first session.
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
