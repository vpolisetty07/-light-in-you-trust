# Light in You Trust — Website

Premium editorial single-page site for Light in You Trust — a registered 80G
charitable trust in India.

Pure HTML / CSS / JS — no build step, no dependencies. Hosted free on
GitHub Pages at [lightinyoutrust.org](https://lightinyoutrust.org).

## Files

| Path                             | Purpose                                            |
|----------------------------------|----------------------------------------------------|
| `index.html`                     | Markup — every section in one document             |
| `styles.css`                     | Site stylesheet (imports `colors_and_type.css`)    |
| `colors_and_type.css`            | Design tokens (colors, type, spacing, motion)      |
| `script.js`                      | Footer year, impact-numeral fade-in, UPI copy, mobile menu |
| `CNAME`                          | Custom domain config (GitHub Pages)                |
| `sitemap.xml`, `robots.txt`      | SEO                                                |
| `assets/`                        | Logo SVGs, favicon, OG share image, UPI QR         |
| `images/`                        | Photography — placeholders in repo, swap with real |

## Brand

- **Type:** Newsreader (Google Fonts, display serif) + Public Sans (Google Fonts, UI sans).  
  Substitutes for GT Sectra and Söhne. Swap the @import at the top of
  `colors_and_type.css` to use licensed faces.
- **Palette:** ink `#0a0a0a` + bone `#f8f5ee` + saffron `#c8551c`. Two alternates
  (Heritage Burgundy `#6b1f2a`, Forest Editorial `#1a3d2e`) are defined in
  `colors_and_type.css` — toggle by adding `palette-burgundy` or
  `palette-forest` to the `<html>` element.

## Local preview

Open `index.html` in any browser. No build required.

## Deploy (GitHub Pages)

This repo is already configured for GitHub Pages with a custom domain via the
`CNAME` file. Push to `main`, GitHub Pages serves it. Free HTTPS via Let's
Encrypt auto-provisions.

## Editing checklist before going live

1. **Razorpay link** — `index.html`, search for `pages.razorpay.com/lightinyoutrust`
   and swap in your actual page URL.
2. **UPI ID** — `index.html`, replace `lightinyou@upi` (appears once in the
   donate panel and once in the FAQ; the copy-to-clipboard reads from
   `data-copy="…"`).
3. **UPI QR** — `assets/upi-qr-placeholder.png` is a stylised placeholder.
   Generate a real QR for your UPI ID (e.g. via `https://www.qrcode-monkey.com`)
   and save as `assets/upi-qr.png`, then update the `<img src>` in `index.html`.
4. **Photography** — `images/README.md` lists every photograph slot with
   dimensions and a content brief. Replace each JPG in place; no markup changes.
5. **Phone, address, contact** — search for `+91 00000 00000` and `[Your City]`
   in `index.html`.
6. **Impact numerals** — search for `data-count` and update both the attribute
   and the displayed text.
7. **Annual report PDF** — link the "Download Annual Report" button to your
   real PDF.

## Accessibility & SEO

- Open Graph + Twitter Card meta tags wired to `assets/og-image.png` (1200×630
  PNG, scannable by WhatsApp / iMessage / Slack).
- NGO schema.org JSON-LD in `<head>`.
- Semantic HTML; every image has alt text; form labels are properly associated.
- Eyebrow / label text starts at 10px / 0.22em tracking — institutional
  rather than micro.

— Built as a one-time editorial redesign. Push to main and Pages does the rest.
