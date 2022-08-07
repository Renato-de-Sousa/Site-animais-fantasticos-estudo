export default function initScroll() {
  const containers = document.querySelectorAll('[data-scroll="anima"]');
  const metadeDaTela = window.innerHeight * 0.7;

  function animate() {
    containers.forEach((item) => {
      const distaciaEle = item.getBoundingClientRect().top;
      const test = distaciaEle - metadeDaTela < 0;
      if (test) {
        item.classList.add('ativar');
      } else if (item.classList.contains('ativar')) {
        item.classList.remove('ativar');
      }
    });
  }

  if (containers.length) {
    animate();
    window.addEventListener('scroll', animate);
  }
}
