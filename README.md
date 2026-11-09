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
- `phones`: a list of verified phone numbers in international format; valid numbers become click-to-call links.
- `telegramUrl`, `instagramUrl`: full HTTPS social URLs.
- `instagramUsername`: display handle, currently `@mobileplus_izza`. Keep the Instagram hrefs in index.html in sync for use without JavaScript.
- `address`: verified location name or physical address (currently IzzaShowroom; no street address has been supplied).
- `googleMapsUrl`: full HTTPS Google Maps place/directions URL. Enables the map button; no API key required.
- `googleMapsEmbedUrl`: the `src` URL from Google Maps → Share → Embed a map. Only HTTPS `www.google.com/maps/embed…` or `maps.google.com/maps/embed…` URLs are accepted. This replaces the schematic panel with a responsive, lazy-loaded Google Maps iframe; no API key is required. Do not paste the entire iframe HTML.
- `businessHours`: verified business hours in Uzbek.

Unknown values must stay empty. Uzbek placeholders remain visible; missing social/map links are inactive. All Telegram links use the verified channel URL. Update the primary CTA href in index.html too if the channel changes, to keep it available without JavaScript. Until a verified embed URL is supplied, the map panel is explicitly decorative, not a real geographic map. Configuring the map URL enables navigation to the real location; configuring the embed URL displays Google Maps in the page. Keep both URLs pointed at the same verified location. Google Maps requires internet access; the separate map link remains available as a fallback. Never invent business information.

Page content and branding markup are in `index.html`; colors, breakpoints, and visual design are in `styles.css`. All visitor-facing copy should remain Uzbek (Latin alphabet). No product catalogs, cards, galleries, or photos should be added.

## Validation

Check desktop and mobile layouts, mobile navigation (including Escape), keyboard focus, reduced-motion mode, anchor navigation, and configured social/map/call links. No build step is required by this static site. Mobile navigation also remains accessible when JavaScript is disabled.

## Cloudflare Pages (when deployment is authorized)

Use the repository root as the output directory (`.`), no framework preset, and no build command. Serve index.html, styles.css, script.js, and the assets directory together. No environment variables or secrets are needed. This project has not been deployed as part of implementation.

## Vector logo

The hero, navigation, and footer use `assets/mobileplus-logo.svg`. It contains only vector paths and a small white backing behind the black/red wordmark: no raster image, runtime font, remote resource, or large grey panel. The hero has a subtle CSS drift loop; reduced-motion preferences disable it immediately. Navigation and footer remain static. Without CSS animation, the SVG itself is the still fallback. The previous WebP/PNG/WebM files remain as reference assets and are no longer requested by the page.

The red frame, inset M, upper-right plus, and wordmark proportions were reconstructed against the supplied low-resolution recording and reference frames. Lettering uses fitted, outlined Liberation Sans Bold contours (SIL Open Font License; no font file is loaded). This is a recognizable vector reconstruction, not a claim of an identical official master: the original typeface, tiny corner details, and exact spacing cannot be recovered reliably from a 252×126 video. The motion is a restrained new CSS drift, rather than an inaccurate recreation of the raster highlight sweep. Use a supplied official vector master in future if exact brand geometry becomes available.

Verified store details remain IzzaShowroom, +998 33 881 87 88, the Telegram channel, Instagram `@mobileplus_izza`, and `Ish vaqti: 08:00–19:00`. Do not add operating days. The supplied Maps directions URL is configured; the exact iframe embed URL remains empty in STORE_CONFIG. This change does not deploy or alter Cloudflare/DNS settings; the connected Pages project deploys when changes are merged into main.

## Location and Google Maps

`address` is `IzzaShowroom` and `googleMapsUrl` is the supplied `https://maps.app.goo.gl/FtAkeCJAVcU43v4T7`. Both location buttons use it and open safely in a new tab, including without JavaScript. Keep their static hrefs in index.html in sync if this URL changes.

The short link could not be resolved in the implementation environment (network policy returned HTTP 403; the web tool could not open it). Its exact place and official iframe embed URL could therefore not be verified. `googleMapsEmbedUrl` deliberately remains empty: the page shows an explicit map-unavailable panel with a working Google Maps link, not a made-up map or coordinates. Obtain the same place's Google Maps **Share → Embed a map** iframe `src`, verify that it matches this directions link, then paste only that URL into STORE_CONFIG. The existing code replaces the right panel with a responsive, interactive iframe using lazy loading, a descriptive title, and fullscreen support. Never put the short redirect URL into the embed field.
