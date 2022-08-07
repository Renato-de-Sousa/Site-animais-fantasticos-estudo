export default function tabnav() {
  const imgsNav = document.querySelectorAll('[data-tab="menu"] li');
  const section = document.querySelectorAll('[data-tab="content"] section');

  function navActive(index) {
    section.forEach((item) => {
      item.classList.remove('ativo');
    });

    const direcao = section[index].dataset.anima;
    section[index].classList.add('ativo', direcao);
  }

  if ((section.length) && (imgsNav.length)) {
    section[0].classList.add('ativo');

    imgsNav.forEach((item, index) => {
      item.addEventListener('click', () => {
        navActive(index);
      });
    });
  }
}
