export default class ToolTip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onmouse = this.onmouse.bind(this);
    this.onmouseleave = this.onmouseleave.bind(this);
  }

  criarToll(element) {
    const tipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tipBox.classList.add('tollTip');
    tipBox.innerText = text;
    document.body.appendChild(tipBox);
    // eslint-disable-next-line no-return-assign
    return this.tipBox = tipBox;
  }

  onMouseMove(event) {
    this.tipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onmouseleave({currentTarget}) {
    this.tipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onmouseleave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  onmouse({currentTarget}) {
    this.criarToll(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onmouseleave);
  }

  addTooltipEvents() {
    this.tooltip.forEach((item) => {
      item.addEventListener('mouseover', this.onmouse);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvents();
    }
    return this;
  }
}
