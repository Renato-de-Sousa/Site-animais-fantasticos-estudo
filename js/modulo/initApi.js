import AnimaNumeros from './animaNumero.js';

export default function initAnimaisApi() {
  function create(animal) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.numeros}</span>`;
    div.classList.add('numero-animal');
    return div;
  }

  async function fetchApi(url) {
    try {
      const response = await fetch(url);
      const obj = await response.json();
      const gridn = document.querySelector('.numero-grid');

      obj.forEach((animal) => {
        const divAnimal = create(animal);
        gridn.appendChild(divAnimal);
      });
      const animaNumero = new AnimaNumeros('.numero-grid .numero-animal span', '.numeros', 'ativar');
      animaNumero.init();
    } catch (err) {
      console.log(err);
    }
  }

  fetchApi('../../animaisApi.json');
}
