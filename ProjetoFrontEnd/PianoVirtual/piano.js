const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const notas = {
  C: 261.63,
  "D#": 311.13,
  "C#": 277.18,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  "F#": 369.99,
  G: 392.0,
  "G#": 415.3,
  A: 440.0,
  "A#": 466.16,
  B: 493.88,
};

function tocarNota(freq) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.frequency.value = freq;  
  oscillator.type = "sine";

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();

  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 1,
  );

  oscillator.stop(audioContext.currentTime + 1);
}

document.querySelectorAll(".tecla").forEach((tecla) => {
  tecla.addEventListener("click", () => {
    const nota = tecla.dataset.note;

    tocarNota(notas[nota]);

    tecla.classList.add("ativa");

    setTimeout(() => {
      tecla.classList.remove("ativa");
    }, 150);
  });
});
