function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Musik play otomatis setelah interaksi pertama (agar jalan di HP)
document.addEventListener("click", () => {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  }
});
