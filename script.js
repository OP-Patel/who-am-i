document.addEventListener("DOMContentLoaded", () => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  const projects = [
    {
      id: "land-use-classification",
      title: "Land-Use Classification Model",
      type: "Deep Learning",
      summary: "PyTorch CNN pipeline for satellite land-use image classification.",
      description: "Built a PyTorch CNN pipeline for satellite land-use classification, including data augmentation, model iteration, and confusion-matrix analysis. The final model reached 96.9% validation accuracy and was packaged with a full technical report.",
      stats: ["96.9% accuracy", "46+ pp improvement", "APS360 final project"],
      tags: ["Python", "PyTorch", "Deep Learning", "CNN", "Computer Vision", "Data Augmentation", "Software"],
      details: [
        "Designed the training pipeline, model architecture, augmentation strategy, and evaluation flow.",
        "Compared baseline and improved models using confusion matrices and qualitative prediction examples.",
        "Documented architecture choices, results, and failure modes in a final engineering report."
      ],
      images: [
        "statics/deepLearningProject/finalArchPipeline.png",
        "statics/deepLearningProject/resultsPDFSS.png",
        "statics/deepLearningProject/confusionAndExample.png",
        "statics/deepLearningProject/dataAugExample.png"
      ],
      links: [
        { label: "Open report", url: "statics/deepLearningProject/APS360_Final_Report-1.pdf" }
      ],
      featured: false,
      year: 2026,
      impact: 1
    },
    {
      id: "wearalert",
      title: "WearAlert",
      type: "Embedded Systems",
      summary: "Wearable embedded alert system using ESP32, STM32, sensing, and WiFi.",
      description: "Developed a wearable embedded alert prototype for fall and safety monitoring. The build combined ESP32/STM32 hardware, wireless communication, sensor-driven behavior, and a judged hardware demo that was nominated as a Top 20 ECE342 Computer Hardware project.",
      stats: ["Top 20 ECE342 project", "Computer hardware", "ESP32 + STM32"],
      featureOrder: 3,
      featureMetric: "Nominated <span class='metric-accent'>Top 20 Project</span> in ECE342 - Computer Hardware",
      featureTags: ["Embedded System", "ESP32", "STM32", "WiFi"],
      featureFocus: "center 42%",
      tags: ["Embedded Systems", "ESP32", "STM32", "WiFi", "Sensor Integration", "Soldering", "Hardware Demo"],
      details: [
        "Built and demonstrated a wearable embedded prototype with sensor-triggered alert behavior.",
        "Integrated ESP32/STM32 hardware and WiFi communication into a presentable demo form factor.",
        "Prepared a hardware-focused presentation around reliability, usability, and fall-monitoring context."
      ],
      images: [
        "statics/wearalert/presentation_pic.jpg",
        "statics/wearalert/onDeskPicture.jpg",
        "statics/wearalert/seated_pic.jpg"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/wearalert" }
      ],
      featured: true,
      year: 2026,
      impact: 2
    },
    {
      id: "bob",
      title: "B.O.B. Recycling Bin",
      type: "MakeUofT Hardware Hackathon 2025",
      summary: "Barcode-aware recycling bin with Arduino actuation and Python feedback.",
      description: "Built a smart recycling bin for MakeUofT Hardware Hackathon 2025 using Arduino UNO R3 hardware, Python, Streamlit, barcode lookup, and servo actuation. The prototype won two categories: Sustainability and Domain Name.",
      stats: ["2x MakeUofT Hardware Hackathon 2025 winner", "Sustainability + Domain Name", "Arduino UNO R3"],
      featureOrder: 1,
      featureMetric: "MakeUofT Hardware Hackathon 2025: 2x <span class='metric-accent'>Winner</span> for Sustainability + Domain Name",
      featureTags: ["Python", "Arduino UNO R3", "Streamlit", "Servo Control"],
      featureFocus: "center 48%",
      tags: ["Arduino", "Arduino UNO R3", "Python", "Streamlit", "Servo Control", "Barcode Scanning", "OpenFoodFacts API", "Gemini API"],
      details: [
        "Connected barcode scanning to recyclability lookup through OpenFoodFacts and AI-assisted feedback.",
        "Controlled servo lid behavior and sensing logic with Arduino UNO R3 hardware.",
        "Built the Streamlit interface and integrated the prototype into a complete judging demo."
      ],
      images: [
        "statics/bob/selfie_bob.jpg",
        "statics/bob/bin.jpg",
        "statics/bob/highdef.jpg",
        "statics/bob/streamlit.png",
        "statics/bob/wires.jpg"
      ],
      links: [
        { label: "Devpost", url: "https://devpost.com/software/battle-over-bins" }
      ],
      featured: true,
      year: 2025,
      impact: 3
    },
    {
      id: "breadcrumb",
      title: "Bread Crumb Trail",
      type: "MakeUofT Hardware Hackathon 2026",
      summary: "Portable GPS breadcrumb tracker with an Arduino UNO Q and dashboard.",
      description: "Built Bread Crumb Trail for MakeUofT Hardware Hackathon 2026: a portable Arduino UNO Q GPS breadcrumb tracker with a Python/Streamlit dashboard for visualizing route data. The project won Best Use of Arduino UNO Q.",
      stats: ["MakeUofT Hardware Hackathon 2026 winner", "Best Use of Arduino UNO Q", "GPS mapping"],
      featureOrder: 2,
      featureMetric: "MakeUofT Hardware Hackathon 2026: <span class='metric-accent'>Winner</span> for Best Use of Arduino UNO Q",
      featureTags: ["Arduino UNO Q", "GPS", "Python", "Streamlit"],
      featureFocus: "center 44%",
      tags: ["Arduino", "Arduino UNO Q", "GPS", "Python", "Streamlit", "Mapping UI", "Location Tracking"],
      details: [
        "Built a portable Arduino UNO Q prototype to collect and present GPS breadcrumb data.",
        "Created a Streamlit dashboard to visualize route and breadcrumb information clearly.",
        "Balanced physical packaging, sensor integration, and software presentation for judging."
      ],
      images: [
        "statics/breadcrumb/selfie.jpg",
        "statics/breadcrumb/streamlitWebsite.png",
        "statics/breadcrumb/topView.png",
        "statics/breadcrumb/sideView.png",
        "statics/breadcrumb/crumbsExample.png"
      ],
      links: [
        { label: "Devpost", url: "https://devpost.com/software/breadcrumb-trail" }
      ],
      featured: true,
      year: 2026,
      impact: 4
    },
    {
      id: "pa-lpf",
      title: "Class-E Power Amplifier and Filter PCB",
      type: "RF PCB Design",
      summary: "16 MHz Class-E amplifier and 7-stage low-pass filter PCB.",
      description: "Designed, simulated, assembled, and validated a 16 MHz Class-E power amplifier with a 7-stage low-pass filter PCB. The build reached 2.7 W across the antenna load with strong gain and low measured distortion.",
      stats: ["2.7 W output", "Approx. 30 dB gain", "1.69% THD"],
      tags: ["PCB", "Altium Designer", "LTspice", "Class-E Amplifier", "Low-Pass Filter", "Oscilloscope", "Python"],
      details: [
        "Simulated Class-F, Class-D, and Class-E topologies in LTSpice before prototyping.",
        "Designed the PCB and assembled the amplifier/filter hardware.",
        "Validated results with lab equipment and Python-supported oscilloscope testing."
      ],
      images: [
        "statics/pa-lpf/pcb_final.png",
        "statics/pa-lpf/final_circuit.png",
        "statics/pa-lpf/final_results.png",
        "statics/pa-lpf/breadboard.png",
        "statics/pa-lpf/assembled.png",
        "statics/pa-lpf/simulations.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/pa-lpf-pcb" }
      ],
      featured: false,
      year: 2025,
      impact: 5
    },
    {
      id: "memory-game",
      title: "FPGA Human Benchmark Clone",
      type: "FPGA Embedded C",
      summary: "DE1-SoC memory game with VGA, audio, and PS/2 input.",
      description: "Recreated a Human Benchmark-style memory game on a DE1-SoC FPGA using Embedded C and low-level device control. The project coordinates VGA drawing, PS/2 keyboard input, audio feedback, buffering, and difficulty progression.",
      stats: ["DE1-SoC", "VGA + PS/2", "Audio synthesis"],
      tags: ["FPGA", "DE1-SoC", "Embedded C", "VGA", "PS/2 Keyboard", "Audio", "Frame Buffers"],
      details: [
        "Programmed the DE1-SoC to control VGA output, PS/2 keyboard input, and audio feedback.",
        "Implemented three difficulty levels with scaling grids and memorization patterns.",
        "Managed drawing and memory operations through single and double buffering."
      ],
      images: [
        "statics/memorygame/progression.png",
        "statics/memorygame/guessingsquares.png",
        "statics/memorygame/blockdiagram.png",
        "statics/memorygame/difficulty.png",
        "statics/memorygame/squaresshown.png",
        "statics/memorygame/gameover.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/human-benchmark" }
      ],
      featured: false,
      year: 2025,
      impact: 6
    },
    {
      id: "gomoku",
      title: "FPGA Gomoku",
      type: "FPGA Verilog",
      summary: "Verilog Gomoku game with VGA display, PS/2 input, and testbenches.",
      description: "Built a playable Gomoku implementation on FPGA using Verilog finite state machines, VGA display logic, PS/2 input handling, and ModelSim testbenches for game-ending scenarios.",
      stats: ["Verilog FSMs", "ModelSim testbenches", "VGA gameplay"],
      tags: ["FPGA", "Verilog", "ModelSim", "VGA", "PS/2 Keyboard", "Finite State Machines", "Digital Logic"],
      details: [
        "Created game logic FSMs and coordinated VGA and PS/2 keyboard modules.",
        "Verified edge cases and end-game behavior with ModelSim testbenches.",
        "Structured the implementation around clear module boundaries and display states."
      ],
      images: [
        "statics/gomoku/demo.png",
        "statics/gomoku/gameover.png",
        "statics/gomoku/highlevel.png",
        "statics/gomoku/l1.png",
        "statics/gomoku/l2.png",
        "statics/gomoku/l3.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/Gomoku" }
      ],
      featured: false,
      year: 2025,
      impact: 7
    },
    {
      id: "joystick-fan",
      title: "Joystick-Controlled Fan",
      type: "Embedded Controls",
      summary: "Arduino fan controller with joystick input, PWM speed, and direction control.",
      description: "Built an Arduino-based fan controller using joystick input, motor-driver wiring, PWM speed levels, and a rotating control mode. The project includes a KiCad schematic and a working hardware demo.",
      stats: ["3 speed levels", "180 degree control", "KiCad schematic"],
      tags: ["Arduino", "Microcontroller", "PWM", "Joystick Input", "Motor Driver", "KiCad", "Motor Control"],
      details: [
        "Created the schematic for joystick, fan, motor driver, motor, and Arduino connections.",
        "Implemented manual joystick control and automatic movement behavior.",
        "Packaged the project with demo visuals and clear circuit documentation."
      ],
      images: [
        "statics/joystickfan/demo.png",
        "statics/joystickfan/schematic.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/joystick-fan" }
      ],
      featured: false,
      year: 2025,
      impact: 8
    }
  ];

  let activeProject = null;
  let activeSlide = 0;

  initNavigation();
  initReveal();
  initFeaturedProjects();
  initProjectBrowser();
  initProjectModal();

  function initNavigation() {
    const toggle = qs(".nav-toggle");
    const nav = qs(".site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    qsa(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        qsa(".nav-menu.open").forEach(closeContactMenu);
      });
    });

    qsa(".nav-menu-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const menu = trigger.closest(".nav-menu");
        if (!menu) return;
        const isOpen = menu.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(isOpen));
      });
    });

    document.addEventListener("click", (event) => {
      qsa(".nav-menu.open").forEach((menu) => {
        if (!menu.contains(event.target)) closeContactMenu(menu);
      });
    });
  }

  function closeContactMenu(menu) {
    menu.classList.remove("open");
    qs(".nav-menu-trigger", menu)?.setAttribute("aria-expanded", "false");
  }

  function initReveal() {
    const items = qsa(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  }

  function initFeaturedProjects() {
    const grid = qs("#featured-projects");
    if (!grid) return;

    const featured = projects
      .filter((project) => project.featured)
      .sort((a, b) => (a.featureOrder || 99) - (b.featureOrder || 99))
      .slice(0, 3);
    grid.innerHTML = featured.map((project) => `
      <button class="feature-tile" type="button" data-project-id="${project.id}">
        <span class="tile-media">
          <img src="${project.images[0]}" alt="${project.title} preview" loading="lazy" style="object-position: ${project.featureFocus || "center center"}">
        </span>
        <span class="tile-body">
          <span class="project-type">${project.type}</span>
          <h3>${project.title}</h3>
          <span class="project-description">${project.featureMetric || project.stats[0]}</span>
          <span class="tag-row">${(project.featureTags || project.tags.slice(0, 4)).map(tag).join("")}</span>
        </span>
        <span class="tile-arrow" aria-hidden="true">More details &gt;&gt;</span>
      </button>
    `).join("");

    qsa("[data-project-id]", grid).forEach((tile) => {
      tile.addEventListener("click", () => openProject(tile.dataset.projectId));
    });
  }

  function initProjectBrowser() {
    const list = qs("#project-list");
    const filters = qs("#project-filters");
    const search = qs("#project-search");
    const sort = qs("#project-sort");
    const clear = qs("#clear-filters");
    const count = qs("#result-count");
    if (!list || !filters || !search || !sort || !clear || !count) return;

    const commonTags = [
      "Python", "Arduino", "Embedded Systems", "ESP32", "STM32", "GPS",
      "PyTorch", "FPGA", "Verilog", "PCB", "VGA", "Motor Control"
    ];
    const selected = new Set();

    filters.innerHTML = commonTags.map((tagName) => `
      <button class="filter-chip" type="button" data-tag="${tagName}" aria-pressed="false">${tagName}</button>
    `).join("");

    qsa(".filter-chip", filters).forEach((chip) => {
      chip.addEventListener("click", () => {
        const tagName = chip.dataset.tag;
        if (selected.has(tagName)) {
          selected.delete(tagName);
        } else {
          selected.add(tagName);
        }
        chip.classList.toggle("active", selected.has(tagName));
        chip.setAttribute("aria-pressed", String(selected.has(tagName)));
        renderProjects();
      });
    });

    clear.addEventListener("click", () => {
      selected.clear();
      search.value = "";
      qsa(".filter-chip", filters).forEach((chip) => {
        chip.classList.remove("active");
        chip.setAttribute("aria-pressed", "false");
      });
      renderProjects();
      search.focus();
    });

    search.addEventListener("input", renderProjects);
    sort.addEventListener("change", renderProjects);
    renderProjects();

    function renderProjects() {
      const query = search.value.trim().toLowerCase();
      const selectedTags = [...selected];
      let results = projects.filter((project) => {
        const haystack = [
          project.title,
          project.type,
          project.summary,
          project.description,
          ...project.tags,
          ...project.stats
        ].join(" ").toLowerCase();

        const matchesSearch = !query || haystack.includes(query);
        const matchesTags = selectedTags.length === 0 || selectedTags.some((tagName) => project.tags.includes(tagName));
        return matchesSearch && matchesTags;
      });

      results = sortProjects(results, sort.value);
      count.textContent = `${results.length} project${results.length === 1 ? "" : "s"} shown`;

      if (!results.length) {
        list.innerHTML = `<div class="empty-state">No projects match those filters yet. Try clearing one chip or searching a broader term.</div>`;
        return;
      }

      list.innerHTML = results.map((project) => `
        <article class="project-card" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View ${project.title} details">
          <div class="project-thumb">
            <img src="${project.images[0]}" alt="${project.title} preview" loading="lazy">
          </div>
          <div class="project-card-body">
            <span class="project-type">${project.type}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <span class="project-stat">${project.stats.join(" | ")}</span>
            <div class="tag-row">${project.tags.slice(0, 5).map(tag).join("")}</div>
            <div class="project-card-actions">
              <span class="card-button">View details</span>
              ${project.links[0] ? projectLink(project.links[0]) : ""}
            </div>
          </div>
        </article>
      `).join("");

      qsa(".project-card", list).forEach((card) => {
        card.addEventListener("click", () => openProject(card.dataset.projectId));
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(card.dataset.projectId);
          }
        });
      });

      qsa(".project-card a", list).forEach((link) => {
        link.addEventListener("click", (event) => event.stopPropagation());
      });
    }
  }

  function sortProjects(items, mode) {
    const sorted = [...items];
    if (mode === "recent") {
      return sorted.sort((a, b) => b.year - a.year || a.impact - b.impact);
    }
    if (mode === "name") {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted.sort((a, b) => a.impact - b.impact);
  }

  function initProjectModal() {
    const modal = qs("#project-modal");
    if (!modal) return;

    qs("#modal-close")?.addEventListener("click", closeProject);
    qs("#slide-prev")?.addEventListener("click", () => moveSlide(-1));
    qs("#slide-next")?.addEventListener("click", () => moveSlide(1));

    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeProject();
    });

    document.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("open")) return;
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowLeft") moveSlide(-1);
      if (event.key === "ArrowRight") moveSlide(1);
    });
  }

  function openProject(projectId) {
    const project = projects.find((item) => item.id === projectId);
    const modal = qs("#project-modal");
    if (!project || !modal) return;

    activeProject = project;
    activeSlide = 0;

    qs("#modal-type").textContent = project.type;
    qs("#modal-title").textContent = project.title;
    qs("#modal-summary").textContent = project.description;
    qs("#modal-stats").innerHTML = project.stats.map((item) => `<span class="stat-pill">${item}</span>`).join("");
    qs("#modal-details").innerHTML = project.details.map((item) => `<li>${item}</li>`).join("");
    qs("#modal-tags").innerHTML = project.tags.map(tag).join("");
    qs("#modal-links").innerHTML = project.links.length
      ? project.links.map(projectLink).join("")
      : projectLink({ label: "GitHub profile", url: "https://github.com/OP-Patel" });

    qs("#modal-gallery").innerHTML = project.images.map((src, index) => `
      <img src="${src}" alt="${project.title} image ${index + 1}" class="${index === 0 ? "active" : ""}" loading="lazy">
    `).join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    qs("#modal-close")?.focus();
  }

  function closeProject() {
    const modal = qs("#project-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProject = null;
    activeSlide = 0;
  }

  function moveSlide(delta) {
    if (!activeProject) return;
    const images = qsa("#modal-gallery img");
    if (!images.length) return;

    images[activeSlide]?.classList.remove("active");
    activeSlide = (activeSlide + delta + images.length) % images.length;
    images[activeSlide]?.classList.add("active");
  }

  function tag(label) {
    return `<span class="tag">${label}</span>`;
  }

  function projectLink(link) {
    const isGitHub = link.label.toLowerCase().includes("github");
    const label = isGitHub
      ? `<span class="svg-icon icon-github" aria-hidden="true"></span><span class="sr-only">${link.label}</span>`
      : `<span>${link.label}</span><span class="svg-icon icon-external" aria-hidden="true"></span>`;

    return `<a class="btn small project-link-btn" href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}">${label}</a>`;
  }
});
