import outSideClick from './outSideClick.js';

export default class Menu {
  constructor(button, list, events) {
    this.menu = document.querySelector(button);
    this.list = document.querySelector(list);
    this.activeClass = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    this.menu.classList.add(this.activeClass);
    this.list.classList.add(this.activeClass);

    outSideClick(this.list, this.events, () => {
      this.menu.classList.remove(this.activeClass);
      this.list.classList.remove(this.activeClass);
    });
  }

  addMenuEvent() {
    this.events.forEach((evento) => {
      this.menu.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menu && this.list) {
      this.addMenuEvent();
    }
    return this;
  }
}
