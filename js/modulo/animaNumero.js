export default class AnimaNumeros {
  constructor(numeros, observetarget, observer) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observetarget);
    this.observerClass = observer;
    this.mutacao = this.mutacao.bind(this);
  }

  static incrementar(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;

      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  itAnimaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementar(numero);
    });
  }

  mutacao(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observe.disconnect();
      this.itAnimaNumeros();
    }
  }

  addMutation() {
    this.observe = new MutationObserver(this.mutacao);
    this.observe.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutation();
    }
    return this;
  }
}
