---
name: Om Patel Engineering Portfolio
description: Evidence-led engineering field notes with restrained control-room precision.
colors:
  burnt-signal-orange: "#e7643a"
  drafting-paper: "#f2f0ea"
  warm-white: "#faf9f5"
  carbon-ink: "#111210"
  instrument-gray: "#666860"
  rule-gray: "#cbc9c0"
  control-room-black: "#171916"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 5.3rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "clamp(72px, 9vw, 132px)"
components:
  button-primary:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.burnt-signal-orange}"
    textColor: "{colors.warm-white}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "34px"
  project-card:
    backgroundColor: "{colors.drafting-paper}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "26px"
---

# Design System: Om Patel Engineering Portfolio

## Overview

**Creative North Star: "The Instrumented Field Notes"**

The portfolio combines the clarity of engineering field notes with the quiet situational awareness of a control room. Real photographs, implementation screenshots, diagrams, measurements, and technical labels are the visual authority. The interface frames that evidence with a warm editorial canvas, firm typographic hierarchy, squared controls, and compact mono metadata.

The system should feel precise and confident while retaining the physical, experimental character of student engineering work. Control-room influence appears through status cues, numbered rows, calibrated spacing, and decisive interaction states—not simulated telemetry, glowing HUD ornaments, or theatrical cyberpunk effects. It must also avoid generic SaaS card language and sparse résumé-template minimalism.

**Key Characteristics:**

- Evidence-led imagery and measurable project outcomes.
- Large editorial headlines paired with compact mono annotations.
- Warm paper neutrals, carbon text, and one controlled orange signal.
- Flat, rule-based structure with tactile interaction feedback.
- Dense enough to communicate technical range without becoming dashboard-like.

## Colors

The palette is warm, material, and high-contrast. Orange acts as a signal rather than a wash; neutrals carry almost every surface and structural boundary.

### Primary

- **Burnt Signal Orange** (`#e7643a`): Used for active navigation, project types, numbered system cues, the current-work ribbon, and decisive hover states.

### Neutral

- **Drafting Paper** (`#f2f0ea`): Default page and project-card surface.
- **Warm White** (`#faf9f5`): High-contrast text over dark imagery and the primary hero action.
- **Carbon Ink** (`#111210`): Primary text, strong rules, and selected controls.
- **Instrument Gray** (`#666860`): Supporting copy and secondary metadata.
- **Rule Gray** (`#cbc9c0`): Dividers, card seams, and resting control borders.
- **Control Room Black** (`#171916`): Contact, footer, and dark technical surfaces.

**The Signal Rarity Rule.** Burnt Signal Orange marks state, category, or action; it does not become a decorative background except for the narrow current-work ribbon.

**The Warm Neutral Rule.** Use the established warm neutrals instead of pure white, blue-gray, or generic dashboard surfaces.

## Typography

**Display Font:** Arial (with Helvetica and sans-serif fallback)  
**Body Font:** Arial (with Helvetica and sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** The grotesk display voice is immediate and recruiter-readable. JetBrains Mono introduces engineering specificity through metadata, dates, metrics, technology labels, and system status without taking over long-form reading.

### Hierarchy

- **Display** (800, `clamp(3rem, 7vw, 6rem)`, 0.94): Hero statements only; large, compact, and allowed to span multiple lines.
- **Headline** (700, `clamp(2.4rem, 5vw, 5.3rem)`, 0.98): Section and collection introductions.
- **Title** (700–800, responsive 1.1–2.8rem, 1.15): Projects, roles, and capability families.
- **Body** (400, 1rem, 1.5): Descriptions and evidence summaries, generally constrained to roughly 65–75 characters per line.
- **Label** (700, approximately 0.7rem, 0.04–0.08em, uppercase): Eyebrows, project types, technologies, dates, and system status.

**The Two-Voice Rule.** Sans-serif carries narrative and hierarchy; mono carries evidence and instrumentation. Do not set paragraphs or major headlines in mono.

## Layout

The core content width is 1240px with a responsive outer gutter of `clamp(20px, 4vw, 64px)`. Major sections use measured vertical intervals of `clamp(72px, 9vw, 132px)`, while content inside rows stays materially denser. Thin 1px rules establish grouping before background panels or shadows are considered.

The homepage begins as a full-bleed photographic poster, followed by a narrow live-status ribbon and a two-column evidence grid. Experience and capabilities use structured, scan-friendly rows. At 900px, multi-column technical rows collapse while preserving label hierarchy; at 680px, navigation becomes a menu and evidence grids become single-column.

**The Evidence Grid Rule.** Imagery, titles, measurements, and links align to a shared grid; ornamental cards do not interrupt the reading path.

## Elevation & Depth

The system is flat and structural. Depth comes from full-bleed photography, dark-versus-paper tonal changes, image cropping, borders, and interaction-driven motion. Resting project surfaces do not float. Shadows are reserved for the active project modal and the highlighted projects navigation control, where elevation communicates genuine layering or priority.

### Shadow Vocabulary

- **Navigation signal** (`0 8px 28px rgba(231, 100, 58, .24)`): A restrained orange halo behind the active Projects control.
- **Modal overlay** (`0 30px 90px rgba(0, 0, 0, .3)`): Structural depth for the project-detail layer only.

**The Flat-at-Rest Rule.** Static content remains flat; shadows appear only when an element is genuinely layered or actively prioritized.

## Shapes

Rectangles are square by default. Buttons, chips, inputs, cards, status labels, and panels use zero corner radius. Circles are reserved for compact directional or dismiss controls and the live availability dot. Fine rules and diamond ticker separators provide the small geometric instrumentation cues.

**The Purposeful Circle Rule.** A circle must contain a single compact action or live status; it is not a decorative container.

## Components

Components should feel like tactile lab controls contained within an editorial page: squared, direct, and visibly responsive.

### Buttons

- **Shape:** Square and compact (0 radius, 46px minimum height).
- **Primary:** Warm White over dark hero media with 18px horizontal padding; on hover it switches decisively to Burnt Signal Orange.
- **Hover / Focus:** Small 2px lift for pointer feedback and a visible high-contrast focus treatment.
- **Text links:** Bold, undecorated labels with a restrained northeast arrow shift on hover.

### Chips

- **Style:** Transparent squared controls with a 1px Rule Gray border and compact 34px height.
- **State:** Hovered or selected chips invert to Carbon Ink with Warm White text.

### Cards / Containers

- **Corner Style:** Square (0 radius).
- **Background:** Drafting Paper separated by 1px Rule Gray seams.
- **Shadow Strategy:** None at rest.
- **Border:** Grid-level rules define adjacent project items.
- **Internal Padding:** Responsive 20–30px for featured work and 26px for project-browser cards.

### Inputs / Fields

- **Style:** Transparent, full-width fields with only a bottom rule and no radius.
- **Focus:** The bottom rule changes to Burnt Signal Orange; keyboard focus must remain visible.

### Navigation

Navigation uses bold compact sans-serif labels over the hero and Carbon Ink on interior pages. Projects is the single filled signal action. Contact is outlined. The mobile menu becomes a dark planar overlay rather than a floating rounded panel.

### Current-Work Ribbon

A narrow Burnt Signal Orange ticker carries one repeated uppercase mono status sequence. Two identical tracks loop continuously; hover pauses the motion, and reduced-motion preferences stop it.

## Do's and Don'ts

### Do:

- **Do** lead with real project media, implementation screenshots, and measured outcomes.
- **Do** use thin rules, grid alignment, and warm tonal shifts to organize information.
- **Do** keep system labels short, uppercase, and mono while narrative copy stays in sans-serif.
- **Do** make hover, focus, active, and modal states decisive and accessible.
- **Do** preserve the honest status of unfinished work.

### Don't:

- **Don't** turn the site into a generic SaaS landing page with rounded card stacks, gradients, or feature-pill clutter.
- **Don't** imitate cyberpunk dashboards with glowing telemetry, faux terminals, scan lines, or decorative HUD overlays.
- **Don't** reduce the portfolio to a sparse résumé template that hides project artifacts and technical evidence.
- **Don't** use Burnt Signal Orange as ambient decoration or flood large content surfaces with it.
- **Don't** add promotional claims, fabricated metrics, or visual treatments that imply unfinished work is complete.
