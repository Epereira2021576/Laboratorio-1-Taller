const sonido = document.getElementById('musicaFondo');
const botonMute = document.getElementById('botonMute');
const imagenMute = document.getElementById('imagenMute');
const imagenUnmute = document.getElementById('imagenUnmute');
const textoMute = document.getElementById('textoMute');

botonMute.addEventListener('click', function () {
  if (sonido.muted) {
    sonido.muted = false;
    imagenMute.style.display = 'block';
    imagenUnmute.style.display = 'none';
    textoMute.textContent = 'Mute';
    botonMute.setAttribute('aria-label', 'Mute');
  } else {
    sonido.muted = true;
    imagenMute.style.display = 'none';
    imagenUnmute.style.display = 'block';
    textoMute.textContent = 'Unmute';
    botonMute.setAttribute('aria-label', 'Mute');
  }
});
