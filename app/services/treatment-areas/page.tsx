import Link from 'next/link';

export default function TreatmentAreasPage() {
  const areas = [
    {
      title: 'Neck & Back',
      desc: 'Relief from chronic neck pain, back pain, disc herniations, sciatica, and spinal stiffness through targeted chiropractic and StemWave therapy.',
    },
    {
      title: 'Shoulder & Elbow',
      desc: 'Treatment for rotator cuff injuries, frozen shoulder, tennis elbow, and other upper extremity conditions that limit your range of motion.',
    },
    {
      title: 'Knee & Hip',
      desc: 'Addressing arthritis, bursitis, meniscus issues, and joint degeneration to restore comfortable movement and reduce inflammation.',
    },
    {
      title: 'Wrist & Hand',
      desc: 'Care for carpal tunnel syndrome, tendonitis, repetitive strain injuries, and joint stiffness in the wrist and hand.',
    },
    {
      title: 'Ankle & Foot',
      desc: 'Treatment for plantar fasciitis, Achilles tendonitis, ankle sprains, and other conditions affecting lower extremity function.',
    },
    {
      title: 'Soft Tissue Injuries',
      desc: 'Targeted therapy for muscle strains, tendon and ligament damage, and chronic soft tissue pain using acoustic wave technology.',
    },
    {
      title: 'Post-Surgical Recovery',
      desc: 'Accelerated healing after surgery through regenerative acoustic wave therapy that boosts blood flow and promotes tissue repair.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <img
          src="/images/SoundWaves_Header_1920x1080_prog01 (1).webp"
          alt="Treatment Areas"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">Conditions We Treat</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Treatment Areas</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            StemWave&apos;s versatility makes it an effective alternative to surgery, injections, or medications for a wide variety of conditions.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Areas of Focus</p>
            <h2 className="font-serif text-3xl md:text-5xl">What We Treat</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors duration-500 group"
              >
                <div className="w-8 h-px bg-[#C8A96E] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-xl mb-3">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-8">Our Approach</p>
          <blockquote className="font-serif text-2xl md:text-4xl italic leading-snug text-gray-200 mb-8">
            &ldquo;By increasing blood flow and creating new blood vessels, we allow stem cells
            to navigate to the area for tissue repair and inflammation reduction.&rdquo;
          </blockquote>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Find Relief Today</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re dealing with chronic pain, a recent injury, or post-surgical recovery, we can help.
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
