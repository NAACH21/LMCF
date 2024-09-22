// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te vas moviendo y cambias de color", time: 25 },
  { text: "Marqué tu nombre en la corteza de mi ser", time: 33 },
  { text: "Peleando con demonios otra vez", time: 39 },
  { text: "Siempre me atacan cuando más cansado estoy", time: 46 },
  { text: "Y es cuando tú me miras desde allá", time: 52 },
  { text: "Sonriéndome me regresas hasta ti", time: 59 },
  { text: "Conoces bien mi habilidad de volar ", time: 64 },
  { text: "De divagar entre los mundos", time:69},
  { text: "Te vas borrando con la multitud", time: 90 },
  { text: "Puedo ver los puntitos contra el cielo", time: 94 },
  { text: "Y cuando aprito los ojos veo tu voz", time: 102 },
  { text: "Fantástica, Geométrica, Multicolor", time: 109 },
  { text: "Y es cuando tú me miras desde allá", time: 115 },
  { text: "Sonriéndome me regresas hasta ti", time: 121 },
  { text: "Y conoces bien mi habilidad de volar ", time: 127 },
  { text: "De divagar", time:134},

  { text: "Me haces volar, me haces soñar", time: 137 },
  { text: "Me haces tranquilo en la oscuridad", time: 143 },
  { text: "Me haces sentir, me haces llorar", time: 149 },
  { text: "Me haces setir que ya no existe gravedad", time: 156 },
  { text: "Me haces reir, me haces cantar", time: 162 },
  { text: "Me haces pisar el suelo de la realidad", time: 168 },
  { text: "Y sentarnos frente a frente", time: 175 },
  { text: "Y encontrarnos", time: 181 },
  { text: "Me haces volar, me haces soñar", time: 184 },
  { text: "Me hacer sentir que hay esperanza una vez más", time: 191 },
  { text: "Y cuando me siento mal", time: 197 },
  { text: "O cuando pierdo el camino", time: 200 },
  { text: "Me haces pisar el suelo de la realidad", time: 204 },
  { text: "Y sentarnos frente a frente", time: 210 },
  { text: "Y encontrarnos ", time: 216 },
  { text: "NUEVAMENTE", time: 220 },
];

// Función para actualizar las letras basadas en el tiempo del audio
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  
  // Encontrar la letra que debería estar visible en el momento actual
  var currentLine = lyricsData.find(
    (line) => time >= line.time && (!lyricsData[lyricsData.indexOf(line) + 1] || time < lyricsData[lyricsData.indexOf(line) + 1].time)
  );

  // Si hay una línea de letra para el tiempo actual, mostrarla
  if (currentLine) {
    lyrics.style.opacity = 1; // Asegura que la letra esté visible
    lyrics.innerHTML = currentLine.text; // Actualiza el texto de la letra
  } else {
    lyrics.style.opacity = 0; // Oculta las letras cuando no hay línea que mostrar
    lyrics.innerHTML = "";
  }
}

// Actualiza las letras cada 200ms para lograr mejor precisión en la sincronización
setInterval(updateLyrics, 200);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar el título completamente
}

// Ocultar el título después de 216 segundos (216,000 ms)
setTimeout(ocultarTitulo, 216000);

// Limpiar letras al terminar la canción
audio.addEventListener("ended", function () {
  lyrics.innerHTML = ""; // Limpia las letras cuando la canción termina
  audio.currentTime = 0; // Opcional: reinicia el audio para reproducir de nuevo
});