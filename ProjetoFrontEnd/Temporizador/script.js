let tempoRestante = 0;
let temporizador;
let btnPlay = document.getElementById("btnPlay");
let btnParar = document.getElementById("btnParar");
let btnResetar = document.getElementById("btnResetar");
let btnTrinta =  document.getElementById("btnTrinta")
let btnCinco =  document.getElementById("btnCinco")
let btnUm =  document.getElementById("btnUm")

const tempo = document.getElementById("tempo");
const minutos = document.getElementById("minutos");

btnPlay.addEventListener(
"click", iniciar);
btnParar.addEventListener(
"click", parar);
btnResetar.addEventListener(
"click", resetar);
btnTrinta.addEventListener(
"click", () => somarTempo(30));
btnCinco.addEventListener(
"click", () => somarTempo(5*60));
btnUm.addEventListener(
"click", () => somarTempo(1*60));

function formatarTempo(s) {
    const data = new Date(s * 1000);
    return data.toISOString().slice(11,19);
}

function iniciar(){
  if (temporizador) return;
  if (!temporizador){
    const minutosDigitados = parseInt(minutos.value);
    tempoRestante = minutosDigitados * 60;
  }
  temporizador = setInterval(() =>{
    tempoRestante--;
    tempo.innerText = formatarTempo(tempoRestante);

    if (tempoRestante <= 0){
        parar();
     }
  },1000);
};

function parar(){
  clearInterval(temporizador);
  temporizador = null;
}

function resetar(){
  parar();
  tempoRestante = null;
  tempo.innerText = "00:00:00";
  minutos.value = "";
}

function somarTempo(segundos){
  tempoRestante += segundos;
  tempo.innerText = formatarTempo(tempoRestante);
}