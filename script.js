document.addEventListener('DOMContentLoaded', () => {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;

  // Only run on devices with a fine, hoverable pointer (mouse/trackpad)
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasFinePointer) {
    dot.style.display = 'none';
    return;
  }

  let targetX = 0, targetY = 0;
  let x = 0, y = 0;
  const ease = 0.2; // lower = more floaty

  // Follow mouse with easing
  function tick() {
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    dot.style.setProperty('--x', x.toFixed(2));
    dot.style.setProperty('--y', y.toFixed(2));
    requestAnimationFrame(tick);
  }
  tick();

  // Show/hide + track pointer
  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.classList.add('visible');
  });

  window.addEventListener('pointerleave', () => {
    dot.classList.remove('visible');
  });

  // Slight shrink on click, then back
  let unshrinkTimer;
  window.addEventListener('pointerdown', () => {
    dot.classList.add('shrink');
    clearTimeout(unshrinkTimer);
  });
  window.addEventListener('pointerup', () => {
    unshrinkTimer = setTimeout(() => dot.classList.remove('shrink'), 120);
  });
});
