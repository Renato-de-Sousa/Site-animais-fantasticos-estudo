export default class Tabnav {
  constructor(menu, content) {
    this.imgsNav = document.querySelectorAll(menu);
    this.section = document.querySelectorAll(content);
    this.active = 'ativo';
  }

  navActive(index) {
    this.section.forEach((item) => {
      item.classList.remove(this.active);
    });

    const direcao = this.section[index].dataset.anima;
    this.section[index].classList.add(this.active, direcao);
  }

  addEventTab() {
    this.imgsNav.forEach((item, index) => {
      item.addEventListener('click', () => this.navActive(index));
    });
  }

  init() {
    if ((this.section.length) && (this.imgsNav.length)) {
      this.addEventTab();
      this.navActive(0);
    }
  }
}
