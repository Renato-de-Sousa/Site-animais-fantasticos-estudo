export default class Modal {
  constructor(abrirModal, fecharModal, container) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.container = document.querySelector(container);
    this.eventToggle = this.eventToggle.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  toggle() {
    this.container.classList.toggle('ativo');
  }

  eventToggle(event) {
    event.preventDefault();
    this.toggle();
  }

  cliqueFora(event) {
    if (event.target === this.container) {
      this.toggle(event);
    }
  }

  addModalEvent() {
    this.abrirModal.addEventListener('click', this.eventToggle);
    this.fecharModal.addEventListener('click', this.eventToggle);
    this.container.addEventListener('click', this.cliqueFora);
  }

  init() {
    if (this.abrirModal && this.fecharModal && this.container) {
      this.addModalEvent();
    }
    return this;
  }
}
