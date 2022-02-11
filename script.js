import Countdown from "./contar.js";

const tempoParaNiver = new Countdown("07 May 2022 00:00:01 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaNiver.total[index]
  })
  
}

mostrarTempo()
setInterval(mostrarTempo, 1000);
