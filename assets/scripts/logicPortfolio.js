document.addEventListener('DOMContentLoaded', () => {
  const sonido = document.getElementById('musicaFondo');
  const botonMute = document.getElementById('botonMute');
  const imagenMute = document.getElementById('imagenMute');
  const imagenUnmute = document.getElementById('imagenUnmute');

  botonMute.addEventListener('click', function () {
    if (sonido.muted) {
      sonido.muted = false;
      imagenMute.style.display = 'block';
      imagenUnmute.style.display = 'none';
      botonMute.setAttribute('aria-label', 'Unmute');
    } else {
      sonido.muted = true;
      imagenMute.style.display = 'none';
      imagenUnmute.style.display = 'block';
      botonMute.setAttribute('aria-label', 'Mute');
    }
  });
});
