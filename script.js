const audio = document.getElementById("happy-birthday-audio");
const button = document.getElementById("start-button");
const gift = document.getElementById("gift");
const mainContent = document.getElementById("main-content");

// Play music on first interaction
window.addEventListener("click", () => {
  audio.play().catch(() => {
    console.warn("Autoplay blocked. Tap again to play sound.");
  });
}, { once: true });

// Handle button click
button.addEventListener("click", function () {
  // Hide cake + button
  mainContent.style.display = "none";

  // Show gift
  gift.style.display = "flex";

  // Launch confetti
  launchConfetti();
});

function launchConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
