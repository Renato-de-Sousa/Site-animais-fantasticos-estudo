import debounce from './debounce.js';

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.ativo = 'ativo';
    this.changeEvent = new Event('changeEvent');
  }

  trasition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(dist) {
    this.dist.movePosition = dist;
    this.slide.style.transform = `translate3d(${dist}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let initeve;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      initeve = 'mousemove';
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      initeve = 'touchmove';
    }

    this.wrapper.addEventListener(initeve, this.onMove);
    this.trasition(false);
  }

  onMove(event) {
    const pointer = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointer);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const removeType = (event.type === 'mouseup') ? 'mousemove' : 'touchstart';
    this.dist.finalPosition = this.dist.movePosition;

    this.wrapper.removeEventListener(removeType, this.onMove);
    this.trasition(true);
    this.changeSlideonend();
  }

  changeSlideonend() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNext();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrev();
    } else {
      this.changeSlide(this.index.actual);
    }
  }

  addEventWrapper() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  // slides config

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    this.slideCfg = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,
      };
    });
  }

  slideIndexNav(index) {
    const last = this.slideCfg.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      actual: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const active = this.slideCfg[index];
    this.moveSlide(active.position);
    this.slideIndexNav(index);
    this.dist.finalPosition = active.position;
    this.changeClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeClass() {
    this.slideCfg.forEach((item) => {
      item.element.classList.remove(this.ativo);
    });
    this.slideCfg[this.index.actual].element.classList.add(this.ativo);
  }

  activePrev() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNext() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.index.actual);
    }, 1000);
  }

  addEventResize() {
    window.addEventListener('resize', this.onResize);
  }

  binds() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.activeNext = this.activeNext.bind(this);
    this.activePrev = this.activePrev.bind(this);
  }

  init() {
    this.binds();
    this.trasition(true);
    this.addEventWrapper();
    this.slideConfig();
    this.addEventResize();
    this.changeSlide(0);
    return this;
  }
}

export default class slideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindoncontroll();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addEventarrow();
  }

  addEventarrow() {
    this.prevElement.addEventListener('click', this.activePrev);
    this.nextElement.addEventListener('click', this.activeNext);
  }

  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';
    this.slideCfg.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (Event) => {
      Event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) => item.classList.remove(this.ativo));
    this.controlArray[this.index.actual].classList.add(this.ativo);
  }

  addControl(custom) {
    this.control = document.querySelector(custom) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.activeControlItem();
  }

  bindoncontroll() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
