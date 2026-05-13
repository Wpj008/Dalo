# Dalo Ministries International — PRD

## Original Problem Statement
Build the **complete FRONTEND** of the new official website for "Dalo Ministries International" (rolanddalo.com). Inspired by impactcentrechretien.com but with its own identity — more elegant, more cinematic, more spiritual, more premium, more institutional, more international. FRONTEND ONLY (no backend, no API, no auth, no DB). All content mocked.

## User Choices (Iteration 1 — 2026-02)
- **Language**: Bilingual FR / EN with switcher
- **Visual style**: "Mix élégant" — cinematic dark hero + clean light content sections
- **Typography**: Cormorant Garamond (serif headings) + Satoshi (sans body)
- **Content**: All invented (realistic placeholder)
- **Scope**: All 11 pages from first iteration

## Architecture
- React (CRA + craco) + Tailwind + shadcn/ui + framer-motion + react-router-dom 7 + lucide-react + sonner
- FRONTEND ONLY — no backend touched
- i18n via React Context (`/src/i18n/LanguageContext.jsx` + `translations.js`)
- Mocked data in `/src/data/mock.js`

## Sitemap (11 pages + 404)
1. `/` — Home (Hero / QuickAbout / InternationalImpact / LatestVideos / EventsPreview / Testimonials / DonationCTA)
2. `/about` — Bio, Vision+Mission, Timeline, Legacy quote
3. `/ministries` — 7 ministry cards
4. `/events` — Filterable events grid
5. `/media` — Featured video + filterable library
6. `/impact` — International impact (map + country grid)
7. `/partnership` — 3 giving tiers + donation form
8. `/contact` — Multi-office info + contact form
9. `/churches` — 6 church cards
10. `/prayer` — Prayer request form
11. `/member` — 3-step membership wizard
- `*` — 404 page

## Implemented (Iteration 1 — Feb 2026)
- Full sticky Header (transparent → solid on scroll, FR/EN switcher, fullscreen mobile menu, Donate CTA)
- Cinematic Hero with Ken Burns image animation + staggered text reveal
- Animated counters, world-map section with 14 glowing country dots
- Premium VideoCard / EventCard / ChurchCard / MinistryCard components
- Testimonial slider with prev/next + dot navigation
- All 11 pages + functional forms (newsletter, donation, contact, prayer, become-member wizard)
- Sonner toast notifications for all form submissions
- Custom Tailwind palette (dmi-navy / dmi-charcoal / dmi-offwhite / dmi-gold / dmi-beige / dmi-light-blue)
- Custom CSS components (`.btn-gold`, `.dmi-h1/h2/h3`, `.dmi-eyebrow`, `.underline-grow`, `.grain`)
- Cormorant Garamond + Satoshi fonts loaded from Google Fonts + Fontshare
- ScrollToTop on route change, smooth scroll behavior
- Full FR/EN i18n with localStorage persistence
- All `data-testid` attributes for testing
- 97% test pass rate; 2 LOW issues fixed (member stepper testid indexing, About page legacy quote i18n)

## User Personas
- **The faith partner** — Wants to give, become a partner, or pray with the ministry
- **The new visitor** — Discovers Roland Dalo, the vision, the international reach
- **The member candidate** — Joins the family via the multi-step form
- **The international community** — Reads in EN, locates the nearest church

## Backlog (Future Iterations)
### P1
- Real Stripe / PayPal integration when backend lands
- Real YouTube/Vimeo embed in Media pages instead of external link
- Search across media library
- Sermons audio player

### P2
- Backend integration for prayer requests, member applications, contact (Resend/SendGrid)
- Admin dashboard for events / videos / churches
- Blog / Articles section
- Donor portal (recurring partner dashboard)
- Live streaming page
- E-commerce (books, conference tickets)
- SEO / OG / sitemap.xml / robots.txt
- Analytics (Plausible / GA4)

## Next Tasks Suggestion
- Replace placeholder YouTube `dQw4w9WgXcQ` IDs with real DMI YouTube IDs
- Replace `#` social anchors with real Facebook/Instagram/YouTube/Twitter URLs
- Wire up Stripe/PayPal for /partnership donation form
- Connect prayer + contact + member forms to a Laravel/Node API
