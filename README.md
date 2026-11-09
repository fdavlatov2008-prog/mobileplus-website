# MobilePlus

Responsive Uzbek-language informational website for a mobile phone accessories store. Built with HTML, CSS, and vanilla JavaScript. No build, backend, packages, product imagery, or external fonts are required.

## Run locally

From this checkout:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the local server in your browser. Alternatively, open `index.html` directly. Stop the server with Ctrl+C.

## Edit business information

Edit `STORE_CONFIG` at the top of `script.js`:

- `name`: business name (also update the visible stylized logos and hero in `index.html` if rebranding).
- `description`: introduction and SEO description.
- `phones`: two verified phone numbers in international format; valid numbers become click-to-call links.
- `telegramUrl`, `instagramUrl`: full HTTPS social URLs.
- `address`: verified physical address.
- `googleMapsUrl`: full HTTPS Google Maps place/directions URL. Enables the map button; no API key required.
- `googleMapsEmbedUrl`: the `src` URL from Google Maps → Share → Embed a map. Only HTTPS `www.google.com/maps/embed…` or `maps.google.com/maps/embed…` URLs are accepted. This replaces the schematic panel with a responsive, lazy-loaded Google Maps iframe; no API key is required. Do not paste the entire iframe HTML.
- `businessHours`: verified business hours in Uzbek.

Unknown values must stay empty. Uzbek placeholders remain visible; missing social/map links are inactive. The hero Telegram button leads to the contact section until configured. Until a verified embed URL is supplied, the map panel is explicitly decorative, not a real geographic map. Configuring the map URL enables navigation to the real location; configuring the embed URL displays Google Maps in the page. Keep both URLs pointed at the same verified location. Google Maps requires internet access; the separate map link remains available as a fallback. Never invent business information.

Page content and branding markup are in `index.html`; colors, breakpoints, and visual design are in `styles.css`. All visitor-facing copy should remain Uzbek (Latin alphabet). No product catalogs, cards, galleries, or photos should be added.

## Validation

Check desktop and mobile layouts, mobile navigation (including Escape), keyboard focus, reduced-motion mode, anchor navigation, and configured social/map/call links. No build step is required by this static site. Mobile navigation also remains accessible when JavaScript is disabled.

## Cloudflare Pages (when deployment is authorized)

Use the repository root as the output directory (`.`), no framework preset, and no build command. All three website files must be served together. No environment variables or secrets are needed. This project has not been deployed as part of implementation.
