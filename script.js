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
    nameEl.textContent = '';
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

  /* ---------- Projects unlock + tiles + modal ---------- */
  const projectsSection = document.getElementById('projects');
  const unlockBtn = document.getElementById('projects-unlock');
  const grid = document.getElementById('projects-grid');

  // Your 5 projects — replace titles/images/descriptions.
  const projects = [
    {
      title: 'fpga pong',
      desc: 'Hardware game on Cyclone V. Verilog + VGA timing + PS/2.',
      images: [
        'assets/projects/fpga-pong/1.jpg',
        'assets/projects/fpga-pong/2.jpg',
        'assets/projects/fpga-pong/3.jpg'
      ],
      seed: 'fpga-pong'
    },
    {
      title: 'rfid door',
      desc: 'ESP32 + RC522, encrypted tags, OTA updates.',
      images: [
        'assets/projects/rfid-door/1.jpg',
        'assets/projects/rfid-door/2.jpg',
        'assets/projects/rfid-door/3.jpg'
      ],
      seed: 'rfid-door'
    },
    {
      title: 'vision line-follower',
      desc: 'Jetson Nano robot with OpenCV PID control.',
      images: [
        'assets/projects/line-follower/1.jpg',
        'assets/projects/line-follower/2.jpg',
        'assets/projects/line-follower/3.jpg'
      ],
      seed: 'line-follower'
    },
    {
      title: 'pcb keyboard',
      desc: 'Hot-swap 40% with QMK, custom FR4 plate.',
      images: [
        'assets/projects/pcb-kb/1.jpg',
        'assets/projects/pcb-kb/2.jpg',
        'assets/projects/pcb-kb/3.jpg'
      ],
      seed: 'pcb-kb'
    },
    {
      title: 'audio dsp',
      desc: 'Real-time EQ and reverb on STM32 + I2S codec.',
      images: [
        'assets/projects/audio-dsp/1.jpg',
        'assets/projects/audio-dsp/2.jpg',
        'assets/projects/audio-dsp/3.jpg'
      ],
      seed: 'audio-dsp'
    }
  ];

  // If an image is missing locally, fall back to picsum so the demo still works.
  const withFallback = (url, seed, w = 1200, h = 800) =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(`https://picsum.photos/seed/${encodeURIComponent(seed)}-${Math.random()}/${w}/${h}`);
      img.src = url;
    });

  // Build grid tiles (hidden until unlocked)
  const buildGrid = async () => {
    grid.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      const tile = document.createElement('article');
      tile.className = 'tile';
      tile.dataset.index = i;

      // Use first image as cover with fallback
      const coverSrc = await withFallback(p.images[0], p.seed, 1024, 680);

      tile.innerHTML = `
        <img src="${coverSrc}" alt="${p.title} cover" loading="lazy">
        <div class="tile-info">
          <h3 class="title">${p.title}</h3>
          <p class="desc">${p.desc}</p>
        </div>
      `;

      tile.addEventListener('click', () => {
        if (!tile.classList.contains('revealed')) {
          tile.classList.add('revealed');              // first click "uncover"
        } else {
          openModal(i);                                 // second click enlarge
        }
      });

      grid.appendChild(tile);
    }
  };

  // Unlock on header click
  if (unlockBtn && projectsSection && grid) {
    unlockBtn.addEventListener('click', async () => {
      projectsSection.classList.add('unlocked');
      const hint = unlockBtn.querySelector('.hint');
      if (hint) hint.remove();
      if (!grid.childElementCount) await buildGrid();
    });
  }

  /* ---------- Modal / Carousel ---------- */
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSlides = document.getElementById('modal-slides');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  let currentProject = 0, currentSlide = 0;

  function openModal(index){
    currentProject = index;
    currentSlide = 0;

    const p = projects[index];
    modalTitle.textContent = p.title;
    modalCaption.textContent = p.desc;

    // Clear slides
    [...modalSlides.querySelectorAll('img')].forEach(el => el.remove());

    // Create slides (with fallback)
    Promise.all(p.images.map((src, idx) => withFallback(src, p.seed + '-' + idx)))
      .then(urls => {
        urls.forEach((url, i) => {
          const img = document.createElement('img');
          img.alt = `${p.title} image ${i+1}`;
          img.src = url;
          if (i === 0) img.classList.add('active');
          modalSlides.appendChild(img);
        });
      });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function go(delta){
    const imgs = [...modalSlides.querySelectorAll('img')];
    if (!imgs.length) return;
    imgs[currentSlide]?.classList.remove('active');
    currentSlide = (currentSlide + delta + imgs.length) % imgs.length;
    imgs[currentSlide]?.classList.add('active');
  }

  // Modal events
  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
});
