const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  menuButton.textContent = open ? '×' : '☰';
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'メニューを開く');
  if (menuButton) menuButton.textContent = '☰';
}));
const photo = document.getElementById('profilePhoto');
const fallback = document.getElementById('photoPlaceholder');
if (photo) {
  photo.addEventListener('load', () => {photo.hidden = false; if(fallback) fallback.hidden = true;});
  photo.addEventListener('error', () => {photo.hidden = true; if(fallback) fallback.hidden = false;});
  if (photo.complete && photo.naturalWidth > 0) {photo.hidden = false; if(fallback) fallback.hidden = true;}
}
const year = document.getElementById('year'); if(year) year.textContent = String(new Date().getFullYear());
