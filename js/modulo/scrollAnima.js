export default class ScrollAnima {
  constructor(sections) {
    this.containers = document.querySelectorAll(sections);
    this.metadeDaTela = window.innerHeight * 0.7;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.containers].map((section) => {
      const offSet = section.offSetTop;
      return {
        element: section,
        offSet: Math.floor(offSet - this.metadeDaTela),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offSet) {
        item.element.classList.add('ativar');
      } else if (item.element.classList.contains('ativar')) {
        item.element.classList.remove('ativar');
      }
    });
  }

  init() {
    if (this.containers.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
