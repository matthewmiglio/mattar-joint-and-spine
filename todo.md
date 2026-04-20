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



### Random todos
1. this part on the home page Dr. Jeffrey Mattar, D.C.
Doctor of Chiropractic

Originally from Flint, MI, Dr. Mattar has been providing chiropractic care to Macomb County since 1982. He received his degree from Palmer College of Chiropractic in Davenport, Iowa.
needs a real pic of Jeff Mattar. We have these. use this one C:\My_Files\my_programs\mattar-joint-and-spine\public\images\Screenshot_20251109_153719_Facebook.webp

2. all the schedule consultation buttons should just link to the contact page. not be a phone or mail button

3. this part on the about page Doctor of Chiropractic

Dr. Jeffrey Mattar
Originally from Flint, MI, Dr. Mattar has been providing chiropractic care to Macomb County since 1982. He received his Doctor of Chiropractic degree from Palmer College of Chiropractic in Davenport, Iowa.

He opened Mattar Chiropractic Clinic in 1985, where he helped improve the lives of thousands of patients over the years. His gentle and painless procedures are customized to your personal needs.

Under the name of Mattar Joint and Spine, Dr. Mattar has included the latest technology of regenerative acoustic wave therapy to add a regenerative approach to various joint injuries due to trauma, repetitive motion, post-surgical healing, and degenerative changes. needs to be that pic of jeff mattar too

4. https://mattar-joint-and-spine.vercel.app/gallery gallery needs to remove some images:

https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2FScreenshot_20251221_160604_Facebook.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2FScreenshot_20260106_205011_ChatGPT.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2FScreenshot_20251228_164622_Facebook.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2F70afb5e3-3709-4645-b3e0-e517e5f55b83.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2F92291487-c5ef-49bc-923b-d9b56a2602d5.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2Fafe4a305-4732-4601-ad54-f45469beacdb.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2Ffda40b13-b81f-42b6-b027-40b9bc60cc0c.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2Fimage.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2FSoundWaves_Header_1920x1080_prog01%20(1).webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2FAdobeStock_492255186%20(1).webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ
https://mattar-joint-and-spine.vercel.app/_next/image?url=%2Fimages%2F92291487-c5ef-49bc-923b-d9b56a2602d5.webp&w=1200&q=75&dpl=dpl_HmztVzHw9tBTSQnXESFXi3ZLChKJ

