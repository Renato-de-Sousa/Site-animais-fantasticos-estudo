export default function initBit() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((Object) => {
      const btcPlace = document.querySelector('.btc-preco');
      btcPlace.innerText = (100 / Object.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(erro);
    });
}
