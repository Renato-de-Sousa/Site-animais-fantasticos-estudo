export default function acord() {
  const dt = document.querySelectorAll('[data-anima="acordion"] dt');

  function appears() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (dt.length) {
    dt[0].classList.add('ativo');
    dt[0].nextElementSibling.classList.add('ativo');

    dt.forEach((item) => {
      item.addEventListener('click', appears);
    });
  }
}
