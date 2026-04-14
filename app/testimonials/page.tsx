import Link from "next/link";

const testimonials = [
  {
    name: "Linda R.",
    location: "Macomb Township, MI",
    text: "After years of chronic lower back pain, I was skeptical that anything could help without surgery. Dr. Mattar explained everything clearly and started me on a combination of chiropractic adjustments and StemWave therapy. By my fourth session I was sleeping through the night for the first time in years. I cannot recommend this practice enough.",
  },
  {
    name: "James T.",
    location: "Shelby Township, MI",
    text: "I came in with a shoulder injury from years of repetitive motion at work. The StemWave treatments were painless and only took about fifteen minutes each visit. Within a few weeks the stiffness was gone and I had my full range of motion back. Pam was wonderful and made every appointment easy.",
  },
  {
    name: "Marie S.",
    location: "Sterling Heights, MI",
    text: "I had been dealing with knee pain that made it difficult to walk up stairs. A friend told me about the StemWave therapy at Mattar Joint and Spine. After eight sessions my knee felt better than it had in a decade. The entire staff treats you like family.",
  },
  {
    name: "Robert D.",
    location: "Clinton Township, MI",
    text: "Dr. Mattar has been taking care of my spine since the early nineties. His adjustments are always gentle and effective. When he introduced StemWave therapy I tried it for my elbow tendinitis and the results were remarkable. This office is a hidden gem in Macomb County.",
  },
  {
    name: "Angela P.",
    location: "Warren, MI",
    text: "I was recovering from knee surgery and my doctor suggested acoustic wave therapy to speed up healing. Mattar Joint and Spine was the best decision I made. The treatments were completely painless and I was ahead of schedule on my recovery. I tell everyone I know about this place.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="py-32 lg:py-40 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
            Patient Stories
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            What Our Patients <span className="text-[#C8A96E]">Say</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real experiences from patients across Macomb County who found relief
            through chiropractic care and StemWave therapy.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-8" />
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border-l-2 border-[#C8A96E] bg-[#0a0a0a] p-8 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors duration-500"
              >
                <div>
                  <div className="w-8 h-px bg-[#C8A96E] mb-6" />
                  <p className="text-gray-300 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-serif text-lg">{t.name}</p>
                  <p className="text-[#C8A96E] text-sm uppercase tracking-wider mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Share Your Experience
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Your story could help someone else find the relief they have been
            searching for. We would love to hear about your journey.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
          >
            Tell Us Your Story
          </Link>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
