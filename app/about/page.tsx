import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            About <span className="text-[#C8A96E]">Our Practice</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Serving Macomb County with chiropractic excellence since 1982 and
            cutting-edge regenerative therapy.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* Dr. Mattar Bio */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/AdobeStock_492255186 (1).webp"
                alt="Dr. J****** M*****, D.C."
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                Doctor of Chiropractic
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">
                Dr. J****** M*****
              </h2>
              <div className="w-10 h-px bg-[#C8A96E] mb-8" />
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Originally from Flint, MI, Dr. M***** has been providing
                  chiropractic care to Macomb County since 1982. He received his
                  Doctor of Chiropractic degree from Palmer College of
                  Chiropractic in Davenport, Iowa.
                </p>
                <p>
                  He opened M***** Chiropractic Clinic in 1985, where he helped
                  improve the lives of thousands of patients over the years. His
                  gentle and painless procedures are customized to your personal
                  needs.
                </p>
                <p>
                  Under the name of M***** Joint and Spine, Dr. M***** has
                  included the latest technology of regenerative acoustic wave
                  therapy to add a regenerative approach to various joint
                  injuries due to trauma, repetitive motion, post-surgical
                  healing, and degenerative changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pam Bio */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                Certified StemWave Technician
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">
                P** M*****
              </h2>
              <div className="w-10 h-px bg-[#C8A96E] mb-8" />
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Pam has been the office manager from 2001 to 2025. Now, she is
                  certified in the application of StemWave Regenerative Therapy.
                </p>
                <p>
                  She provides painless procedures using focused acoustic waves
                  to stimulate the natural regenerative process of the body.
                  Contact Pam directly to answer questions or make an
                  appointment.
                </p>
              </div>
              <a
                href="tel:5864773284"
                className="inline-block mt-8 px-10 py-4 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
              >
                Call Pam: ***-***-****
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/staff_photo.webp"
                alt="P** M*****"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / History */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-8">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-snug text-gray-200 mb-10">
            &ldquo;True Healing Starts With How The Body Moves, And How It
            Repairs Itself.&rdquo;
          </blockquote>
          <div className="w-24 h-px bg-[#C8A96E] mx-auto mb-10" />
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed text-left">
            <p>
              The goal of chiropractic care is to optimize the function of the
              nervous system by detecting spinal misalignments. The nervous
              system &mdash; consisting of the brain, spinal cord, and nerves
              &mdash; is responsible for controlling and coordinating all bodily
              functions.
            </p>
            <p>
              By ensuring proper alignment of the spine, chiropractic care plays
              a crucial role in promoting overall health and alleviating pain.
              This alignment allows for uninterrupted nerve communication
              throughout the body, facilitating the restoration of well-being.
            </p>
            <p>
              By restoring proper joint motion, we also reduce the friction and
              wear and tear between joints, which cause joint arthritis,
              inflammation, and disc thinning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">40+</p>
              <p className="text-gray-500 text-sm mt-2">Years of practice</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">1982</p>
              <p className="text-gray-500 text-sm mt-2">Serving Macomb County</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">1000s</p>
              <p className="text-gray-500 text-sm mt-2">Patients helped</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#C8A96E]">FDA</p>
              <p className="text-gray-500 text-sm mt-2">Listed StemWave</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ready to Begin?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact Pam directly to answer questions or schedule your
            appointment. Experience the difference that decades of expertise and
            modern technology can make.
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
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
