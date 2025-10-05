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

  /* ---------- Scroll reveal (sections + staggered children) ---------- */
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        if (e.target.classList.contains('reveal-stagger')) {
          [...e.target.children].forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
          });
        }
      }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

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

  /* ---------- Projects tiles + modal ---------- */
  const grid = document.getElementById('projects-grid');

  const projects = [
    {
      title: 'fpga pong',
      desc: 'Hardware game on Cyclone V. Verilog + VGA timing + PS/2. Lorem ipsum dolor sit amet.',
      tech: ['Verilog','VGA','PS/2','Cyclone V'],
      images: ['assets/projects/fpga-pong/1.jpg','assets/projects/fpga-pong/2.jpg','assets/projects/fpga-pong/3.jpg'],
      seed: 'fpga-pong'
    },
    {
      title: 'rfid door',
      desc: 'ESP32 + RC522 with encrypted tags and OTA. Lorem ipsum dolor sit amet.',
      tech: ['ESP32','RC522','OTA','AES'],
      images: ['assets/projects/rfid-door/1.jpg','assets/projects/rfid-door/2.jpg','assets/projects/rfid-door/3.jpg'],
      seed: 'rfid-door'
    },
    {
      title: 'vision line-follower',
      desc: 'Jetson Nano robot with OpenCV PID control. Lorem ipsum.',
      tech: ['Jetson Nano','OpenCV','PID','Python'],
      images: ['assets/projects/line-follower/1.jpg','assets/projects/line-follower/2.jpg','assets/projects/line-follower/3.jpg'],
      seed: 'line-follower'
    },
    {
      title: 'pcb keyboard',
      desc: 'Custom 40% with QMK, hot-swap sockets. Lorem ipsum dolor sit amet.',
      tech: ['KiCad','QMK','STM32','Hotswap'],
      images: ['assets/projects/pcb-kb/1.jpg','assets/projects/pcb-kb/2.jpg','assets/projects/pcb-kb/3.jpg'],
      seed: 'pcb-kb'
    },
    {
      title: 'audio dsp',
      desc: 'Real-time EQ + reverb on STM32 + I2S codec. Lorem ipsum.',
      tech: ['STM32','I2S','DSP','C'],
      images: ['assets/projects/audio-dsp/1.jpg','assets/projects/audio-dsp/2.jpg','assets/projects/audio-dsp/3.jpg'],
      seed: 'audio-dsp'
    }
  ];

  // if an image is missing locally, fall back to picsum so UI still works
  const withFallback = (url, seed, w = 1400, h = 900) =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(`https://picsum.photos/seed/${encodeURIComponent(seed)}-${Math.random()}/${w}/${h}`);
      img.src = url;
    });

  // Build grid immediately (no unlock)
  const buildGrid = async () => {
    grid.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      const tile = document.createElement('article');
      tile.className = 'tile';
      tile.dataset.index = i;

      // shoot from left/right
      tile.style.setProperty('--fromX', (i % 2 === 0 ? '-120px' : '120px'));
      tile.style.transitionDelay = `${i * 70}ms`;

      const coverSrc = await withFallback(p.images[0], p.seed);
      tile.innerHTML = `
        <img src="${coverSrc}" alt="${p.title} cover" loading="lazy">
        <div class="tile-info">
          <h3 class="title">${p.title}</h3>
          <p class="desc">${p.desc}</p>
        </div>
      `;

      tile.addEventListener('click', () => {
        if (!tile.classList.contains('revealed')) tile.classList.add('revealed'); // first click: reveal
        else openModal(i); // second click: details
      });

      grid.appendChild(tile);
    }
  };
  buildGrid();

  // When grid scrolls into view, play the shoot-in animation
  const gridObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  gridObserver.observe(grid);

  /* ---------- Modal / Carousel with integrated right panel ---------- */
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSlides = document.getElementById('modal-slides');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  const asideTitle = document.getElementById('modal-aside-title');
  const asideText = document.getElementById('modal-aside-text');
  const asideTags = document.getElementById('modal-aside-tags');

  let currentProject = 0, currentSlide = 0;

  function openModal(index){
    currentProject = index;
    currentSlide = 0;

    const p = projects[index];
    modalTitle.textContent = p.title;
    modalCaption.textContent = p.desc;

    asideTitle.textContent = 'about this project';
    asideText.textContent = p.desc;
    asideTags.innerHTML = p.tech.map(t => `<li>${t}</li>`).join('');

    // build slides
    [...modalSlides.querySelectorAll('img')].forEach(el => el.remove());
    Promise.all(p.images.map((src, i) => withFallback(src, p.seed + '-' + i)))
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
