# Sam Creative Graphics Site Upgrade

## Files changed
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/WhatsAppButton.tsx`
- `src/components/sections/Hero.tsx`, `Portfolio.tsx`, `Services.tsx`, `About.tsx`, `Process.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `CTASection.tsx`, `Contact.tsx`
- `src/data/site.ts`, `src/data/faqs.ts`, `src/data/services.ts`, `src/data/testimonials.ts`
- `src/lib/validation.ts`, `src/lib/mailer.ts`
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/loading.tsx`
- `package.json`, `tailwind.config.ts`

## Features added
- Premium homepage structure with sticky accessible header, hero, trust strip, featured work, five service groups, why choose us, process, founder profile, testimonials, FAQ, final CTA, contact form and floating WhatsApp action.
- Accessible mobile menu with Escape-key close, scroll lock and active section highlighting.
- Richer enquiry form with budget, timeline, organisation, source, privacy consent and honeypot.
- Vercel Analytics and Speed Insights dependencies.

## Content changed
- Updated positioning to focus on Nairobi brand design, strategic creative work and East African businesses.
- Removed public copy that sounded like admin or implementation guidance.
- Kept testimonials generic where verified client identities are not available.

## Accessibility improvements
- Added skip link, visible focus styles, semantic sections, accessible accordion, form labels, status announcements and keyboard-accessible navigation.
- Improved touch target sizing and reduced-motion handling.

## SEO improvements
- Updated metadata, canonical URL, robots, sitemap and JSON-LD structured data for ProfessionalService, WebSite and FAQPage.
- Marked `/admin/projects` as noindex.

## Performance improvements
- Uses Next font optimisation for Plus Jakarta Sans and Inter.
- Reduced the hero from multiple rotating large images to a focused project collage.
- Keeps interactive code limited to components that need it.

## Owner content still required
- Professional founder portrait.
- Verified client testimonial names, roles, organisations and permission to publish.
- More genuine project images and full case study details.
- Real privacy policy and service terms pages if legal documents are required.

## Deployment instructions
- Push changes to GitHub `main`.
- Vercel should auto-deploy from GitHub. Manual deploy can be run with `npx vercel --prod --yes`.

## Environment variables
- `MONGODB_URI` and optional `MONGODB_DB` for persistent submissions and uploaded projects.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` for email notifications.
- Optional `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
- `ADMIN_UPLOAD_PASSWORD` for the project upload dashboard.
- Optional `NEXT_PUBLIC_SITE_URL` if the production domain changes.
