import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero with Video */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/SoundWaves_Header_1920x1080_prog01 (1).webp"
          >
            <source src="/videos/StemWave_Website_NonInvasivePainTreatment_prog01.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1220]/90 via-[#0c1220]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[#C8A96E] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              ******* *********, Michigan
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              True Healing
              <br />
              Starts Here
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Advanced chiropractic care and StemWave regenerative therapy
              &mdash; non-invasive solutions for lasting pain relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5864773284"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A96E] text-[#0c1220] font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#d4b87e] transition-all duration-300"
              >
                Book Consultation
              </a>
              <Link
                href="/services/stemwave"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-all duration-300"
              >
                Explore StemWave
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.2em] text-sm mb-3">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a2e]">
              Comprehensive Care
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/AdobeStock_72148101 (1).webp"
                alt="Chiropractic Care"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">Chiropractic Care</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Restoring proper alignment to optimize nervous system function and relieve pain.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/stemwave.webp"
                alt="StemWave Therapy"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">StemWave Therapy</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  FDA-listed regenerative acoustic wave therapy for natural healing and tissue repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C8A96E] uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a2e] mb-6">
                Over 40 Years of Dedicated Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. J****** M***** has been providing chiropractic care to Macomb County since 1982.
                A graduate of Palmer College of Chiropractic, he has helped improve the lives of
                thousands of patients with his gentle, painless procedures customized to personal needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Under the name of M***** Joint and Spine, Dr. M***** now includes the latest
                technology of regenerative acoustic wave therapy &mdash; StemWave &mdash; providing
                improved blood flow and stem cell activation for tissue repair.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#C8A96E] hover:text-[#b8944f] font-medium text-sm uppercase tracking-wider transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/staff_photo.webp"
                alt="P** M*****, StemWave Technician"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C8A96E] text-[#0c1220] p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-3xl font-bold">40+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* StemWave Feature */}
      <section className="py-20 lg:py-28 bg-[#0c1220] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/Stemwave SM051.webp"
                alt="StemWave Device"
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#C8A96E] uppercase tracking-[0.2em] text-sm mb-3">
                Regenerative Technology
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                What Is StemWave?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                StemWave utilizes harmless, yet powerful acoustic waves to activate your
                body&apos;s natural healing mechanisms. This FDA-listed technology increases
                blood flow and reduces inflammation &mdash; without surgery, injections, or medications.
              </p>
              <ul className="space-y-3 mb-8">
                {['FDA listed & safe', 'Non-invasive — no downtime', '10-15 minute sessions', 'Results in 3-4 treatments'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:5864773284"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A96E] text-[#0c1220] font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#d4b87e] transition-all duration-300"
              >
                Schedule Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.2em] text-sm mb-3">Treatment Areas</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a2e]">
              Conditions We Treat
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Neck & Back', desc: 'Spinal conditions, disc issues, and chronic back pain' },
              { title: 'Shoulder & Elbow', desc: 'Rotator cuff, tennis elbow, and joint injuries' },
              { title: 'Knee & Hip', desc: 'Arthritis, meniscus tears, and degenerative changes' },
              { title: 'Wrist & Hand', desc: 'Carpal tunnel, tendonitis, and repetitive strain' },
              { title: 'Ankle & Foot', desc: 'Plantar fasciitis, sprains, and Achilles tendon' },
              { title: 'Post-Surgical', desc: 'Accelerated recovery and rehabilitation support' },
            ].map((area) => (
              <div
                key={area.title}
                className="p-8 border border-gray-200 rounded-lg hover:border-[#C8A96E]/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-[#1a1a2e] mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#C8A96E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0c1220] mb-6">
            Begin Your Healing Journey
          </h2>
          <p className="text-[#0c1220]/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Pam directly to answer questions or make an appointment.
            Experience the difference of personalized, non-invasive care.
          </p>
          <a
            href="tel:5864773284"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#0c1220] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#1a2234] transition-all duration-300"
          >
            Call ***-***-****
          </a>
        </div>
      </section>
    </div>
  );
}
