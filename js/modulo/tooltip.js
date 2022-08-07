export default function initTool() {
  const tooltip = document.querySelectorAll('[data-tollTip]');

  function criarToll(element) {
    const tipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tipBox.classList.add('tollTip');
    tipBox.innerText = text;
    document.body.appendChild(tipBox);
    return tipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tipBox.style.top = `${event.pageY + 20}px`;
      this.tipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onmouseleave = {

    handleEvent() {
      this.tipBox.remove();
      this.element.removeEventListener('mouseleave', onmouseleave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function onmouse() {
    const tipBox = criarToll(this);
    onMouseMove.tipBox = tipBox;
    this.addEventListener('mousemove', onMouseMove);

    onmouseleave.tipBox = tipBox;
    onmouseleave.element = this;
    this.addEventListener('mouseleave', onmouseleave);
  }

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onmouse);
  });
}
