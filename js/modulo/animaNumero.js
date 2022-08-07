export default function animaNumeros() {
  function itAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numeros]');
    numeros.forEach((numero) => {
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
    });
  }

  let observe;
  function mutacao(mutation) {
    if (mutation[0].target.classList.contains('ativar')) {
      observe.disconnect();
      itAnimaNumeros();
    }
  }

  observe = new MutationObserver(mutacao);
  const observeTarget = document.querySelector('.numeros');

  observe.observe(observeTarget, { attributes: true });
}
