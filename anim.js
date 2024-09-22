// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te vas moviendo y cambias de color", time: 25 },
  { text: "Marqué tu nombre en la corteza de mi ser", time: 32 },
  { text: "Peleando con demonios otra vez", time: 38 },
  { text: "Siempre me atacan cuando más cansado estoy", time: 45 },
  { text: "Y es cuando tú me miras desde allá", time: 51 },
  { text: "Sonriéndome me regresas hasta ti", time: 57 },
  { text: "Conoces bien mi habilidad de volar ", time: 63 },
  { text: "De divagar entre los mundos", time:69.5},
  { text: "", time:75},
  { text: "Te vas borrando con la multitud", time: 89 },
  { text: "Puedo ver los puntitos contra el cielo", time: 96 },
  { text: "Y cuando aprieto los ojos veo tu voz", time: 102 },
  { text: "Fantástica, Geométrica, Multicolor", time: 108.5 },
  { text: "Y es cuando tú me miras desde allá", time: 115 },
  { text: "Sonriéndome me regresas hasta ti", time: 120.5 },
  { text: "Y conoces bien mi habilidad de volar ", time: 127 },
  { text: "De divagar", time:134},
  { text: "Me haces volar, me haces soñar", time: 136.5 },
  { text: "Me haces senitr tranquilo en la oscuridad", time: 143 },
  { text: "Me haces sentir, me haces llorar", time: 149 },
  { text: "Me haces setir que ya no existe gravedad", time: 156 },
  { text: "Me haces reir, me haces cantar", time: 162 },
  { text: "Me haces pisar el suelo de la realidad", time: 169 },
  { text: "Y sentarnos frente a frente", time: 175.3 },
  { text: "Y encontrarnos", time: 182 },
  { text: "Me haces volar, me haces soñar", time: 185 },
  { text: "Me hacer sentir que hay esperanza una vez más", time: 191 },
  { text: "Y cuando me siento mal", time: 197 },
  { text: "O cuando pierdo el camino", time: 200 },
  { text: "Me haces pisar el suelo de la realidad", time: 204 },
  { text: "Y sentarnos frente a frente", time: 210.5 },
  { text: "Y encontrarnos ", time: 216.5 },
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

audio.play();

// Obtén una referencia al elemento de audio
var audio = document.getElementById('miAudio');

// Función para comprobar el estado de reproducción
function comprobarReproduccion() {
    if (!audio.paused) {
        console.log('La música se está reproduciendo');
        console.log('Tiempo actual: ' + audio.currentTime + ' segundos');
    } else {
        console.log('La música está pausada o no se ha iniciado');
    }
}

// Comprueba el estado cada segundo
setInterval(comprobarReproduccion, 1000);

// Intenta reproducir el audio cuando se carga la página
window.addEventListener('load', function() {
    audio.play().then(function() {
        console.log('Reproducción iniciada con éxito');
    }).catch(function(error) {
        console.log('No se pudo iniciar la reproducción automáticamente:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('miAudio');
    var reproduccionIniciada = false;

    document.addEventListener('click', function() {
        if (!reproduccionIniciada) {
            audio.play().then(function() {
                console.log('Reproducción iniciada con éxito');
                reproduccionIniciada = true;
            }).catch(function(error) {
                console.log('Error al reproducir:', error);
            });
        }
    });

    audio.addEventListener('play', function() {
        console.log('El audio está reproduciéndose');
    });

    audio.addEventListener('error', function(e) {
        console.log('Error en la carga del audio:', e);
    });
});