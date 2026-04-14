# Mattar Joint and Spine — TODO

## Homepage

- [x] Finalize homepage design — using Alternative 1 "Classic Elegance"

## Pages Needing Content

- [x] `/about` — About page (Dr. Mattar bio, Pam bio, clinic history)
- [x] `/services` — Services overview page
- [x] `/gallery` — Photo gallery with lightbox
- [x] `/testimonials` — Patient testimonials
- [x] `/faq` — Frequently asked questions (accordion)
- [x] `/areas-we-serve` — Service area / locations with map
- [x] `/contact` — Contact page with form, phone, address, map

## Pages That Don't Exist Yet

- [x] `/services/chiropractic` — Dedicated chiropractic care page
- [x] `/services/stemwave` — Dedicated StemWave therapy page
- [x] `/services/treatment-areas` — Treatment areas detail page

## Functionality

- [x] Make functional contact form (POSTs to /api/contact — TODO: add email service integration)

## Cleanup

- [x] Remove `/portfolio` page (duplicate of `/gallery`, not linked in nav)
- [x] Remove "Home Page Alternatives" nav dropdown — already removed

## Redactions

- [x] Fix redactions on the frontend — The guide (`public/guide.md`) and frontend pages have names, phone, email, and address redacted with asterisks. Un-redacted with:
  - **Name:** Jeffrey J. Mattar, D.C.
  - **Pam:** Pam Mattar, Technician
  - **Dr. Brandon Mckenzie** (bought the practice Jan 2025)
  - **Phone:** (586) 477-3284
  - **Email:** jeffmattar@hotmail.com
  - **Address:** 39949 Garfield Rd. Ste. B, Clinton Twp., MI 48038

## Upcoming

- [ ] Test contact form email delivery end-to-end
- [ ] QA new pages
- [ ] Verify DNS changes
- [ ] Make analytics routes + tables + policies
- [ ] Make dashboard RPCs + website

## SEO

### Technical Foundation
- [ ] Create `app/robots.ts` — allow public paths, block API routes, include sitemap reference
- [ ] Create `app/sitemap.ts` — generate XML sitemap for all public pages with lastmod dates
- [ ] Add canonical tags site-wide (force single URL version: https, no trailing slash)
- [ ] Add security headers in `next.config.ts` (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
- [ ] Ensure `noindex` never leaks to production / preview deployments

### Per-Page Metadata
- [ ] Add unique `<title>` tags per page (50-60 chars, keyword near start)
- [ ] Add unique meta descriptions per page (150-160 chars, include service + city + CTA)
- [ ] Add OpenGraph + Twitter card meta tags per page
- [ ] Add canonical URL per page

### Structured Data (JSON-LD)
- [ ] Add `LocalBusiness` schema site-wide (name, phone, address, serviceArea, hours)
- [ ] Add `Service` schema on each service page (chiropractic, stemwave, treatment-areas)
- [ ] Add `FAQPage` schema on `/faq`
- [ ] Add `BreadcrumbList` schema on all pages
- [ ] Add `Organization` schema site-wide

### Images
- [ ] Audit all `<img>` tags — replace with `next/image` where applicable (explicit width/height, sizes prop)
- [ ] Verify all images have descriptive alt text (not generic)
- [ ] Optimize hero images for LCP (preload, correct format)

### Internal Linking
- [ ] Ensure footer contains actual `<Link>` elements to all service pages (not plain text)
- [ ] Add breadcrumb navigation on all pages
- [ ] Add contextual internal links within page body content (service → related services, etc.)
- [ ] Audit internal link count per page (target 30+)

### Local SEO
- [ ] Verify NAP consistency (Name/Address/Phone identical in footer, contact page, and structured data)
- [ ] Ensure `/areas-we-serve` is a dedicated indexable page with unique content per area

### Performance
- [ ] Preload critical fonts for LCP
- [ ] Defer non-critical scripts
- [ ] Verify all images/video have explicit dimensions (prevent CLS)
