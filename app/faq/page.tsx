'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What is StemWave Therapy?',
    a: 'StemWave is a regenerative medicine technique that utilizes harmless, yet powerful acoustic waves to activate your body\u2019s natural healing mechanisms. It increases blood flow by creating new blood vessels, reduces inflammation, and encourages stem cells to navigate to the treatment area for tissue repair. It is FDA-listed, safe, non-invasive, and requires no downtime.',
  },
  {
    q: 'How does StemWave work?',
    a: 'A gel is applied to the surface of the treatment area, and the StemWave applicator delivers focused acoustic waves into the tissue. These waves stimulate your body\u2019s natural regenerative process\u200a\u2014\u200aboosting blood circulation, reducing inflammation, and activating stem cells for tissue repair. The treatment does not require anesthesia or numbing creams.',
  },
  {
    q: 'How many StemWave sessions will I need?',
    a: 'Care plans commonly range between 8\u201312 sessions. Patients typically experience significant improvement after 3\u20134 treatments, and many notice results after the very first session. Subsequent treatments offer continual improvement and sustained results.',
  },
  {
    q: 'Is StemWave painful?',
    a: 'StemWave therapy is non-invasive and generally painless. Most patients describe the sensation as a mild tapping or tingling. No anesthesia or numbing creams are required, and there is no downtime after treatment.',
  },
  {
    q: 'What conditions does StemWave treat?',
    a: 'StemWave is effective for a wide variety of musculoskeletal conditions including neck and back pain, shoulder and elbow injuries, knee and hip issues, wrist and ankle conditions, soft tissue injuries involving muscles, tendons, and ligaments, and post-surgical recovery. It has shown to be an effective alternative to surgery, injections, or medications.',
  },
  {
    q: 'What is chiropractic care?',
    a: 'Chiropractic care optimizes nervous system function by detecting and correcting spinal misalignments. Using manual adjustments, table-assisted adjustments, and instrument adjustments, we relieve pain, improve mobility, and support overall wellness. Restoring proper joint motion also reduces friction, wear and tear, and slows the progression of joint arthritis and disc thinning.',
  },
  {
    q: 'How long are appointments?',
    a: 'StemWave sessions average around 10\u201315 minutes depending on the diagnosis and treatment area. Chiropractic visits are similarly efficient, allowing you to get back to your day quickly.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Please contact our office directly to discuss insurance coverage and payment options. We strive to make our treatments accessible and offer affordable care plans for both chiropractic and StemWave therapy.',
  },
  {
    q: 'Who is Dr. Mattar?',
    a: 'Dr. Mattar has been providing chiropractic care to Macomb County since 1982. He received his Doctor of Chiropractic degree from Palmer College of Chiropractic in Davenport, Iowa, and opened his clinic in 1985. His gentle, painless procedures are customized to each patient\u2019s needs. He now also offers StemWave regenerative acoustic wave therapy under Mattar Joint & Spine.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can contact Pam directly to answer any questions or schedule your appointment. Visit our contact page or call the office to get started on your path to healing.',
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-serif text-lg md:text-xl text-gray-200 group-hover:text-[#C8A96E] transition-colors duration-300 pr-8">
          {q}
        </span>
        <span
          className={`text-[#C8A96E] text-2xl flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed max-w-3xl">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="py-32 lg:py-40 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
            Knowledge Center
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Frequently Asked{' '}
            <span className="text-[#C8A96E]">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our chiropractic care and
            StemWave regenerative therapy.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-8" />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
              Answers
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              Common Questions
            </h2>
          </div>
          <div className="border-t border-white/10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re here to help. Reach out to learn more about how we can
            support your healing journey.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
          >
            Contact Us
          </Link>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
