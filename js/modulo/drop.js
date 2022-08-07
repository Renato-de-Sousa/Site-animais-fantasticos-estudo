import outSideClick from './outSideClick.js';

export default function initDrop() {
  const dropDown = document.querySelectorAll('[data-dropdown]');

  function handleEvent(event) {
    event.preventDefault();
    this.classList.add('active');

    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropDown.forEach((menu) => {
    ['touchstart', 'click'].forEach((item) => {
      menu.addEventListener(item, handleEvent);
    });
  });
}
