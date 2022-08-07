export default class ScrollSuave {
  constructor(link, options) {
    this.linkInternos = document.querySelectorAll(link);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }
    this.initSo = this.initSo.bind(this);
  }

  initSo(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const endereco = document.querySelector(href);

    endereco.scrollIntoView(this.options);
  }

  addEventlink() {
    this.linkInternos.forEach((item) => {
      item.addEventListener('click', this.initSo);
    });
  }

  init() {
    if (this.linkInternos.length) {
      this.addEventlink();
    }
    return this;
  }
}
