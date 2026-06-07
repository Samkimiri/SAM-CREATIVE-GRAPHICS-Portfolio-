# Sam Creative Graphics

Premium full-stack agency website for Sam Creative Graphics, a Nairobi-based brand design agency serving startups, SMEs, corporates, NGOs, and East African businesses.

## Features

- Responsive Next.js website with Tailwind CSS
- Sticky navigation and conversion-focused homepage sections
- Services, portfolio, testimonials, about, and contact sections
- Contact form with server-side validation and honeypot spam protection
- API routes for contact, services, portfolio, and testimonials
- MongoDB storage when configured, JSON fallback for local development
- Optional SMTP email notification with Nodemailer
- SEO metadata, Open Graph tags, accessible forms, and semantic HTML

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and configure the values you need.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
MONGODB_URI=
MONGODB_DB=sam_creative_graphics
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=samkimiri550307@gmail.com
CONTACT_FROM_EMAIL=hello@samcreativegraphics.co.ke
```

If `MONGODB_URI` is empty, contact submissions are saved to `data/contact-submissions.json` for local development.

If SMTP values are empty, email notifications are skipped but submissions still save.

## API Routes

- `POST /api/contact`
- `GET /api/services`
- `GET /api/portfolio`
- `GET /api/testimonials`

## Deployment

This project is ready for Vercel. Add the environment variables in Vercel before enabling production contact email and MongoDB storage.
