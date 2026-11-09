/* BUSINESS CONFIGURATION: replace empty strings with verified business details.
   Leave unknown fields empty; the site shows Uzbek placeholders instead.
   Phone numbers: use international format, e.g. +country-code..., without inventing numbers. */
const STORE_CONFIG = {
  name: 'MobilePlus',
  description: 'MobilePlus — mobil telefon aksessuarlari do‘koni. Kundalik hayotingizga mos aksessuarlarni biz bilan toping.',
  phones: ['+998 33 881 87 88'],
  telegramUrl: 'https://t.me/+aIpqQbcHotplNzcy',
  instagramUrl: 'https://www.instagram.com/mobileplus_izza/',
  instagramUsername: '@mobileplus_izza',
  address: 'IzzaShowroom',
  googleMapsUrl: 'https://maps.app.goo.gl/FtAkeCJAVcU43v4T7',
  // Exact embed still needs verification. Paste the src from Share → Embed a map, never the short link.
  googleMapsEmbedUrl: '',
  businessHours: 'Ish vaqti: 08:00–19:00'
};

const icons = {
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  telegram: '<path d="m21 3-4 18-6-5-4 3 1-7L21 3 3 10l5 2 9-6-6 10"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/>',
  phone: '<path d="m8 3 3 5-3 3a14 14 0 0 0 5 5l3-3 5 3c0 3-2 5-5 5C9 20 4 15 3 8c0-3 2-5 5-5Z"/>'
};
document.querySelectorAll('[data-icon]').forEach(element => {
  element.setAttribute('aria-hidden', 'true');
  element.innerHTML = `<svg viewBox="0 0 24 24">${icons[element.dataset.icon] || ''}</svg>`;
});
const setText = (selector, value) => { if (value) document.querySelectorAll(selector).forEach(el => { el.textContent = value; }); };
setText('[data-name]', STORE_CONFIG.name);
setText('[data-instagram-username]', STORE_CONFIG.instagramUsername);
setText('[data-description]', STORE_CONFIG.description);
setText('[data-address]', STORE_CONFIG.address);
setText('[data-hours]', STORE_CONFIG.businessHours);
setText('[data-year]', String(new Date().getFullYear()));
document.title = `${STORE_CONFIG.name} — Telefoningiz uchun eng yaxshisi`;
document.querySelector('meta[name="description"]').content = STORE_CONFIG.description;
// Accept only HTTPS URLs; never insert configuration values as HTML.
function safeUrl(value) {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
for (const [key, value] of Object.entries({ telegram: STORE_CONFIG.telegramUrl, instagram: STORE_CONFIG.instagramUrl })) {
  const url = safeUrl(value);
  document.querySelectorAll(`[data-link="${key}"]`).forEach(link => {
    if (url) {
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    } else if (!link.hasAttribute('href')) {
      link.setAttribute('aria-disabled', 'true');
    }
  });
  if (url) setText(`[data-status="${key}"]`, key === 'telegram' ? 'Kanalga o‘tish ↗' : 'Sahifaga o‘tish ↗');
}
const mapUrl = safeUrl(STORE_CONFIG.googleMapsUrl);
document.querySelectorAll('[data-map]').forEach(mapLink => {
  if (mapUrl) {
    mapLink.href = mapUrl;
    mapLink.target = '_blank';
    mapLink.rel = 'noopener noreferrer';
  } else {
    mapLink.removeAttribute('href');
    mapLink.setAttribute('aria-disabled', 'true');
    mapLink.setAttribute('aria-label', 'Xarita havolasi tez orada qo‘shiladi');
  }
});
// Keep the placeholder until a verified Google Maps embed is configured.
const embedUrl = safeUrl(STORE_CONFIG.googleMapsEmbedUrl);
if (embedUrl) {
  const parsed = new URL(embedUrl);
  if (['www.google.com', 'maps.google.com'].includes(parsed.hostname) &&
      /^\/maps\/embed(?:\/|$)/.test(parsed.pathname)) {
    const frame = document.createElement('iframe');
    frame.title = `${STORE_CONFIG.address || STORE_CONFIG.name} — Google Maps xaritasi`;
    frame.src = embedUrl;
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    frame.className = 'map-frame';
    const panel = document.querySelector('.map-art');
    panel.replaceChildren(frame);
    panel.classList.remove('map-unavailable');
    panel.classList.add('has-map');
  }
}
const phoneList = document.querySelector('[data-phones]');
phoneList.replaceChildren();
(STORE_CONFIG.phones.length ? STORE_CONFIG.phones : ['']).forEach((value, index) => {
  const phone = (value || '').trim();
  const valid = /^\+?[\d\s().-]{7,25}$/.test(phone);
  const el = document.createElement(valid ? 'a' : 'span');
  el.className = 'contact-value';
  el.textContent = valid ? phone : `${index + 1}-raqam tez orada qo‘shiladi`;
  if (valid) el.href = `tel:${phone.replace(/[^+\d]/g, '')}`;
  phoneList.append(el);
});
document.documentElement.classList.add('js-nav');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menyuni ochish');
  navigation.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
}

// Inline vectors keep directional icons consistent across system fonts.
document.querySelectorAll('span[aria-hidden="true"], .card-arrow, .contact-banner > a, .value-icon, .footer-bottom .red').forEach(element => {
  const symbol = element.textContent.trim();
  if (symbol === '↗' || symbol === '↓') {
    element.innerHTML = `<svg class="direction-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="${symbol === '↗' ? 'M6 18 18 6M6 6h12v12' : 'M12 4v16m-6-6 6 6 6-6'}"/></svg>`;
  }
});
