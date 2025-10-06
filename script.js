document.addEventListener('DOMContentLoaded', () => {
  /* =========================
   * Helpers
   * =======================*/
  const qs  = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];

  const GITHUB_PROFILE = 'https://github.com/OP-Patel';

  const withFallback = (url, seed, w = 1400, h = 900) =>
    new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(url);
      img.onerror = () => resolve(`https://picsum.photos/seed/${encodeURIComponent(seed)}-${Math.random()}/${w}/${h}`);
      img.src = url;
    });

  const normalizeUrl = (u) => {
    if (!u) return '';
    if (/^https?:\/\//i.test(u)) return u;
    return 'https://' + u.replace(/^\/\//, '');
  };

  /* =========================
   * Custom cursor
   * =======================*/
  (function initCursor(){
    const dot = qs('#cursor-dot');
    if (!dot) return;

    const hasFinePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (!hasFinePointer) { dot.style.display = 'none'; return; }

    let tx = 0, ty = 0, x = 0, y = 0;
    const ease = 0.2;

    const tick = () => {
      x += (tx - x) * ease;
      y += (ty - y) * ease;
      dot.style.setProperty('--x', x.toFixed(2));
      dot.style.setProperty('--y', y.toFixed(2));
      requestAnimationFrame(tick);
    };
    tick();

    addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; dot.classList.add('visible'); });
    addEventListener('pointerleave', () => dot.classList.remove('visible'));

    let t;
    addEventListener('pointerdown', () => { dot.classList.add('shrink'); clearTimeout(t); });
    addEventListener('pointerup',   () => { t = setTimeout(() => dot.classList.remove('shrink'), 120); });
  })();

  /* =========================
   * Binary hover name
   * =======================*/
  (function initBinaryName(){
    const nameEl = qs('#hero-name');
    if (!nameEl) return;

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
  })();

  /* =========================
   * Scroll reveal
   * =======================*/
  (function initReveal(){
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-visible');

        if (e.target.classList.contains('reveal-stagger')) {
          qsa(':scope > *', e.target).forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
          });
        }
      }
    }, { threshold: 0.15 });

    qsa('.reveal, .reveal-stagger').forEach(el => io.observe(el));
  })();

  /* =========================
   * Active left nav on scroll
   * =======================*/
  (function initActiveNav(){
    const links = qsa('.side-nav a');
    const sections = qsa('section');
    const setActive = () => {
      const mid = innerHeight * 0.4;
      let current = sections[0]?.id || '';
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid) current = s.id;
      }
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
    };
    setActive();
    addEventListener('scroll', setActive, { passive: true });
  })();

  /* =========================
   * Projects grid + modal
   * =======================*/
  (function initProjects(){
    const grid          = qs('#projects-grid');

    // Modal elements
    const modal         = qs('#project-modal');
    const modalTitle    = qs('#modal-title');
    const modalSnippet  = qs('#modal-snippet');
    const modalSlides   = qs('#modal-slides');
    const modalCaption  = qs('#modal-caption');
    const closeBtn      = qs('#modal-close');
    const prevBtn       = qs('#slide-prev');
    const nextBtn       = qs('#slide-next');
    const detailList    = qs('#modal-detail-list');
    const asideTags     = qs('#modal-aside-tags');
    const modalGithub   = qs('#modal-github'); // optional, only if you added it

    // Data
    const projects = [
      {
        title: 'class e power amplifier and filter PCB',
        snippet: '16 MHz Class-E PA + 7-stage filter for radio integration',
        details: [
          'constructed a Class-E PA and maximally-flat 7-stage low-pass filter',
          'achieved 2.7 W across antenna load (~30 dB gain) with 1.69% THD',
          'validated functionality by unit-testing on oscilioscope via python scripting; met radio integration requirements',
          'simulated class F vs D vs E topologies in LTSpice before prototyping',
        ],
        tech: ['Altium Designer','LTSpice','Lab Equipment','Python Scripting', 'Rapid Prototyping', 'Soldering', 'PCB Design', 'Circuit Design'],
        images: ['/statics/pa-lpf/pcb_final.png','statics/pa-lpf/final_circuit.png','statics/pa-lpf/final_results.png','statics/pa-lpf/breadboard.png', 'statics/pa-lpf/assembled.png', 'statics/pa-lpf/simulations.png'],
        github: 'https://github.com/OP-Patel/pa-lpf-pcb',
        seed: 'class-e-pa'
      },
      {
        title: 'rfid door',
        snippet: 'ESP32 + RC522 access control with OTA.',
        details: [
          'encrypted tag authentication and role-based access',
          'OTA updates for field devices; metrics via MQTT',
          '3D-printed mount + wiring harness for neat install'
        ],
        tech: ['ESP32','RC522','OTA','AES'],
        images: ['assets/projects/rfid-door/1.jpg','assets/projects/rfid-door/2.jpg','assets/projects/rfid-door/3.jpg'],
        seed: 'rfid-door'
      },
      {
        title: 'vision line-follower',
        snippet: 'Jetson Nano robot with OpenCV PID.',
        details: [
          'camera-based line detection and curvature estimation',
          'PID speed/steering loop with auto-tuned gains',
          'telemetry dashboard for lap timing and plots'
        ],
        tech: ['Jetson Nano','OpenCV','PID','Python'],
        images: ['assets/projects/line-follower/1.jpg','assets/projects/line-follower/2.jpg','assets/projects/line-follower/3.jpg'],
        seed: 'line-follower'
      },
      {
        title: 'pcb keyboard',
        snippet: 'Custom 40% hot-swap board with QMK.',
        details: [
          'KiCad schematic/PCB; FR4 plate and USB-C ESD protection',
          'per-key RGB and underglow; VIA-configurable keymap',
          'case CNC’d from acrylic; gasket-mounted'
        ],
        tech: ['KiCad','QMK','STM32','Hotswap'],
        images: ['assets/projects/pcb-kb/1.jpg','assets/projects/pcb-kb/2.jpg','assets/projects/pcb-kb/3.jpg'],
        seed: 'pcb-kb'
      },
      {
        title: 'audio dsp',
        snippet: 'STM32 real-time EQ + reverb over I2S.',
        details: [
          'biquad EQ bank and Schroeder reverb at 48 kHz',
          'fixed-point optimizations; double-buffered DMA',
          'headphone amp stage with pop suppression'
        ],
        tech: ['STM32','I2S','DSP','C'],
        images: ['assets/projects/audio-dsp/1.jpg','assets/projects/audio-dsp/2.jpg','assets/projects/audio-dsp/3.jpg'],
        seed: 'audio-dsp'
      }
    ];

    let currentProject = 0;
    let currentSlide   = 0;

    const buildGrid = async () => {
      if (!grid) return;
      grid.innerHTML = '';

      for (let i = 0; i < projects.length; i++) {
        const p = projects[i];
        const tile = document.createElement('article');
        tile.className = 'tile';
        tile.dataset.index = String(i);

        // shoot-in from left/right
        tile.style.setProperty('--fromX', (i % 2 === 0 ? '-120px' : '120px'));
        tile.style.transitionDelay = `${i * 70}ms`;

        const coverSrc = await withFallback(p.images[0], p.seed);
        tile.innerHTML = `
          <img src="${coverSrc}" alt="${p.title} cover" loading="lazy">
          <div class="tile-info">
            <h3 class="title">${p.title}</h3>
            <p class="desc">${p.snippet}</p>
          </div>
        `;
        tile.addEventListener('click', () => openModal(i));
        grid.appendChild(tile);
      }
    };

    const gridObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.15 });

    function openModal(index){
      currentProject = index;
      currentSlide   = 0;

      const p = projects[index];
      modalTitle.textContent   = p.title;
      modalSnippet.textContent = p.snippet;
      modalCaption.textContent = '';

      // detail bullets + tech
      detailList.innerHTML = p.details.map(d => `<li>${d}</li>`).join('');
      asideTags.innerHTML  = p.tech.map(t => `<li>${t}</li>`).join('');

      // GitHub link (if present)
      if (modalGithub) {
        const ghHref = normalizeUrl(p.github || GITHUB_PROFILE);
        if (ghHref) {
          modalGithub.href = ghHref;
          modalGithub.textContent = p.github ? 'view repository ↗' : 'my github ↗';
          modalGithub.style.display = 'inline-flex';
        } else {
          modalGithub.style.display = 'none';
        }
      }

      // slides
      qsa('img', modalSlides).forEach(el => el.remove());
      Promise.all(p.images.map((src, i) => withFallback(src, `${p.seed}-${i}`)))
        .then(urls => {
          urls.forEach((url, i) => {
            const img = document.createElement('img');
            img.alt = `${p.title} image ${i + 1}`;
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
      const imgs = qsa('img', modalSlides);
      if (!imgs.length) return;
      imgs[currentSlide]?.classList.remove('active');
      currentSlide = (currentSlide + delta + imgs.length) % imgs.length;
      imgs[currentSlide]?.classList.add('active');
    }

    // Wire up events
    if (grid) gridObserver.observe(grid);
    buildGrid();

    qs('#modal-close')?.addEventListener('click', closeModal);
    qs('#slide-prev')?.addEventListener('click', () => go(-1));
    qs('#slide-next')?.addEventListener('click', () => go(1));

    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft')  go(-1);
      if (e.key === 'ArrowRight') go(1);
    });
  })();
});
