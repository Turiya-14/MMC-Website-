# MakeMyCampaign — Website (v2, Claude build)

A fully static site (no build step) — open `index.html` directly, or serve the folder with any static server.

## Stack
- Plain HTML/CSS/JS, no framework, no bundler.
- **GSAP + ScrollTrigger** and **Lenis** for smooth scroll and scroll-driven animation — vendored locally in `/vendor` (not loaded from a CDN), so the site works offline and never breaks if a CDN is down.
- **Poppins / Inter** (Google Fonts) — self-hosted as `.woff2` in `css/fonts/`, no external font requests either.
- Zero dependencies to install. Zero `npm install` needed to run it.

## Structure
```
index.html            homepage — all markup + section content
privacy-policy.html   Privacy Policy (IT Act 2000 / DPDP Act 2023)
terms.html            Terms & Conditions
css/style.css          design tokens, layout, all styling
css/fonts/              self-hosted font files
js/main.js              preloader, Lenis + ScrollTrigger, cursor, menu, filmstrip, lightbox, contact modal
vendor/                 local copies of gsap.min.js / ScrollTrigger.min.js / lenis.min.js
assets/                 real MMC photos/creatives (sourced from Instagram)
assets/logo/            real MMC logo — transparent-bg crops (mark + full lockup) at a few sizes
build_artifact.py       rebuilds artifact.html (single-file, base64-inlined) from the live source — run after any change if you also want to republish the Artifact preview
test/check.js           Playwright smoke test (screenshots + console-error check) — dev tool, optional
```

## Brand
- **Logo** — the real MMC logo now lives on the site: header nav, hero watermark, and both legal pages. Palette pulled directly from it: signal blue (`#2E6CB0`) + acid orange (`#E2762F`) on a near-black ink background and warm paper cream.
- **Type** — Poppins (display headlines + tracked uppercase UI labels) + Inter (body copy).
- **Contact** — real details are live throughout the site (header, mobile menu, footer):
  - Phone: `+91 88885 33422` (`tel:` link)
  - Email: `business@makemycampaign.co.in` (`mailto:` link)
  - Instagram: [instagram.com/makemycampaignn](https://www.instagram.com/makemycampaignn)
  - HQ: Priyadarshan Baglow, Manik Nagar, Nashik, Maharashtra 422005 — with branches in **Thane** and **Goa**. The whole site is written to reflect all three locations, not Nashik alone.
- **Real imagery** — 3 real creatives verified and sourced from MMC's own Instagram: two Goa Assembly Elections campaign posters (shown in the showpiece filmstrip and the Elections → Political Campaigns lightbox) and the WhatsApp/CPaaS broadcast graphic (showpiece filmstrip + "Latest" grid).
- **Contact form** — the "Start Your Campaign" buttons open an on-page modal; submitting it compiles the form into a WhatsApp click-to-chat link (`wa.me/918888533422`) instead of posting anywhere, so no backend is required.
- **Elections vertical** — the three pillars (Political / Corporate / Institutional) are buttons that open a lightbox gallery per track. Political is populated with the two real Goa creatives; Corporate and Institutional show an honest "coming soon" state until real case studies are supplied.

## What's still placeholder
A few slots were left as clearly-marked dashed placeholder boxes because no verified-good real asset exists for them yet — search `placeholder-box` in the code to find every spot:
- The NMC (Nashik Municipal Corporation) featured-case visual.
- The 6 client-logo tiles in the Work section.
- 5 of the 6 "latest work" reel/post tiles (1 now carries a real creative).
- 4 of the 7 showpiece filmstrip tiles (TV & Print, Outdoor, Live Events, Content & Reels).
- The Corporate Elections and Institutional Elections lightbox galleries.

No stats/numbers were invented — the "Why MMC" section uses qualitative pillars instead of fabricated figures. Swap in real numbers there if you have them.

## Design direction
Inspired by jiocreativelabs.com's *mechanics* (preloader, pinned scroll sections, scroll-jacked horizontal reveal) — not its colors, copy, or assets. Own logo-derived palette, own type pairing, own copy, own iconography. The showpiece section is a single pinned horizontal filmstrip driven by one shared scroll-linked transform (not several independently-animated elements), so there's nothing to desync as the user scrolls.

## Next steps (phase-by-phase in VS Code)
1. Drop in real client logos + the NMC campaign visual + the remaining reel/post thumbnails + the remaining filmstrip/election category photos as they arrive.
2. Optional: wire the "latest work" grid to real Instagram/YouTube embeds instead of static images.
3. Optional: add a real case-study page per client if you want depth beyond the one-pager.
4. After any change to index.html/css/js/assets, run `python3 build_artifact.py` to regenerate `artifact.html` before republishing the live preview.
