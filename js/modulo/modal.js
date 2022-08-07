export default function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const container = document.querySelector('[data-modal="container"]');

  function toggle(event) {
    event.preventDefault();
    container.classList.toggle('ativo');
  }

  function cliqueFora(event) {
    if (event.target === this) {
      toggle(event);
    }
  }

  if (abrirModal && fecharModal && container) {
    abrirModal.addEventListener('click', toggle);
    fecharModal.addEventListener('click', toggle);
    container.addEventListener('click', cliqueFora);
  }
}
