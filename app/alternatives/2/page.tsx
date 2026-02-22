{/* Alternative 2: Clean Professional — White/Navy trust-building medical */}

import Link from 'next/link';

export default function Alt2() {
  return (
    <div className="bg-white text-[#1B3A4B]">
      {/* Hero — Split Layout */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[85vh]">
            {/* Text Side */}
            <div className="flex items-center px-6 sm:px-10 lg:px-16 py-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1B4965] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#1B4965] rounded-full" />
                  Serving Macomb County Since 1982
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-[#1B3A4B]">
                  Expert Care for
                  <br />
                  <span className="text-[#1B4965]">Joint &amp; Spine</span>
                  <br />
                  Health
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                  Dr. J****** M***** combines 40+ years of chiropractic expertise with
                  cutting-edge StemWave regenerative therapy for non-invasive pain relief.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5864773284"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B4965] text-white font-semibold text-sm rounded-lg hover:bg-[#15405a] transition-colors shadow-lg shadow-[#1B4965]/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call ***-***-****
                  </a>
                  <Link
                    href="/services/stemwave"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1B4965] text-[#1B4965] font-semibold text-sm rounded-lg hover:bg-[#1B4965] hover:text-white transition-all"
                  >
                    Learn About StemWave
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Side */}
            <div className="relative hidden lg:block">
              <img
                src="/images/SoundWaves_Header_1920x1080_prog01 (1).webp"
                alt="StemWave Treatment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1B4965] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '40+', label: 'Years Experience' },
              { num: 'FDA', label: 'Listed Technology' },
              { num: '10-15', label: 'Min Sessions' },
              { num: '1000s', label: 'Patients Helped' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold">{stat.num}</p>
                <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive care combining traditional chiropractic with advanced regenerative technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chiropractic Care',
                desc: 'Manual adjustments to restore proper alignment, relieve pain, and improve mobility. Gentle procedures customized to your needs.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'StemWave Therapy',
                desc: 'FDA-listed regenerative acoustic wave therapy that activates your body\'s natural healing. Non-invasive with no downtime.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Treatment Areas',
                desc: 'From neck and back conditions to post-surgical recovery — versatile treatment for joints, muscles, tendons, and ligaments.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#1B4965]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#E8F4FD] text-[#1B4965] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1B4965] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* StemWave Feature */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/images/Stemwave SM051.webp"
                alt="StemWave Device"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                FDA Listed
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How StemWave Works
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                StemWave utilizes powerful acoustic waves to activate your body&apos;s natural
                healing mechanisms. It increases blood flow with new blood vessels, allowing
                stem cells to navigate to the area for tissue repair.
              </p>
              <ul className="space-y-4">
                {[
                  'Safe & effective — no surgery or injections',
                  'Fast 10-15 minute treatments',
                  'No downtime or side effects',
                  'Results typically in 3-4 sessions',
                  'Affordable treatment option',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#1B4965] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Your path to pain relief is simple and straightforward.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your condition and treatment goals' },
              { step: '02', title: 'Treatment', desc: 'Quick 10-15 minute non-invasive session' },
              { step: '03', title: 'Recovery', desc: 'No downtime — return to daily activities' },
              { step: '04', title: 'Results', desc: 'Improvement often felt after first treatment' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1B4965] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/images/AdobeStock_492255186 (1).webp"
                alt="Dr. J****** M*****"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. J****** M*****, D.C.</h3>
                <p className="text-[#1B4965] text-sm font-medium mb-3">Doctor of Chiropractic</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Providing chiropractic care to Macomb County since 1982. Graduate of
                  Palmer College of Chiropractic.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/images/staff_photo.webp"
                alt="P** M*****"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">P** M*****</h3>
                <p className="text-[#1B4965] text-sm font-medium mb-3">Certified StemWave Technician</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Certified in StemWave Regenerative Therapy application. Contact Pam
                  directly at ***-***-**** to schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#1B4965]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Feeling Better?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact Pam today to answer your questions or schedule your first appointment.
          </p>
          <a
            href="tel:5864773284"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1B4965] font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call ***-***-****
          </a>
        </div>
      </section>
    </div>
  );
}
