document.addEventListener("DOMContentLoaded", () => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  const projects = [
    {
      id: "arty-conv-accelerator",
      title: "Real-Time FPGA Vision Accelerator",
      type: "FPGA Computer Vision",
      summary: "CPU-free Arty A7 vision pipeline with live camera capture, Sobel processing, and custom UDP transport.",
      description: "Built an end-to-end real-time vision accelerator on the Digilent Arty A7-100T. Custom SystemVerilog configures and captures an OV7670 camera, converts RGB565 frames to fixed-point grayscale, computes Sobel edges, and streams CRC-validated pixels over a custom Ethernet/IPv4/UDP stack to a Python and Streamlit operator console.",
      stats: ["5.739× vs OpenCV", "81,380 frames/s", "9,000 zero-error live frames"],
      featureOrder: 2,
      featureOutcome: "81,380 frames/s · 5.739× OpenCV · 9,000 validated live frames",
      featureFocus: "center 48%",
      categories: ["FPGA", "Python", "Embedded"],
      tags: ["SystemVerilog", "FPGA", "Arty A7-100T", "Computer Vision", "OV7670", "Sobel Filter", "Ethernet/UDP", "Clock Domain Crossing", "Python", "OpenCV", "Streamlit", "Vivado"],
      details: [
        "Built the camera-to-host path in SystemVerilog: OV7670 capture, fixed-point grayscale/Sobel, CDC, and custom Ethernet/UDP.",
        "Ran 32 Sobel lanes at 200 MHz: 81,380 frames/s, 5.739× single-thread OpenCV throughput, and a bit-exact CRC.",
        "Validated 9,000 live frames across 7.5/15/30 FPS modes with zero integrity errors and clean routed timing."
      ],
      images: [
        "statics/arty-conv-accelerator/hardware-setup.png",
        "statics/arty-conv-accelerator/reference-sobel-dashboard.png",
        "statics/arty-conv-accelerator/thresholded-sobel-dashboard.png",
        "statics/arty-conv-accelerator/live-sobel.png",
        "statics/arty-conv-accelerator/accelerator-showcase.png"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/cv-accelerator" },
        { label: "Watch demo", url: "https://youtu.be/zik1mwUIBYg" }
      ],
      featured: true,
      year: 2026,
      impact: 1
    },
    {
      id: "optical-dsp",
      title: "FPGA Optical DSP",
      type: "FPGA Optical Communications",
      status: "Coming Soon",
      summary: "Arty A7 optical-link prototype with XADC receive DSP and FPGA-resident BER measurement.",
      description: "Planning and hardware bring-up for a student-scale optical communications link on the Arty A7-100T. The design will transmit NRZ on-off keying through a short 650 nm laser path, sample a BPW34-style photodiode with the XADC, and run fixed-point receive DSP with FPGA-resident bit-error-rate measurement.",
      stats: ["Planning + bring-up", "650 nm OOK link", "XADC receive DSP"],
      categories: ["FPGA", "Embedded"],
      tags: ["FPGA", "Arty A7-100T", "Optical Communications", "XADC", "NRZ/OOK", "Fixed-Point DSP", "FIR Filter", "PRBS/BER", "SystemVerilog", "Vivado"],
      details: [
        "Plan a deterministic NRZ/OOK transmitter and short 650 nm optical path with transistor-switched laser drive.",
        "Sample a BPW34-style photodiode through the Arty XADC for DC removal, FIR filtering, phase selection, and threshold decisions.",
        "Qualify 1 kbit/s first, target 10 kbit/s, and report BER only after physical hardware evidence passes."
      ],
      images: [
        "statics/optical-dsp/coming-soon.svg"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/OP-Patel/optical-dsp" }
      ],
      featured: false,
      year: 2026,
      impact: 2
    },
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
      featureOrder: 4,
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
      featureOrder: 3,
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
      categories: ["FPGA", "C/C++", "Embedded"],
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
      type: "DE1-SoC Game System",
      summary: "Interactive FPGA board game with VGA graphics, PS/2 keyboard control, and hardware win detection.",
      description: "Built a playable Gomoku system on the DE1-SoC using Verilog. Custom logic renders the board, hover cursor, pieces, and game-over screen over VGA, decodes PS/2 keyboard input, tracks the 13×13 board in on-chip memory, and detects horizontal, vertical, and diagonal wins in hardware.",
      stats: ["DE1-SoC", "160×120 VGA graphics", "PS/2 keyboard control"],
      categories: ["FPGA", "Embedded"],
      tags: ["DE1-SoC", "VGA Graphics", "PS/2 Keyboard", "On-Chip Game State", "FPGA", "Verilog", "Finite State Machines", "Quartus"],
      details: [
        "Rendered the board, hover cursor, player pieces, backgrounds, and game-over screen through a 160×120 VGA pipeline.",
        "Decoded PS/2 make/break codes for WASD movement and Enter-based placement on the DE1-SoC.",
        "Stored a 13×13 board in hardware and detected five-in-a-row across horizontal, vertical, and diagonal paths."
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
  let modalOpener = null;

  initNavigation();
  initResumeDock();
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

  function initResumeDock() {
    const dock = qs(".resume-dock");
    const hero = qs(".hero");
    if (!dock || !hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      dock.classList.toggle("is-visible", !entry.isIntersecting);
    }, { rootMargin: "-76px 0px 0px", threshold: 0.05 });

    observer.observe(hero);
  }

  function initFeaturedProjects() {
    const grid = qs("#featured-projects");
    if (!grid) return;

    const featured = projects
      .filter((project) => project.featured)
      .sort((a, b) => (a.featureOrder || 99) - (b.featureOrder || 99))
      .slice(0, 4);
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
          <span class="feature-arrow" aria-hidden="true"><span class="svg-icon icon-external"></span></span>
        </span>
      </button>
    `).join("");

    qsa("[data-project-id]", grid).forEach((tile) => {
      tile.addEventListener("click", () => openProject(tile.dataset.projectId, tile));
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
      "FPGA", "STM32", "Arduino", "Python", "C/C++", "PCB", "AI/ML", "Embedded", "Sensors"
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
        <article class="project-card${project.status ? " coming-soon" : ""}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View ${project.title} details">
          <div class="project-thumb">
            <img src="${project.images[0]}" alt="${project.title} preview" loading="lazy">
          </div>
          <div class="project-card-body">
            <div class="project-kicker">
              <span class="project-type">${project.type}</span>
              ${project.status ? `<span class="project-state">${project.status}</span>` : ""}
            </div>
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
        card.addEventListener("click", () => openProject(card.dataset.projectId, card));
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(card.dataset.projectId, card);
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
      return sorted.sort((a, b) => {
        const comingSoonPriority = Number(b.status === "Coming Soon") - Number(a.status === "Coming Soon");
        return comingSoonPriority || b.year - a.year || a.impact - b.impact;
      });
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
      if (event.key === "Tab") trapModalFocus(event, modal);
    });
  }

  function openProject(projectId, opener = null) {
    const project = projects.find((item) => item.id === projectId);
    const modal = qs("#project-modal");
    if (!project || !modal) return;

    activeProject = project;
    activeSlide = 0;
    modalOpener = opener;

    qs("#modal-type").textContent = project.status ? `${project.type} · ${project.status}` : project.type;
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

  function trapModalFocus(event, modal) {
    const focusable = qsa('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
      .filter((element) => element.getClientRects().length > 0);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeProject() {
    const modal = qs("#project-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProject = null;
    activeSlide = 0;
    modalOpener?.focus();
    modalOpener = null;
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
    const icon = isGitHub
      ? `<svg class="link-icon" aria-hidden="true" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>`
      : `<svg class="link-icon" aria-hidden="true" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/></svg>`;
    const label = `<span>${link.label}</span>${icon}`;

    return `<a class="btn small project-link-btn" href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}">${label}</a>`;
  }
});
