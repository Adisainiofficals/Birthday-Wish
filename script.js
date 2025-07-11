const message = [
  "To someone whose voice 🎤",
  "can calm storms and light up hearts.💗",
  "Wishing you a day full of music,🎶",
  "magic, and peaceful vibes ✨🎂"
];

let i = 0;
let text = "";
let line = 0;

function typeWriter() {
  if (line < message.length) {
    if (i < message[line].length) {
      text += message[line].charAt(i);
      document.getElementById("typewriter").innerHTML = text;
      i++;
      setTimeout(typeWriter, 50);
    } else {
      text += "<br><br>";
      i = 0;
      line++;
      setTimeout(typeWriter, 500);
    }
  }
}

function goToPuzzle() {
  window.location.href = "puzzle.html";
}

window.onload = typeWriter;