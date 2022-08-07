export default class Acord {
  constructor(list) {
    this.dt = document.querySelectorAll(list);
    this.active = 'ativo';
  }

  appears(item) {
    item.classList.toggle(this.active);
    item.nextElementSibling.classList.toggle(this.active);
  }

  addEventAcord() {
    this.dt.forEach((item) => {
      item.addEventListener('click', () => this.appears(item));
    });
  }

  init() {
    if (this.dt.length) {
      this.appears(this.dt[0]);
      this.addEventAcord();
    }
  }
}
