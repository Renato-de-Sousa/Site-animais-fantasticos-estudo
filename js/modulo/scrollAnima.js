export default class ScrollAnima {
  constructor(sections) {
    this.containers = document.querySelectorAll(sections);
    this.metadeDaTela = window.innerHeight * 0.7;
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.containers.forEach((item) => {
      const distaciaEle = item.getBoundingClientRect().top;
      const test = distaciaEle - this.metadeDaTela < 0;
      if (test) {
        item.classList.add('ativar');
      } else if (item.classList.contains('ativar')) {
        item.classList.remove('ativar');
      }
    });
  }

  init() {
    this.animate();
    window.addEventListener('scroll', this.animate);
  }
}
