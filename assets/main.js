// /assets/main.js

// Footer year + init
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  initStepsSlider();
});

function initStepsSlider() {
  const track = document.getElementById('stepsTrack');
  if (!track) return; // slider not on this page

  const slides = Array.from(track.querySelectorAll('.slide'));
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');
  const total = slides.length;

  if (total <= 1) return;

  let index = 0;

  // Optional: light fade effect without layout shifts
  slides.forEach(s => {
    s.style.transition = 'opacity 300ms ease';
  });

  // Build dots
  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Slide ${i + 1}`);
      b.addEventListener('click', () => { go(i); });
      dotsWrap.appendChild(b);
    });
  }

  function updateDots() {
    if (!dotsWrap) return;
    [...dotsWrap.children].forEach((b, i) => b.classList.toggle('active', i === index));
  }

  function render() {
    slides.forEach((s, i) => {
      const active = i === index;
      s.style.opacity = active ? '1' : '0';
      s.style.pointerEvents = active ? 'auto' : 'none';
      // Keep layout stable: show only the active slide
      s.style.display = active ? 'grid' : 'none';
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    updateDots();
  }

  function go(i) {
    index = (i + total) % total;
    render();
  }

  function nextSlide() { go(index + 1); }
  function prevSlide() { go(index - 1); }

  // Buttons (click-only)
  if (prev) prev.addEventListener('click', prevSlide);
  if (next) next.addEventListener('click', nextSlide);

  // Init
  go(0);
}
