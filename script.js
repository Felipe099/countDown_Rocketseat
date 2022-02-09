import Countdown from "./contar.js";

const tempoParaNiver = new Countdown("09 February 2022 16:30:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaNiver.total[index]
  })
  
}

mostrarTempo()
setInterval(mostrarTempo, 1000);
