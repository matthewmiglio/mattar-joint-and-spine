'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/Screenshot_20251109_153610_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251109_153719_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251109_153755_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251221_160604_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251228_164312_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251228_164502_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251228_164622_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20251228_165956_Gallery.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20250704_170244_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20220705-130852_Facebook.webp', alt: 'Clinic photo' },
  { src: '/images/Screenshot_20260106_205011_ChatGPT.webp', alt: 'Clinic photo' },
  { src: '/images/70afb5e3-3709-4645-b3e0-e517e5f55b83.webp', alt: 'Clinic photo' },
  { src: '/images/92291487-c5ef-49bc-923b-d9b56a2602d5.webp', alt: 'Clinic photo' },
  { src: '/images/afe4a305-4732-4601-ad54-f45469beacdb.webp', alt: 'Clinic photo' },
  { src: '/images/fda40b13-b81f-42b6-b027-40b9bc60cc0c.webp', alt: 'Clinic photo' },
  { src: '/images/image.webp', alt: 'Clinic photo' },
  { src: '/images/Stemwave SM051.webp', alt: 'StemWave device' },
  { src: '/images/stemwave.webp', alt: 'StemWave therapy' },
  { src: '/images/AdobeStock_114404159 (1).webp', alt: 'Chiropractic care' },
  { src: '/images/AdobeStock_492255186 (1).webp', alt: 'Chiropractic professional' },
  { src: '/images/AdobeStock_72148101 (1).webp', alt: 'Health and wellness' },
  { src: '/images/SoundWaves_Header_1920x1080_prog01 (1).webp', alt: 'Acoustic wave therapy' },
  { src: '/images/staff_photo.webp', alt: 'Staff photo' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : null,
      ),
    [],
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % images.length : null,
      ),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C8A96E] uppercase tracking-[0.3em] text-xs mb-8">
            Our Practice
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Gallery
          </h1>
          <div className="w-24 h-px bg-[#C8A96E] mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A look inside Mattar Joint &amp; Spine &mdash; our clinic, our team,
            and the technology we use to help you heal.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-24 lg:pb-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-square overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl leading-none transition-colors z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl leading-none transition-colors z-10"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl leading-none transition-colors z-10"
            aria-label="Next image"
          >
            &#8250;
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
