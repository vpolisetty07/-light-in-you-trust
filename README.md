# Light in You Trust — Website

Premium one-page site for Light in You Trust. Pure HTML / CSS / JS — no build step, no dependencies.

## Files
- `index.html` — markup
- `styles.css` — premium styling (cream + forest + gold palette, serif/sans pairing)
- `script.js` — animated impact counters, mobile menu, current year

## Local preview
Just open `index.html` in a browser. Done.

## Deploy free on GitHub Pages

1. Create a new public repo on GitHub, e.g. `light-in-you-trust`.
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/light-in-you-trust.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: `main` / `/ (root)`** → Save.
4. Site goes live at `https://<your-username>.github.io/light-in-you-trust/` in ~1 minute.

### Custom domain (optional)
- Buy a domain (e.g. `lightinyoutrust.org`) from Namecheap / GoDaddy.
- In repo: **Settings → Pages → Custom domain** → enter your domain.
- At your registrar, add a `CNAME` record pointing to `<your-username>.github.io`.
- Free HTTPS auto-provisions in a few minutes.

## What to fill in before launch
- Bank / UPI details in the **Donate** section (`index.html` → search `XXXX`)
- Phone, email, address (`+91 00000 00000`, `hello@lightinyoutrust.org`)
- Real impact numbers in the `data-count` attributes
- Replace stat numbers in program cards with your actual figures
- Optional: add a `favicon.ico` and an `og-image.jpg` for social previews
