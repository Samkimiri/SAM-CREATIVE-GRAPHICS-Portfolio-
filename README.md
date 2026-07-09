# Sam Creative Graphics

Premium full-stack agency website for Sam Creative Graphics, a Nairobi-based brand design agency serving startups, SMEs, corporates, NGOs, and East African businesses.

## Features

- Responsive Next.js website with Tailwind CSS
- Sticky navigation and conversion-focused homepage sections
- Services, portfolio, testimonials, about, and contact sections
- Contact form with server-side validation and honeypot spam protection
- Owner project upload dashboard at `/admin/projects`
- Public portfolio section powered by uploaded project records
- Professional WhatsApp catalog CTA connected to `https://wa.me/c/254743475247`
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
ADMIN_UPLOAD_PASSWORD=change-this-owner-password
```

If `MONGODB_URI` is empty, contact submissions are saved to `data/contact-submissions.json` for local development.

If SMTP values are empty, email notifications are skipped but submissions still save.

Set `ADMIN_UPLOAD_PASSWORD` in Vercel. The owner uses that password on `/admin/projects` to upload portfolio projects without editing code.

## Admin Design Uploads

Open `/admin/projects` to add designs to the homepage portfolio.

- Enter the owner password from `ADMIN_UPLOAD_PASSWORD`
- Upload a compressed image below 1.1MB or paste an HTTPS image URL
- Choose a category, or select `Other` to enter a custom category
- Set image focus if the preview crop needs adjusting
- Click `Load Uploaded Designs` to view or delete existing uploads

For production hosting, configure `MONGODB_URI` so uploaded designs persist permanently. Without MongoDB, uploads are saved to `data/projects.json`, which is suitable for local development but may not persist on serverless hosting.

## API Routes

- `POST /api/contact`
- `GET /api/services`
- `GET /api/portfolio`
- `GET /api/testimonials`
- `POST /api/admin/projects`

## Deployment

This project is ready for Vercel. Add the environment variables in Vercel before enabling production contact email and MongoDB storage.
