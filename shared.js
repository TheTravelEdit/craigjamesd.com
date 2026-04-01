// Shared JS for all CJ Davitt pages

// ── MOBILE DRAWER ──
const drawer = document.getElementById('mobDrawer');
const hamburger = document.getElementById('hamburger');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('mobClose').addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
}
function closeDrawer() {
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// ── LIGHTBOX ──
const lb = document.getElementById('lightbox');
if (lb) {
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLightbox();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
function openLightbox(src, caption) {
  if (!lb) return;
  lb.querySelector('img').src = src;
  lb.querySelector('.lightbox-cap').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}
