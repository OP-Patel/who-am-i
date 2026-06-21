document.addEventListener("DOMContentLoaded", () => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  const projects = [
    {
      id: "land-use-classification",
      title: "Land-Use Classification Model",
      type: "Deep Learning",
      summary: "2.39M-parameter PyTorch CNN for 10-class EuroSAT satellite imagery.",
      description: "Trained a 6-layer PyTorch CNN for 10-class EuroSAT land-use classification, reaching 96.9% test accuracy against a 50.7% HoG baseline. The pipeline expanded 18.9k source images to 94.5k augmented samples and supported stratified splits, GPU training, and checkpointing.",
      stats: ["96.9% test accuracy", "2.39M parameters", "5x training data"],
      categories: ["Python", "AI/ML"],
      tags: ["Python", "PyTorch", "torchvision", "scikit-learn", "Pandas", "CNN", "Computer Vision"],
      details: [
        "Achieved 96.9% test accuracy with a 2.39M-parameter CNN using 6 convolutional layers, batch normalization, dropout, and Adam optimization.",
        "Scaled the EuroSAT training set from 18.9k to 94.5k images through 5x augmentation with torchvision.",
        "Implemented stratified 70/15/15 splits, GPU training, checkpointing, confusion-matrix analysis, and comparison against a 50.7% HoG baseline."
      ],
      images: [
        "statics/deepLearningProject/confusionAndExample.png",
        "statics/deepLearningProject/finalArchPipeline.png",
        "statics/deepLearningProject/resultsPDFSS.png",
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
      summary: "Sub-100 ms fall-detection system with dual-sensor fusion and WiFi.",
      description: "Co-engineered a Top 20-nominated fall-detection system using ESP32, ESP8266, and STM32 hardware. Dual-sensor fusion from a BNO055 IMU and DPS310 barometer achieved under 100 ms end-to-end latency at a 9-10 Hz packet rate.",
      stats: ["<100 ms latency", "9-10 Hz packets", "Top 20 ECE342"],
      featureOrder: 3,
      featureMetric: "Nominated <span class='metric-accent'>Top 20 Project</span> in ECE342 - Computer Hardware",
      featureTags: ["Embedded System", "ESP32", "STM32", "WiFi"],
      featureOutcome: "Top 20 ECE342 · Wireless communication · STM32 wearable tech",
      featureFocus: "center 42%",
      categories: ["STM32", "C/C++", "Embedded", "Sensors"],
      tags: ["Embedded C", "ESP32", "ESP8266", "STM32", "ESP-NOW", "I2C", "UART", "DAC/DMA"],
      details: [
        "Fused BNO055 IMU and DPS310 barometer data across ESP32, ESP8266, and STM32 nodes, sustaining 9-10 Hz packets at 2.3 kbps.",
        "Configured GPIO, UART, I2C, DAC, DMA, and timers in STM32CubeMX and Keil, including 115200-baud packet parsing, OLED output, and audio alerts.",
        "Designed an Onshape headband enclosure, 3D printed the wearable, and soldered 2 perfboards for final hardware integration."
      ],
      images: [
        "statics/wearalert/presentation_pic_mirrored.jpg",
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
      summary: "Sensor-driven smart bin with automated capacity checks and recyclability lookup.",
      description: "Built a smart recycling bin using Arduino UNO R3, ultrasonic and IR sensors, servo actuation, Gemini AI, and OpenFoodFacts. The project won Best Sustainability Hack and Best Domain Name at MakeUofT 2025.",
      stats: ["Best Sustainability Hack", "Best Domain Name", "2x hackathon winner"],
      featureOrder: 1,
      featureMetric: "Winner: Best Sustainability Hack + Best Domain Name",
      featureTags: ["Python", "Arduino UNO R3", "Streamlit", "Servo Control"],
      featureFocus: "center 48%",
      categories: ["Arduino", "Python", "C/C++", "AI/ML", "Embedded", "Sensors"],
      tags: ["Arduino UNO R3", "Python", "Streamlit", "Ultrasonic Sensor", "IR Sensor", "Servo", "OpenFoodFacts API", "Gemini API"],
      details: [
        "Automated lid operation and available-capacity detection using ultrasonic and IR sensors with Arduino UNO R3 servo control.",
        "Combined Gemini AI and OpenFoodFacts API data to determine recyclability and provide disposal guidance through a Streamlit interface.",
        "Won Best Sustainability Hack out of 20+ teams and Best Domain Name out of 60+ teams at MakeUofT 2025."
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
      summary: "Arduino UNO Q navigation and SOS system with live GPS breadcrumbs.",
      description: "Engineered a portable navigation and SOS system on Arduino UNO Q with GNSS/GPS, OLED, and GSM/LTE hardware. Live coordinates and breadcrumbs were sent to a Streamlit dashboard with Twilio, Google Maps, and Gemini integrations.",
      stats: ["Winner among 260+ submissions", "Best Use of Arduino UNO Q", "GPS + LTE"],
      featureOrder: 2,
      featureMetric: "MakeUofT Hardware Hackathon 2026: <span class='metric-accent'>Winner</span> for Best Use of Arduino UNO Q",
      featureTags: ["Arduino UNO Q", "GPS", "Python", "Streamlit"],
      featureFocus: "center 44%",
      categories: ["Arduino", "Python", "C/C++", "AI/ML", "Embedded", "Sensors"],
      tags: ["Arduino UNO Q", "C++", "Python", "GNSS/GPS", "GSM/LTE", "I2C", "UART", "Twilio API", "Google Maps API"],
      details: [
        "Integrated GNSS/GPS and SSD1306 OLED devices over I2C plus a GSM/LTE cellular module over UART on Arduino UNO Q AppLab.",
        "Built a Streamlit dashboard for live coordinates, route history, and Google Maps waypoint visualization.",
        "Implemented Twilio SOS SMS, compressed trail summaries, and Gemini emergency guidance; won Best Use of Arduino UNO Q among 260+ submissions."
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
      summary: "16 MHz Class-E amplifier and 7-stage filter on a validated 2-layer PCB.",
      description: "Designed, assembled, and validated a 16 MHz, 60 V Class-E power amplifier with a 7-stage maximally flat low-pass filter. The system delivered 2.7 W to the antenna load, approximately 30 dB gain, 1.69% THD, and 76% power efficiency.",
      stats: ["2.7 W output", "76% efficiency", "1.69% THD"],
      categories: ["Python", "PCB"],
      tags: ["Altium Designer", "LTspice", "PCB", "Class-E Amplifier", "Low-Pass Filter", "Python", "Oscilloscope", "DMM"],
      details: [
        "Constructed a Class-E amplifier and 7-stage maximally flat low-pass filter, producing 2.7 W across the antenna load with approximately 30 dB gain.",
        "Designed a 2-layer Altium PCB for 16 MHz and 60 V operation, achieving 76% power efficiency and 1.69% total harmonic distortion.",
        "Automated hardware validation in Python by interfacing with an oscilloscope, DMM, and waveform generator."
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
      categories: ["C/C++", "Embedded"],
      tags: ["FPGA", "DE1-SoC", "Embedded C", "VGA", "PS/2 Keyboard", "Audio", "Frame Buffers"],
      details: [
        "Programmed memory-mapped DE1-SoC peripherals in Embedded C for VGA rendering, PS/2 keyboard input, and synthesized audio feedback.",
        "Implemented 3 difficulty levels with scaling grids, timed memorization states, input validation, and game-over handling.",
        "Managed frame drawing through single and double buffering to keep VGA updates stable during gameplay."
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
      categories: ["Verilog"],
      tags: ["FPGA", "Verilog", "ModelSim", "VGA", "PS/2 Keyboard", "Finite State Machines", "Digital Logic"],
      details: [
        "Designed Verilog finite-state machines for turn control, cursor movement, stone placement, win detection, and display state transitions.",
        "Integrated VGA rendering and PS/2 keyboard input as separate hardware modules around the core game controller.",
        "Verified game-ending paths and edge cases with ModelSim testbenches before FPGA deployment."
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
      categories: ["Arduino", "C/C++", "Embedded", "Sensors"],
      tags: ["Arduino", "Microcontroller", "PWM", "Joystick Input", "Motor Driver", "KiCad", "Motor Control"],
      details: [
        "Designed the KiCad schematic connecting joystick inputs, Arduino, motor driver, DC fan, and rotation motor.",
        "Mapped analog joystick input to 3 PWM fan-speed levels and bidirectional positioning across a 180-degree range.",
        "Implemented both direct joystick control and an automatic sweep mode, then validated the complete electromechanical assembly."
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
      <button class="feature-row" type="button" data-project-id="${project.id}">
        <span class="feature-media">
          <img src="${project.images[0]}" alt="${project.title} preview" loading="lazy" style="object-position: ${project.featureFocus || "center center"}">
        </span>
        <span class="feature-copy">
          <span class="feature-copy-main">
            <span class="project-type">${project.type}</span>
            <h3>${project.title}</h3>
            <span class="feature-outcome">${project.featureOutcome || project.stats.slice(0, 2).join(" · ")}</span>
          </span>
          <span class="feature-arrow" aria-hidden="true">↗</span>
        </span>
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

    const filterCategories = [
      "STM32", "Arduino", "Python", "C/C++", "Verilog", "PCB", "AI/ML", "Embedded", "Sensors"
    ];
    const selected = new Set();

    filters.innerHTML = filterCategories.map((category) => `
      <button class="filter-chip" type="button" data-category="${category}" aria-pressed="false">${category}</button>
    `).join("");

    qsa(".filter-chip", filters).forEach((chip) => {
      chip.addEventListener("click", () => {
        const category = chip.dataset.category;
        if (selected.has(category)) {
          selected.delete(category);
        } else {
          selected.add(category);
        }
        chip.classList.toggle("active", selected.has(category));
        chip.setAttribute("aria-pressed", String(selected.has(category)));
        renderProjects();
      });
    });

    clear.addEventListener("click", () => {
      selected.clear();
      search.value = "";
      sort.value = "impact";
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
      const selectedCategories = [...selected];
      let results = projects.filter((project) => {
        const haystack = [
          project.title,
          project.type,
          project.summary,
          project.description,
          project.featureOutcome || "",
          ...project.categories,
          ...project.tags,
          ...project.stats
        ].join(" ").toLowerCase();

        const matchesSearch = !query || haystack.includes(query);
        const matchesCategories = selectedCategories.length === 0
          || selectedCategories.some((category) => project.categories.includes(category));
        return matchesSearch && matchesCategories;
      });

      results = sortProjects(results, sort.value);
      count.textContent = `${String(results.length).padStart(2, "0")} project${results.length === 1 ? "" : "s"}`;
      list.classList.toggle("single-result", results.length === 1);
      list.classList.toggle("odd-results", results.length > 1 && results.length % 2 === 1);

      if (!results.length) {
        list.classList.remove("single-result");
        list.classList.remove("odd-results");
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
            <div class="tag-row">${project.tags.slice(0, 4).map(tag).join("")}</div>
            <div class="project-card-actions">
              <span class="card-button">View project</span>
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
