export default function initData() {
  const funcionamento = document.querySelector('[data-semana]');

  const diasSemanas = funcionamento.dataset.semana.split(',').map(Number);
  const Horas = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const dia = dataAgora.getDay();
  const hora = dataAgora.getHours();

  const semanaAberto = diasSemanas.indexOf(dia) !== -1;
  const horarioAberto = (hora >= Horas[0] && hora < Horas[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
