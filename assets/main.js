// /assets/main.js

// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  initStepsSlider();
});

function initStepsSlider() {
  const track = document.getElementById('stepsTrack');
  if (!track) return; // slider not on this page

  const container = track.closest('.steps') || track.parentElement;
  const slides = Array.from(track.querySelectorAll('.slide'));
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');
  const total = slides.length;

  if (total <= 1) return;

  // Ensure smooth animation even if CSS is missing it
  track.style.willChange = 'transform';
  if (!track.style.transition) {
    track.style.transition = 'transform 450ms ease';
  }

  let index = 0;
  let timer = null;
  let isPaused = false;
  const AUTO_MS = 4500;
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Build dots
  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Slide ${i + 1}`);
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
  }

  function updateDots() {
    if (!dotsWrap) return;
    [...dotsWrap.children].forEach((b, i) => b.classList.toggle('active', i === index));
  }

  function go(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function nextSlide() { go(index + 1); }
  function prevSlide() { go(index - 1); }

  // Autoplay controls
  function start() {
    if (REDUCED_MOTION || isPaused) return;
    stop();
    timer = setInterval(nextSlide, AUTO_MS);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function pause() { isPaused = true; stop(); }
  function resume() { isPaused = false; start(); }
  function restart() { stop(); start(); }

  // Buttons
  if (prev) prev.addEventListener('click', () => { prevSlide(); restart(); });
  if (next) next.addEventListener('click', () => { nextSlide(); restart(); });

  // Pause on hover/focus/visibility
  [container, track].forEach(el => {
    if (!el) return;
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  // Keyboard
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { prevSlide(); restart(); }
    if (e.key === 'ArrowRight') { nextSlide(); restart(); }
    if (e.key === ' ') { e.preventDefault(); isPaused ? resume() : pause(); }
  });

  // Swipe (pointer events)
  let startX = null, lastX = 0, dragging = false;
  track.addEventListener('pointerdown', e => { startX = e.clientX; dragging = true; pause(); });
  window.addEventListener('pointermove', e => {
    if (!dragging || startX === null) return;
    lastX = e.clientX;
  });
  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    const dx = lastX - startX;
    if (dx > 50) prevSlide();
    else if (dx < -50) nextSlide();
    dragging = false; startX = null; resume();
  });

  // Init
  go(0);
  start();
}
