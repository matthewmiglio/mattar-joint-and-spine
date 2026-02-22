{/* Alternative 5: Warm Wellness — Earth tones, rounded, friendly and inviting */}

import Link from 'next/link';

export default function Alt5() {
  return (
    <div className="bg-[#FFF8F0] text-[#3D2B1F]">
      {/* Hero — Warm & Welcoming */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/AdobeStock_114404159 (1).webp"
            alt="Healing care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F0]/95 via-[#FFF8F0]/80 to-[#FFF8F0]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#2D5016]/10 text-[#2D5016] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Trusted Since 1982
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-[#3D2B1F]">
              Your Body Knows
              <br />
              How to Heal.
              <br />
              <span className="text-[#2D5016]">We Help It Along.</span>
            </h1>
            <p className="text-[#6B4423] text-lg leading-relaxed mb-8 max-w-lg">
              Gentle chiropractic care and StemWave regenerative therapy in a
              warm, welcoming environment. ******* *********, Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5864773284"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5016] text-white font-semibold text-sm rounded-full hover:bg-[#3a6a1d] transition-colors shadow-lg shadow-[#2D5016]/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Today
              </a>
              <Link
                href="/services/stemwave"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#D4A373] text-[#6B4423] font-semibold text-sm rounded-full hover:bg-[#D4A373]/10 transition-all"
              >
                Learn About StemWave
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-1 bg-[#D4A373] rounded-full mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#3D2B1F]">
            Welcome to M***** Joint &amp; Spine
          </h2>
          <p className="text-[#6B4423] text-lg leading-relaxed max-w-2xl mx-auto">
            Dr. J****** M***** has been helping families in Macomb County find relief
            since 1982. With gentle, personalized care and the latest in regenerative
            technology, we&apos;re here to support your body&apos;s natural healing journey.
          </p>
        </div>
      </section>

      {/* Services — Rounded Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3D2B1F] mb-4">
              How We Can Help
            </h2>
            <p className="text-[#6B4423] max-w-xl mx-auto">
              Two complementary approaches to relieve pain and restore function.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chiropractic */}
            <div className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/images/AdobeStock_72148101 (1).webp"
                alt="Chiropractic Care"
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="w-10 h-10 bg-[#2D5016]/10 text-[#2D5016] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-3">Chiropractic Care</h3>
                <p className="text-[#6B4423] leading-relaxed">
                  Gentle manual adjustments to restore proper alignment, relieve pain,
                  and support your nervous system&apos;s optimal function. Each treatment is
                  customized to your needs.
                </p>
              </div>
            </div>
            {/* StemWave */}
            <div className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/images/stemwave.webp"
                alt="StemWave Therapy"
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="w-10 h-10 bg-[#2D5016]/10 text-[#2D5016] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-3">StemWave Therapy</h3>
                <p className="text-[#6B4423] leading-relaxed">
                  FDA-listed regenerative acoustic wave therapy that activates your body&apos;s
                  natural healing. Non-invasive, no downtime, and often effective from
                  the very first session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-[#2D5016] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Why Patients Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '40+', title: 'Years of Experience', desc: 'Trusted care since 1982' },
              { icon: 'FDA', title: 'Listed Technology', desc: 'Safe, proven StemWave therapy' },
              { icon: '15m', title: 'Quick Sessions', desc: '10-15 minutes per treatment' },
              { icon: '0', title: 'No Downtime', desc: 'Return to daily life immediately' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#D4A373] mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* StemWave Details */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/Stemwave SM051.webp"
                alt="StemWave Device"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#3D2B1F]">
                What to Expect from StemWave
              </h2>
              <p className="text-[#6B4423] leading-relaxed mb-6">
                Each visit is quick and comfortable. A gel is applied to the treatment area,
                and the StemWave applicator delivers focused acoustic waves. No anesthesia,
                no numbing creams needed.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '8-12 sessions typical care plan',
                  'Improvement often after first treatment',
                  'Significant results by session 3-4',
                  'No surgery, injections, or medications',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#6B4423]">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#3D2B1F]">Common Treatment Areas</h3>
              <div className="flex flex-wrap gap-2">
                {['Neck & Back', 'Shoulders', 'Knees', 'Elbows', 'Ankles & Feet', 'Post-Surgical'].map((area) => (
                  <span
                    key={area}
                    className="bg-[#D4A373]/20 text-[#6B4423] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team — Circular Photos */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3D2B1F] mb-4">
              Meet Your Care Team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D4A373]/30 shadow-lg">
                <img
                  src="/images/AdobeStock_492255186 (1).webp"
                  alt="Dr. J****** M*****"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">Dr. J****** M*****</h3>
              <p className="text-[#2D5016] font-medium text-sm mb-3">Doctor of Chiropractic</p>
              <p className="text-[#6B4423] text-sm leading-relaxed max-w-xs mx-auto">
                Serving Macomb County since 1982. Palmer College graduate with a
                passion for gentle, personalized care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D4A373]/30 shadow-lg">
                <img
                  src="/images/staff_photo.webp"
                  alt="P** M*****"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">P** M*****</h3>
              <p className="text-[#2D5016] font-medium text-sm mb-3">StemWave Technician</p>
              <p className="text-[#6B4423] text-sm leading-relaxed max-w-xs mx-auto">
                Certified in StemWave Regenerative Therapy. Call Pam directly
                at ***-***-**** for questions or to schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial-style Quote */}
      <section className="py-20 lg:py-28 bg-[#F5EDE4]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <svg className="w-12 h-12 text-[#D4A373] mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-[#3D2B1F] mb-8">
            True healing starts with how your body moves and how it repairs itself.
            We&apos;re here to support that natural process every step of the way.
          </blockquote>
          <p className="text-[#D4A373] font-medium uppercase tracking-wider text-sm">
            &mdash; Dr. J****** M*****
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#D4A373]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We&apos;d love to hear from you. Contact Pam to discuss how we can help,
            or to schedule your first visit.
          </p>
          <a
            href="tel:5864773284"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#6B4423] font-bold text-sm rounded-full hover:bg-[#FFF8F0] transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call ***-***-****
          </a>
        </div>
      </section>
    </div>
  );
}
