{/* Classic Elegance — Dark/Gold cinematic luxury */}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/images/SoundWaves_Header_1920x1080_prog01 (1).webp"
          >
            <source src="/videos/StemWave_Website_NonInvasivePainTreatment_prog01.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />

          {/* Prominent Logo & Name */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-4 leading-[1.05] tracking-tight">
            Mattar
            <br />
            <span className="text-[#C8A96E]">Joint &amp; Spine</span>
          </h1>
          <div className="w-24 h-px bg-[#C8A96E] mx-auto my-8" />

          {/* Content below the name */}
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">
            ******* *********, Michigan
          </p>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic mb-6 text-gray-200">
            True Healing Starts
            <br />
            <span className="text-[#C8A96E]">With Your Body</span>
          </p>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Regenerative acoustic wave therapy and chiropractic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5864773284"
              className="px-10 py-4 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
            >
              Schedule Consultation
            </a>
            <Link
              href="/services/stemwave"
              className="px-10 py-4 border border-[#C8A96E]/40 text-[#C8A96E] text-sm uppercase tracking-[0.15em] hover:bg-[#C8A96E]/10 transition-all duration-500"
            >
              Discover StemWave
            </Link>
          </div>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-12" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-8">Our Philosophy</p>
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-snug text-gray-200 mb-8">
            &ldquo;True Healing Starts With How The Body Moves,
            And How It Repairs Itself.&rdquo;
          </blockquote>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Dr. J****** M*****, D.C.</p>
        </div>
      </section>

      {/* Services — Two Pillars */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Our Services</p>
            <h2 className="font-serif text-3xl md:text-5xl">Two Pillars of Healing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-1">
            {/* Chiropractic */}
            <div className="relative group overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[600px]">
              <img
                src="/images/AdobeStock_114404159 (1).webp"
                alt="Chiropractic Care"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="w-10 h-px bg-[#C8A96E] mb-6" />
                <h3 className="font-serif text-3xl mb-3">Chiropractic Care</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  Manual adjustments and techniques to relieve pain, improve mobility,
                  and restore proper joint motion. Gentle, painless procedures customized
                  to your needs.
                </p>
              </div>
            </div>
            {/* StemWave */}
            <div className="relative group overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[600px]">
              <img
                src="/images/stemwave.webp"
                alt="StemWave Therapy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="w-10 h-px bg-[#C8A96E] mb-6" />
                <h3 className="font-serif text-3xl mb-3">StemWave Therapy</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  FDA-listed regenerative acoustic wave therapy. Activate your body&apos;s
                  natural healing with increased blood flow and stem cell activation for
                  tissue repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* StemWave Details */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                The Technology
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-8">
                What to Expect
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Each visit averages around 10-15 minutes. A gel is applied to the treatment
                  area, and the StemWave applicator delivers focused acoustic waves. The treatment
                  is non-invasive and requires no anesthesia.
                </p>
                <p>
                  Care plans commonly range between 8-12 sessions. Patients typically experience
                  significant improvement after 3-4 treatments, with many noticing results after
                  the very first session.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-white/10">
                <div>
                  <p className="font-serif text-4xl text-[#C8A96E]">10-15</p>
                  <p className="text-gray-500 text-sm mt-1">Minutes per session</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-[#C8A96E]">8-12</p>
                  <p className="text-gray-500 text-sm mt-1">Sessions typical</p>
                </div>
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
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Conditions</p>
            <h2 className="font-serif text-3xl md:text-5xl">Treatment Areas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              'Neck & Back Conditions',
              'Shoulder & Elbow',
              'Knee & Hip',
              'Wrist & Ankle',
              'Soft Tissue Injuries',
              'Post-Surgical Recovery',
            ].map((area) => (
              <div
                key={area}
                className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors duration-500 group"
              >
                <div className="w-8 h-px bg-[#C8A96E] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-xl">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">Our Team</p>
            <h2 className="font-serif text-3xl md:text-5xl">Dedicated Professionals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <img
                  src="/images/AdobeStock_492255186 (1).webp"
                  alt="Dr. J****** M*****"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Dr. J****** M*****, D.C.</h3>
              <p className="text-[#C8A96E] text-sm uppercase tracking-wider mb-4">
                Doctor of Chiropractic
              </p>
              <p className="text-gray-400 leading-relaxed">
                Originally from Flint, MI, Dr. M***** has been providing chiropractic care
                to Macomb County since 1982. He received his degree from Palmer College of
                Chiropractic in Davenport, Iowa.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <img
                  src="/images/staff_photo.webp"
                  alt="P** M*****"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">P** M*****</h3>
              <p className="text-[#C8A96E] text-sm uppercase tracking-wider mb-4">
                Certified StemWave Technician
              </p>
              <p className="text-gray-400 leading-relaxed">
                Pam served as office manager from 2001 to 2025 and is now certified in the
                application of StemWave Regenerative Therapy. Contact Pam directly at ***-***-****.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Begin Your Journey
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam directly to answer questions or schedule your appointment.
          </p>
          <a
            href="tel:5864773284"
            className="inline-block px-12 py-5 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
          >
            Call ***-***-****
          </a>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
