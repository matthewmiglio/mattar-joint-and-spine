{/* Alternative 4: Bold Contemporary — Deep teal/orange, asymmetric modern */}

import Link from 'next/link';

export default function Alt4() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      {/* Hero — Bold Typography */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0A2E36] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A2E36]/50 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 mb-8">
                Non-Invasive Pain Relief
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8">
                HEAL
                <br />
                <span className="text-[#FF6B35]">NATURALLY.</span>
                <br />
                <span className="text-white/30">MOVE FREELY.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                Chiropractic care + StemWave regenerative therapy. Advanced treatment
                without surgery, injections, or medications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:5864773284"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B35] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#e55d2b] transition-colors"
                >
                  Get Started &rarr;
                </a>
                <Link
                  href="/services/stemwave"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
                >
                  What Is StemWave?
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <img
                  src="/images/Stemwave SM051.webp"
                  alt="StemWave Device"
                  className="w-full relative z-10"
                />
                <div className="absolute -inset-4 bg-[#FF6B35]/20 blur-2xl -z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#FF6B35] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { val: '40+', label: 'Years Practice' },
              { val: 'FDA', label: 'Listed Device' },
              { val: '10min', label: 'Per Session' },
              { val: '0', label: 'Downtime' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-black">{s.val}</p>
                <p className="text-xs uppercase tracking-wider text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Split Blocks */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2E36] mb-4">
              TWO PATHS TO <span className="text-[#FF6B35]">RELIEF</span>
            </h2>
          </div>

          {/* Chiropractic Block */}
          <div className="grid lg:grid-cols-2 gap-0 mb-2 overflow-hidden">
            <div className="relative min-h-[350px]">
              <img
                src="/images/AdobeStock_114404159 (1).webp"
                alt="Chiropractic Care"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#0A2E36] p-10 lg:p-16 flex items-center">
              <div className="text-white">
                <div className="text-[#FF6B35] font-black text-6xl mb-4">01</div>
                <h3 className="text-3xl font-bold mb-4">Chiropractic Care</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Optimizing your nervous system through precise spinal alignment.
                  Manual adjustments relieve pain, improve mobility, and reduce
                  joint wear and arthritis.
                </p>
                <Link
                  href="/services/chiropractic"
                  className="inline-flex items-center gap-2 text-[#FF6B35] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* StemWave Block */}
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
            <div className="bg-[#0A2E36] p-10 lg:p-16 flex items-center order-2 lg:order-1">
              <div className="text-white">
                <div className="text-[#FF6B35] font-black text-6xl mb-4">02</div>
                <h3 className="text-3xl font-bold mb-4">StemWave Therapy</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  FDA-listed regenerative acoustic waves that activate your body&apos;s
                  natural healing. Increased blood flow and stem cell activation for
                  tissue repair without surgery.
                </p>
                <Link
                  href="/services/stemwave"
                  className="inline-flex items-center gap-2 text-[#FF6B35] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[350px] order-1 lg:order-2">
              <img
                src="/images/stemwave.webp"
                alt="StemWave Therapy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2E36]">
              WHAT WE <span className="text-[#FF6B35]">TREAT</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Neck & Back', desc: 'Spinal conditions, disc issues, chronic pain' },
              { title: 'Shoulders', desc: 'Rotator cuff, frozen shoulder, impingement' },
              { title: 'Knees', desc: 'Arthritis, meniscus, ligament injuries' },
              { title: 'Elbows & Wrists', desc: 'Tennis elbow, carpal tunnel, tendonitis' },
              { title: 'Ankles & Feet', desc: 'Plantar fasciitis, sprains, Achilles' },
              { title: 'Post-Surgical', desc: 'Accelerated recovery and rehabilitation' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border-l-4 border-[#FF6B35] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0A2E36] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-[#0A2E36] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#FF6B35] font-black text-sm uppercase tracking-wider mb-4">
                How StemWave Works
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                FAST. SAFE.
                <br />
                <span className="text-[#FF6B35]">EFFECTIVE.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { num: '01', text: 'Gel applied to treatment area' },
                  { num: '02', text: 'StemWave applicator delivers focused acoustic waves' },
                  { num: '03', text: 'Blood flow increases, stem cells activate' },
                  { num: '04', text: 'Tissue repairs and inflammation reduces' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <span className="text-[#FF6B35] font-black text-2xl">{step.num}</span>
                    <p className="text-gray-300 text-lg pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/SoundWaves_Header_1920x1080_prog01 (1).webp"
                alt="Treatment in progress"
                className="w-full"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 p-6 text-center">
                  <p className="text-3xl font-black text-[#FF6B35]">10-15</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Minutes</p>
                </div>
                <div className="bg-white/10 p-6 text-center">
                  <p className="text-3xl font-black text-[#FF6B35]">8-12</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2E36]">
              THE <span className="text-[#FF6B35]">TEAM</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src="/images/AdobeStock_492255186 (1).webp"
                  alt="Dr. J****** M*****"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold">Dr. J****** M*****, D.C.</h3>
              <p className="text-[#FF6B35] font-bold text-sm uppercase tracking-wider mt-1 mb-3">
                Doctor of Chiropractic
              </p>
              <p className="text-gray-500 leading-relaxed">
                Serving Macomb County since 1982. Palmer College of Chiropractic graduate.
                Specializing in gentle, painless procedures customized to each patient.
              </p>
            </div>
            <div className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src="/images/staff_photo.webp"
                  alt="P** M*****"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold">P** M*****</h3>
              <p className="text-[#FF6B35] font-bold text-sm uppercase tracking-wider mt-1 mb-3">
                Certified StemWave Technician
              </p>
              <p className="text-gray-500 leading-relaxed">
                Certified in StemWave Regenerative Therapy. Contact Pam directly
                at ***-***-**** for questions or appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#0A2E36]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            READY TO <span className="text-[#FF6B35]">HEAL?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam today. No referral needed. Start your journey to pain-free living.
          </p>
          <a
            href="tel:5864773284"
            className="inline-flex items-center justify-center px-12 py-5 bg-[#FF6B35] text-white font-black text-sm uppercase tracking-wider hover:bg-[#e55d2b] transition-colors"
          >
            Call ***-***-****
          </a>
        </div>
      </section>
    </div>
  );
}
