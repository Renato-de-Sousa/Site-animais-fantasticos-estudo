import outSideClick from './outSideClick.js';

export default class DropdownMenu {
  constructor(dropdowns, events) {
    this.dropDown = document.querySelectorAll(dropdowns);

    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeclass = 'active';
    this.activeDrop = this.activeDrop.bind(this);
  }

  activeDrop(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeclass);

    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeclass);
    });
  }

  addDropEvent() {
    this.dropDown.forEach((menu) => {
      this.events.forEach((item) => {
        menu.addEventListener(item, this.activeDrop);
      });
    });
  }

  init() {
    if (this.dropDown.length) {
      this.addDropEvent();
    }
    return this;
  }
}
