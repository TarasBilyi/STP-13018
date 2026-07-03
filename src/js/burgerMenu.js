const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navLinks = document.querySelectorAll('[data-menu-link]');
const body = document.querySelector('body');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
  body.classList.toggle('no-scroll');
});

closeBtnEl.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

function closeMenu() {
  burgerMenuEl.dataset.visible = 'close';
  body.classList.remove('no-scroll');
}
