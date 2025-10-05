document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Custom cursor ---------- */
  const dot = document.getElementById('cursor-dot');
  if (dot) {
    const hasFinePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (!hasFinePointer) dot.style.display = 'none';
    else {
      let targetX = 0, targetY = 0, x = 0, y = 0;
      const ease = 0.2;
      const tick = () => {
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        dot.style.setProperty('--x', x.toFixed(2));
        dot.style.setProperty('--y', y.toFixed(2));
        requestAnimationFrame(tick);
      };
      tick();
      addEventListener('pointermove', e => { targetX = e.clientX; targetY = e.clientY; dot.classList.add('visible'); });
      addEventListener('pointerleave', () => dot.classList.remove('visible'));
      let t; addEventListener('pointerdown', () => { dot.classList.add('shrink'); clearTimeout(t); });
      addEventListener('pointerup', () => { t = setTimeout(() => dot.classList.remove('shrink'), 120); });
    }
  }

  /* ---------- Binary hover name ---------- */
  const nameEl = document.getElementById('hero-name');
  if (nameEl) {
    const text = nameEl.textContent;
    nameEl.textContent = ''; // clear
    const frag = document.createDocumentFragment();

    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'char';
      span.dataset.char = ch;
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.addEventListener('pointerenter', () => {
        if (ch === ' ') return;
        span.textContent = Math.random() < 0.5 ? '0' : '1';
        span.style.color = 'var(--accent)';
        span.style.transform = 'translateY(-2px)';
      });
      span.addEventListener('pointerleave', () => {
        span.textContent = ch === ' ' ? '\u00A0' : span.dataset.char;
        span.style.color = '';
        span.style.transform = '';
      });
      frag.appendChild(span);
    });
    nameEl.appendChild(frag);
  }

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Active left nav on scroll ---------- */
  const navLinks = [...document.querySelectorAll('.side-nav a')];
  const sections = [...document.querySelectorAll('section')];
  const setActive = () => {
    const mid = innerHeight * 0.4;
    let current = sections[0].id;
    for (const s of sections) {
      const r = s.getBoundingClientRect();
      if (r.top <= mid) current = s.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  };
  setActive();
  addEventListener('scroll', setActive, { passive: true });
});
