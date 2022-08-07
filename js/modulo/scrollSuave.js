export default function init() {
  const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function initSo(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const endereco = document.querySelector(href);

    endereco.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  if (linkInternos.length) {
    linkInternos.forEach((item) => {
      item.addEventListener('click', initSo);
    });
  }
}
