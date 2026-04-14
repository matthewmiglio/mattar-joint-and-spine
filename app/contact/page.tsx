'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Unable to send your message. Please try again.');
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-[#C8A96E] focus:outline-none transition-colors duration-300';

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-6">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Contact <span className="text-[#C8A96E]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about StemWave therapy or chiropractic care? Reach out and
            we&apos;ll be happy to help.
          </p>
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-10" />
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Form */}
            <div>
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                Send a Message
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">We&apos;d Love to Hear From You</h2>

              {status === 'success' && (
                <div className="mb-8 p-4 border border-[#C8A96E]/40 bg-[#C8A96E]/10 text-[#C8A96E]">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-8 p-4 border border-red-500/40 bg-red-500/10 text-red-400">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {([
                  { id: 'name', label: 'Name', type: 'text', ph: 'Your full name', req: true },
                  { id: 'email', label: 'Email', type: 'email', ph: 'you@example.com', req: true },
                  { id: 'phone', label: 'Phone', type: 'tel', ph: '(555) 555-5555', req: false },
                ] as const).map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-gray-400 text-sm mb-2">
                      {f.label} {f.req && <span className="text-[#C8A96E]">*</span>}
                    </label>
                    <input
                      id={f.id} name={f.id} type={f.type} required={f.req}
                      value={form[f.id]} onChange={handleChange}
                      placeholder={f.ph} className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                    Message <span className="text-[#C8A96E]">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="How can we help you?" className={inputClass + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-10 py-4 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right — Contact Info */}
            <div className="lg:pl-8">
              <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-4">
                Contact Information
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-10">Reach Us Directly</h2>

              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <div className="w-10 h-px bg-[#C8A96E] mb-4" />
                  <h3 className="font-serif text-xl mb-2">Phone</h3>
                  <a
                    href="tel:5864773284"
                    className="text-[#C8A96E] text-lg hover:text-[#d4b87e] transition-colors duration-300"
                  >
                    (586) 477-3284
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Call or text Pam directly</p>
                </div>

                {/* Location */}
                <div>
                  <div className="w-10 h-px bg-[#C8A96E] mb-4" />
                  <h3 className="font-serif text-xl mb-2">Location</h3>
                  <p className="text-gray-400">Macomb County, MI</p>
                </div>

                {/* Hours */}
                <div>
                  <div className="w-10 h-px bg-[#C8A96E] mb-4" />
                  <h3 className="font-serif text-xl mb-2">Hours</h3>
                  <div className="text-gray-400 space-y-1 text-sm">
                    <p>Monday &ndash; Friday: By Appointment</p>
                    <p>Saturday &ndash; Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Prefer to speak with someone right away? Contact Pam directly to
                  answer questions or schedule your appointment.
                </p>
                <a
                  href="tel:5864773284"
                  className="inline-block px-10 py-4 bg-[#C8A96E] text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4b87e] transition-all duration-500"
                >
                  Call (586) 477-3284
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
