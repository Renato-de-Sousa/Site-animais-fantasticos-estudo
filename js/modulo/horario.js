export default class Funcionamento {
  constructor(funcionamento, classe) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = classe;
  }

  dados() {
    this.diasSemanas = this.funcionamento.dataset.semana.split(',').map(Number);
    this.Horas = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  horario() {
    this.dataAgora = new Date();
    this.dia = this.dataAgora.getDay();
    this.hora = this.dataAgora.getUTCHours() - 3;
  }

  aberto() {
    this.semanaAberto = this.diasSemanas.indexOf(this.dia) !== -1;
    this.horarioAberto = (this.hora >= this.Horas[0] && this.hora < this.Horas[1]);
    return this.semanaAberto && this.horarioAberto;
  }

  ativar() {
    if (this.aberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dados();
      this.horario();
      this.ativar();
    }
    return this;
  }
}
