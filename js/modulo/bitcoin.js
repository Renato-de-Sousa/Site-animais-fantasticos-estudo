export default function bitcoinF(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((Object) => {
      const btcPlace = document.querySelector(target);
      btcPlace.innerText = (100 / Object.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(erro);
    });
}
