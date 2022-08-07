export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const out = 'data-outside';

  function handleOut(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(out, '');

      events.forEach((userE) => {
        html.removeEventListener(userE, handleOut);
      });

      callback();
    }
  }

  if (!element.hasAttribute(out)) {
    events.forEach((userE) => {
      setTimeout(() => { html.addEventListener(userE, handleOut); });
    });

    element.setAttribute(out, '');
  }
}
