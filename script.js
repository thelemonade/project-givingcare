const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
const search = document.getElementById('guide-search');
if (search) {
  const cards = [...document.querySelectorAll('[data-search]')];
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach(card => {
      card.classList.toggle('hidden', q && !card.dataset.search.toLowerCase().includes(q));
    });
  });
}
