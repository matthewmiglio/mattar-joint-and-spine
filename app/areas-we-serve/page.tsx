import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Mattar Joint & Spine",
  description:
    "Mattar Joint & Spine proudly serves Sterling Heights, Clinton Township, Shelby Township, Macomb Township, Utica, Warren, Troy, Rochester Hills, Mt. Clemens, and Chesterfield in Macomb County, Michigan.",
};

const areas = [
  "Sterling Heights",
  "Clinton Township",
  "Shelby Township",
  "Macomb Township",
  "Utica",
  "Warren",
  "Troy",
  "Rochester Hills",
  "Mt. Clemens",
  "Chesterfield",
];

export default function AreasWeServe() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">
            Macomb County, Michigan
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Areas We <span className="text-[#C8A96E]">Serve</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Proudly providing chiropractic care and StemWave regenerative therapy
            to communities throughout Macomb County and the surrounding region.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* Primary Location */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                Our Location
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-8">
                Macomb County, Michigan
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Mattar Joint &amp; Spine has served the Macomb County community
                  since 1985. Under the care of Dr. Mattar, our clinic combines
                  decades of chiropractic expertise with cutting-edge StemWave
                  regenerative therapy.
                </p>
                <p>
                  Conveniently located in Sterling Heights, we are easily
                  accessible to patients from across Macomb County and the
                  greater Metro Detroit area.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="font-serif text-4xl text-[#C8A96E]">40+</p>
                <p className="text-gray-500 text-sm mt-1">
                  Years serving Macomb County
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <iframe
                title="Mattar Joint and Spine location in Macomb County"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188978.37753559082!2d-83.12!3d42.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e3b8a709e56f%3A0x2e8d8b5e7c4c8b0!2sMacomb%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full aspect-square border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
              Communities
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              Nearby Areas We Serve
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-[#0a0a0a] p-8 hover:bg-[#1a1a1a] transition-colors duration-500 group text-center"
              >
                <div className="w-8 h-px bg-[#C8A96E] mx-auto mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-lg">{area}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-center mt-10 text-sm">
            Don&apos;t see your area listed? We welcome patients from all
            surrounding communities. Contact us to learn more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Schedule Your Visit
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ready to start your journey toward pain relief and better mobility?
            Contact us today to book your consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5864773284"
              className="px-10 py-4 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
            >
              Call (586) 477-3284
            </a>
            <Link
              href="/contact"
              className="px-10 py-4 border border-[#C8A96E]/40 text-[#C8A96E] text-sm uppercase tracking-[0.15em] hover:bg-[#C8A96E]/10 transition-all duration-500"
            >
              Contact Us
            </Link>
          </div>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
