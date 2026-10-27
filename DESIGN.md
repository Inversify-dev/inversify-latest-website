# Inversify - Brand Guidelines & Design System

## Brand Identity Overview

**Brand Name:** Inversify (Software Agency)  
**Tagline:** Ideas. Code. Impact. / Solutions for what's next.  
**Personality:** Innovative, Reliable, Agile, Premium, Forward-Thinking  
**Hero Visual:** Sleek flowing waves and glowing gradient ribbons of Neon Cyan (`#76F6F5`) and Vivid Purple (`#B541FA`) on Deep Indigo (`#211851`)  

---

## 🎨 Brand Color Palette

| Color Token | Hex Code | Role & Application |
| :--- | :--- | :--- |
| **Vivid Purple** | `#B541FA` | **Primary Brand Color:** Main CTAs, glowing buttons, key brand marks, active highlights |
| **Neon Cyan** | `#76F6F5` | **Secondary Accent Color:** Hover states, icons, active indicator dots, date tags, subtitle kickers |
| **Deep Indigo** | `#211851` | **Depth & Container Surfaces:** Section backgrounds, card depth, footer backdrop |
| **Dark Base** | `#09061A` | Luxury dark space foundation |
| **White** | `#FFFFFF` | High-contrast display headings, crisp readable copy |
| **Black** | `#000000` | Pure contrast on bright gradient button states |

---

## 🌈 Brand Gradients

| Gradient Name | Color Flow | CSS Implementation |
| :--- | :--- | :--- |
| **Hero Gradient** | `#B541FA` → `#76F6F5` | `linear-gradient(135deg, #B541FA 0%, #76F6F5 100%)` |
| **Accent Gradient** | `#B541FA` → `#211851` | `linear-gradient(135deg, #B541FA 0%, #211851 100%)` |
| **Card Glass Surface** | `#211851` → `#0A061C` | `linear-gradient(160deg, rgba(33, 24, 81, 0.55) 0%, rgba(10, 6, 28, 0.85) 100%)` |

---

## 🔤 Typography Hierarchy (Revamped High-Impact Brand System)

| Font Family | Role & Usage Across Site |
| :--- | :--- |
| **Raisah** | **Primary Display Headline Voice:** Main Hero Headline, Page Titles, Section Titles (H1, H2, H3), Card Primary Titles, Navigation & CTA Links |
| **Syne (Bold 700)** | **Creative & Art-Led Display Accent:** Hero Headline Accent (*"digital"*), Chapter Kickers, Section Toplines, Big Metric Counters (`250+`), Funfact Numbers, Badges & Overlines |
| **Plus Jakarta Sans / Satoshi** | **Refined Body Reading:** Body Copy, Descriptive Paragraphs, Service Details, FAQ Answers, Form Inputs (Zero generic system fonts) |
| **Space Grotesk / IBM Plex Mono** | **Technical Wayfinding:** Code metadata, technical dates, system coordinates |
| **Font Awesome 6 Pro** | Vector arrows, rating stars, social handles, interactive triggers |

---

## 📐 Layout & Spacing Principles

- **Spacious & Uncluttered:** Section padding set to `120px–140px` on desktop and `70px–80px` on mobile/tablet.
- **Card Breathing Room:** Minimum `42px 34px` padding on card components with `32px` grid gap.
- **Fluid Typography:** Scales seamlessly across all display widths with `clamp()` without cramping.
- **Zero Horizontal Overflow:** 100% responsive across mobile (320px–576px), tablet (577px–991px), and desktop (992px+).
