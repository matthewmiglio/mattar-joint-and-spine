{/* Alternative 3: Editorial Narrative — Cream/Brown magazine-style */}

import Link from 'next/link';

export default function Alt3() {
  return (
    <div className="bg-[#FAF7F2] text-[#2C2C2C]">
      {/* Hero — Full-width editorial */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/AdobeStock_114404159 (1).webp"
            alt="Healing hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#8B4513] uppercase tracking-[0.25em] text-xs font-medium mb-4">
              M***** Joint &amp; Spine &mdash; ******* *********, Michigan
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              The Art of
              <br />
              <em className="text-[#8B4513]">Natural Healing</em>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed max-w-xl">
              Where four decades of chiropractic mastery meets the science
              of regenerative therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-px bg-[#8B4513] mb-12" />
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#3a3a3a]">
            Dr. J****** M***** has been providing chiropractic care to Macomb County
            since 1982. A graduate of Palmer College of Chiropractic, his gentle and
            painless procedures are customized to each patient&apos;s personal needs &mdash;
            a philosophy that has helped thousands find relief.
          </p>
          <div className="w-12 h-px bg-[#8B4513] mt-12" />
        </div>
      </section>

      {/* Story Section — Alternating */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Block 1: Chiropractic */}
          <div className="grid lg:grid-cols-2 gap-0 mb-1">
            <div className="bg-[#2C2C2C] p-10 lg:p-16 flex items-center">
              <div className="text-white">
                <p className="text-[#D4A373] uppercase tracking-[0.25em] text-xs mb-4">
                  The Foundation
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Chiropractic Care</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The goal of chiropractic care is to optimize the function of the
                  nervous system. The brain, spinal cord, and nerves control and coordinate
                  all bodily functions. By ensuring proper alignment, chiropractic care
                  promotes overall health and alleviates pain.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Restoring proper joint motion reduces friction and wear between joints,
                  which cause arthritis, inflammation, and disc thinning.
                </p>
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0">
              <img
                src="/images/AdobeStock_72148101 (1).webp"
                alt="Chiropractic Treatment"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: StemWave */}
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
              <img
                src="/images/stemwave.webp"
                alt="StemWave Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#5C3D2E] p-10 lg:p-16 flex items-center order-1 lg:order-2">
              <div className="text-white">
                <p className="text-[#D4A373] uppercase tracking-[0.25em] text-xs mb-4">
                  The Innovation
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">StemWave Therapy</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  StemWave is a regenerative medicine technique that utilizes harmless yet
                  powerful acoustic waves to activate your body&apos;s natural healing. This
                  FDA-listed technology increases blood flow and new blood vessel formation,
                  allowing stem cells to navigate to the area for tissue repair.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                    Non-invasive &mdash; no surgery or injections
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                    10-15 minute sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                    Results often after first treatment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 lg:py-32 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-snug text-white mb-8">
            &ldquo;True healing starts with how your body moves and
            how it repairs itself.&rdquo;
          </blockquote>
          <div className="w-12 h-px bg-[#D4A373] mx-auto mb-6" />
          <p className="text-[#D4A373] uppercase tracking-[0.2em] text-sm">
            Dr. J****** M*****
          </p>
        </div>
      </section>

      {/* StemWave Details — Editorial */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[#8B4513] uppercase tracking-[0.25em] text-xs mb-4">
                The Experience
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                What to Expect During Treatment
              </h2>
              <img
                src="/images/Stemwave SM051.webp"
                alt="StemWave Device"
                className="w-full mt-8"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Each visit averages around 10-15 minutes. A gel is applied to the surface
                  of the treatment area, and the StemWave applicator delivers focused waves.
                  The treatment is non-invasive and does not require anesthesia or numbing creams.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Care plans commonly range between 8-12 sessions. Patients typically experience
                  significant improvement after 3-4 treatments; however, many notice improvement
                  after the very first treatment.
                </p>
                <div className="border-t border-[#8B4513]/20 pt-8">
                  <h3 className="font-serif text-2xl mb-6">Treatment Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Neck & Back',
                      'Shoulder & Elbow',
                      'Knee & Hip',
                      'Wrist & Ankle',
                      'Soft Tissue',
                      'Post-Surgical',
                    ].map((area) => (
                      <p key={area} className="text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#8B4513] rounded-full" />
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team — Editorial Style */}
      <section className="py-24 lg:py-32 bg-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#8B4513] uppercase tracking-[0.25em] text-xs mb-4">The People</p>
            <h2 className="font-serif text-3xl md:text-5xl">Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <img
                src="/images/AdobeStock_492255186 (1).webp"
                alt="Dr. J****** M*****"
                className="w-full aspect-[3/4] object-cover mb-8"
              />
              <h3 className="font-serif text-2xl mb-2">Dr. J****** M*****, D.C.</h3>
              <p className="text-[#8B4513] text-sm uppercase tracking-wider mb-4">
                Doctor of Chiropractic
              </p>
              <p className="text-gray-600 leading-relaxed">
                Originally from Flint, MI, Dr. M***** received his degree from Palmer College
                of Chiropractic in Davenport, Iowa. He opened M***** Chiropractic Clinic in 1985
                and has been improving lives ever since.
              </p>
            </div>
            <div>
              <img
                src="/images/staff_photo.webp"
                alt="P** M*****"
                className="w-full aspect-[3/4] object-cover mb-8"
              />
              <h3 className="font-serif text-2xl mb-2">P** M*****</h3>
              <p className="text-[#8B4513] text-sm uppercase tracking-wider mb-4">
                Certified StemWave Technician
              </p>
              <p className="text-gray-600 leading-relaxed">
                Having served as office manager from 2001 to 2025, Pam is now certified in
                StemWave Regenerative Therapy. She provides painless procedures using focused
                acoustic waves to stimulate natural regeneration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Editorial */}
      <section className="py-24 lg:py-32 bg-[#8B4513]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="w-12 h-px bg-white/40 mx-auto mb-10" />
          <p className="uppercase tracking-[0.25em] text-xs text-white/60 mb-6">Schedule Today</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Your Story of Healing Begins Here
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam directly to discuss your needs and schedule your first appointment.
          </p>
          <a
            href="tel:5864773284"
            className="inline-block px-12 py-5 bg-white text-[#8B4513] font-semibold text-sm uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors"
          >
            Call ***-***-****
          </a>
          <div className="w-12 h-px bg-white/40 mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
