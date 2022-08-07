import outSideClick from './outSideClick.js';

export default function initMenu() {
  const menu = document.querySelector('[data-menu="button"]');
  const list = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    menu.classList.add('active');
    list.classList.add('active');

    outSideClick(list, eventos, () => {
      menu.classList.remove('active');
      list.classList.remove('active');
    });
  }

  if (menu) {
    eventos.forEach((evento) => {
      menu.addEventListener(evento, openMenu);
    });
  }
}
