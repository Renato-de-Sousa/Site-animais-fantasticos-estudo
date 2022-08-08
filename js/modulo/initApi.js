import AnimaNumeros from './animaNumero.js';

export default function fetchAnimais(url, target) {
  function create(animal) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.numeros}</span>`;
    div.classList.add('numero-animal');
    return div;
  }

  const gridn = document.querySelector(target);
  function preencher(animal) {
    const divAnimal = create(animal);
    gridn.appendChild(divAnimal);
  }

  function animaAnimais() {
    const animaNumero = new AnimaNumeros('.numero-grid .numero-animal span', '.numeros', 'ativar');
    animaNumero.init();
  }
  async function criarAnimais() {
    try {
      const response = await fetch(url);
      const obj = await response.json();

      obj.forEach((animal) => { preencher(animal); });
      animaAnimais();
    } catch (err) {
      console.log(err);
    }
  }
  return criarAnimais();
}
