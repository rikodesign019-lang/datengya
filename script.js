const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
let isPlaying = false;

btn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "🔈 Hentikan Musik";
  } else {
    music.pause();
    btn.textContent = "🔊 Putar Musik";
  }
  isPlaying = !isPlaying;
});

// Animasi halus ketika scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.acara-card, .doa, footer');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
