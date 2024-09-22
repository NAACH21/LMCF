// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Richy Peña", time: 4 },
  { text: "Chino & Nacho", time: 5.5 },
  { text: "Esta canción nació de un pensamiento", time: 8 },
  { text: "Es así", time: 10.5 },
  { text: "Y yo solo pienso en ti", time: 11.5 },
  { text: "Mi niña bonita", time: 12.8 },
  { text: "mi amor", time: 14 },
  { text: "Oye", time: 15},
  { text: "Tú reconoces un hit cuando lo oyes (woh)", time: 15.8 },
  { text: "Lo que siento", time: 17.5 },
  { text: " por ti", time: 18.5 },
  { text: "Es ternura y pasión", time: 19.5 },
  { text: "Tú me has hecho sentir", time: 21.5 },
  { text: "Que hay en mi corazón", time: 23.5 },
  { text: "Tanto amor", time: 25.5 },
  { text: "Tanto amor", time: 29.5 },
  { text: "Yo nací para ti", time: 33.5 },
  { text: "Y tú también para mí", time: 35.5 },
  { text: "Y ahora sé que morir", time: 37.5 },
  { text: "Es tratar de vivir sin tu amor", time: 40.5 },
  { text: "Sin tu amor", time: 41.5 },

  { text: "Mi niña bonita, mi dulce princesa", time: 48.5 },
  { text: "Me siento en las nubes cuando tú me besas", time: 52.5 },
  { text: "Y siento que vuelo más alto que el cielo", time: 56.5 },
  { text: "Si tengo de cerca el olor de tu pelo", time: 48 },
  { text: "Mi niña bonita, brillante lucero", time: 50 },
  { text: "Te queda pequeña la frase: 'te quiero'", time: 52 },
  { text: "Por eso mis labios te dicen: 'te amo'", time: 54 },
  { text: "Cuando estamos juntos más nos enamoramos", time: 56 },
  { text: "Aquí hay amor", time: 58 },
  { text: "Aquí hay amor", time: 60 },
  { text: "Aquí hay amor, amor", time: 62 },
  { text: "Aquí hay amor, amor", time: 64 },
  { text: "Aquí hay, hay, hay, hay, hay amor", time: 66 },
  { text: "Este amor que como espuma sube (woh)", time: 68 },
  { text: "Que cuando te tomo de la mano por el parque", time: 70 },
  { text: "Camino en las nubes", time: 72 },
  { text: "Parece mentira que ya no recuerdo nada", time: 74 },
  { text: "Cuando solo estuve", time: 76 },
  { text: "Nada se podrá comparar", time: 78 },
  { text: "Con algo tan especial", time: 80 },
  { text: "Nada se compara con lo nuestro mi vida", time: 82 },
  { text: "Le agradezco al tiempo", time: 84 },
  { text: "Que me ha demostrado que las cosas buenas llegan", time: 86 },
  { text: "En cualquier momento", time: 88 },
  { text: "Yo no imaginaba que conocería", time: 90 },
  { text: "Algún día este sentimiento", time: 92 },
  { text: "Un amor puro y natural (yeah)", time: 94 },
  { text: "Digno de admirar (digno de admirar, princesa)", time: 96 },
  { text: "Un amor de fantasía, lleno de romance y alegría", time: 98 },
  { text: "De bellos detalles cada día", time: 100 },
  { text: "Nena, quién lo diría", time: 102 },
  { text: "Que de ti yo me enamoraría", time: 104 },
  { text: "Y que sin tu amor no viviría", time: 106 },
  { text: "Cómo sabría que esto pasaría", time: 108 },
  { text: "Que ibas a ser mía", time: 110 },
  { text: "Y que yo querría (amarte siempre)", time: 112 },
  { text: "Amarte por siempre, mi niña bonita (mi niña bonita)", time: 114 },
  { text: "Mi niña bonita, mi dulce princesa", time: 116 },
  { text: "Me siento en las nubes cuando tú me besas", time: 118 },
  { text: "Y siento que vuelo más alto que el cielo", time: 120 },
  { text: "Si tengo de cerca el olor de tu pelo", time: 122 },
  { text: "Mi niña bonita, brillante lucero", time: 124 },
  { text: "Te queda pequeña la frase: 'te quiero'", time: 126 },
  { text: "Por eso mis labios te dicen: 'te amo'", time: 128 },
  { text: "Cuando estamos juntos más nos enamoramos", time: 130 },
  { text: "Aquí hay amor (mi niña bonita)", time: 132 },
  { text: "Aquí hay amor (mi niña bonita)", time: 134 },
  { text: "Aquí hay amor, amor", time: 136 },
  { text: "Aquí hay amor, amor", time: 138 },
  { text: "Aquí hay, hay, hay, hay, hay amor", time: 140 },
  { text: "Desde este momento", time: 142 },
  { text: "No podrás sacar esta canción de tu cabeza", time: 144 },
  { text: "Chino & Nacho", time: 146 },
  { text: "Mi niña bonita", time: 148 },
  { text: "Richy Peña", time: 150 },
  { text: "Tú, y únicamente tú", time: 152 },
  { text: "¡Mi niña bonita!", time: 154 },
  { text: "Más na", time: 156 },
  { text: "Esto es un hit mundial", time: 158 },
  { text: "Más nada te digo", time: 160 },
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