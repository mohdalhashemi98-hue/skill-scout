# SkillScout Design System

## Gen Z Dark Glassmorphism

**Version:** 1.0
**Last updated:** 2026-03-07
**Status:** Production
**Stack:** Next.js + Tailwind CSS + shadcn/ui + Motion (Framer Motion) + GSAP ScrollTrigger + Lenis + Spline

This document is the single source of truth for every visual decision in the SkillScout product. Every component, color, animation, and layout rule lives here. If it is not in this guide, it does not ship.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Glassmorphism System](#3-glassmorphism-system)
4. [Typography Scale](#4-typography-scale)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Library](#6-component-library)
7. [Animation & Motion](#7-animation--motion)
8. [3D Elements](#8-3d-elements)
9. [Iconography](#9-iconography)
10. [Noise, Grain & Texture](#10-noise-grain--texture)
11. [Accessibility](#11-accessibility)
12. [Responsive Design](#12-responsive-design)
13. [Dark Mode](#13-dark-mode)
14. [Code Reference](#14-code-reference)

---

## 1. Brand Identity

### Logo

The SkillScout logo is a stacked-layers icon (representing systems, files, and automation layers) set inside a rounded-lg square with a `primary -> accent` diagonal gradient.

| Property | Value |
|----------|-------|
| Icon container | `h-8 w-8 rounded-lg` |
| Gradient | `bg-gradient-to-br from-primary to-accent` |
| Icon | Stacked layers SVG, white stroke, `strokeWidth="2.5"` |
| Icon size | 18x18 inside 32x32 container |

**Wordmark:** "Skill" in white, "Scout" in `text-primary`. Font: Inter, `text-lg font-bold tracking-tight`.

**Logo clear space:** Maintain at least 8px (0.5rem) padding on all sides. Never place the logo on a busy background without a glass surface behind it.

**Logo misuse:**
- Do not rotate or skew the logo
- Do not change gradient colors
- Do not add drop shadows to the icon
- Do not use the wordmark without the icon in primary branded contexts

### Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Confident** | We know what we built works. No hedging, no "might" or "could." |
| **Technical but approachable** | Use real terminology (CLI, API, webhook) but explain in plain terms. |
| **Direct** | Short sentences. No filler. Every word earns its place. |
| **Gen Z native** | Casual where appropriate, never corporate-speak. Contractions welcome. |

**Headlines:** Bold, imperative. Lead with the outcome.
- Good: "AI Chatbots That Access Your Systems"
- Bad: "Introducing Our Advanced AI Chatbot Solution Platform"

**Body copy:** Conversational, benefit-led. Max 2 sentences per paragraph in marketing contexts.

### Typography Families

| Family | Use | Source |
|--------|-----|--------|
| **Inter** | All UI text, headings, body | Google Fonts, weights 300-900 |
| **JetBrains Mono** | Code blocks, terminal previews, step labels, monospace accents | Google Fonts, weights 400-700 |

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap");
```

Tailwind config:

```ts
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "monospace"],
}
```

---

## 2. Color System

### Core Palette

| Token | Hex | RGB | Tailwind Class | Usage |
|-------|-----|-----|----------------|-------|
| `background` | `#0A0A0F` | `10, 10, 15` | `bg-background` | Page background, root |
| `surface` | `#1A1A2E` | `26, 26, 46` | `bg-surface` | Cards, panels, elevated UI |
| `primary` | `#6A5BCD` | `106, 91, 205` | `text-primary`, `bg-primary` | Brand purple, CTAs, links, accents |
| `accent` | `#FF6E61` | `255, 110, 97` | `text-accent`, `bg-accent` | Coral highlights, secondary CTAs |
| `success` | `#6FBE8D` | `111, 190, 141` | `text-success`, `bg-success` | Confirmations, checkmarks, online states |
| `warning` | `#F7C94B` | `247, 201, 75` | `text-warning`, `bg-warning` | Alerts, file paths, caution states |
| `muted` | `#E0E0E0` | `224, 224, 224` | `text-muted` | Default body text |

### Opacity Variants

These are used extensively throughout the codebase. Apply with Tailwind's `/` opacity syntax.

| Pattern | Example | Usage |
|---------|---------|-------|
| Full text | `text-white` | Headlines, emphasized words |
| Body text | `text-muted` (`#E0E0E0`) | Primary body copy |
| Secondary text | `text-muted/60` | Descriptions, subtitles |
| Tertiary text | `text-muted/50` | Supporting text, card descriptions |
| Quaternary text | `text-muted/40` | Pricing descriptions, use-case lists |
| Ghost text | `text-muted/30` | Step labels, trust signals, timestamps |
| Border default | `border-white/5` | Subtle separators, section borders |
| Border interactive | `border-white/10` | Card borders, input borders |
| Border hover | `border-white/20` | Hover states on bordered elements |
| Border branded | `border-primary/15` | Glass card default border |
| Border branded hover | `border-primary/30 -> border-primary/40` | Badge borders, CTA outlines |
| Background tint | `bg-white/5` | Ghost button, surface tint |
| Background hover | `bg-white/10` | Ghost button hover |
| Primary tint | `bg-primary/10` | Badge backgrounds, soft CTAs |
| Primary tint hover | `bg-primary/20` | Badge hover, soft CTA hover |

### Gradient Recipes

| Name | CSS/Tailwind | Usage |
|------|-------------|-------|
| **Brand gradient** | `linear-gradient(135deg, #6A5BCD, #FF6E61)` / `bg-gradient-to-br from-primary to-accent` | Logo, glow button, "Most Popular" badge |
| **Text gradient** | Applied via `.text-gradient` class | Section headline keywords ("automate", "your industry", "three steps") |
| **Hero orb (purple)** | `radial-gradient(circle, rgba(106,91,205,0.25) 0%, transparent 70%)` | Hero background, 600x600px |
| **Hero orb (coral)** | `radial-gradient(circle, rgba(255,110,97,0.15) 0%, transparent 70%)` | Hero background, 500x500px |
| **Section fade** | `bg-gradient-to-b from-transparent via-surface/30 to-transparent` | "How It Works" and "Pricing" section backgrounds |
| **Bottom fade** | `bg-gradient-to-t from-background to-transparent` | Hero section bottom edge |
| **Section divider** | `linear-gradient(90deg, transparent, rgba(106,91,205,0.3), transparent)` | Horizontal separators between footer sections |
| **Industry icon primary** | `from-primary/20 to-primary/5` | Legal industry card icon |
| **Industry icon coral** | `from-accent/20 to-accent/5` | Real Estate industry card icon |
| **Industry icon green** | `from-success/20 to-success/5` | Healthcare industry card icon |
| **Industry icon yellow** | `from-warning/20 to-warning/5` | Logistics industry card icon |

### Selection Color

```css
::selection {
  background: rgba(106, 91, 205, 0.4);
  color: #ffffff;
}
```

---

## 3. Glassmorphism System

### Glass Card Base

The `.glass` class is the foundation of every card, panel, nav, and modal in the system.

| Property | Value |
|----------|-------|
| Background | `rgba(26, 26, 46, 0.6)` — surface color at 60% opacity |
| Backdrop filter | `blur(16px)` |
| Border | `1px solid rgba(106, 91, 205, 0.15)` |
| Border radius | `16px` (`rounded-2xl`) |

```css
.glass {
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(106, 91, 205, 0.15);
  border-radius: 16px;
}
```

### Glass Hover State

The `.glass-hover` class adds interactive lift and glow on hover.

| Property | Default | Hover |
|----------|---------|-------|
| Background opacity | 60% | 80% |
| Border color | `rgba(106, 91, 205, 0.15)` | `rgba(106, 91, 205, 0.4)` |
| Transform | none | `translateY(-4px)` |
| Box shadow | none | `0 8px 32px rgba(106,91,205,0.15), 0 0 0 1px rgba(106,91,205,0.1)` |
| Transition | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` | -- |

### Glass Nesting Rules

| Scenario | Rule |
|----------|------|
| Glass inside glass | Reduce inner card background opacity to 40%. Reduce blur to 8px. |
| Nav (fixed glass) | Use `rounded-none` override. Add `border-b border-white/5`. |
| CTA section glass | Use `rounded-3xl` for the large container variant. |
| Terminal inside glass | Add a separate `bg-surface/50` header bar with `border-b border-white/5`. |

### Do's and Don'ts

**Do:**
- Always pair `.glass` with `.glass-hover` on interactive cards
- Use `overflow-hidden` on glass cards that contain gradient orbs or images
- Maintain minimum `p-6` padding inside glass cards
- Use the standard border color (`primary/15`) for consistency

**Don't:**
- Stack more than 2 levels of glass (causes blur compounding and performance issues)
- Use glass on elements smaller than 80x80px (the blur becomes pointless)
- Apply glass to inline text elements or spans
- Use glass without the noise overlay active on the page (it loses the frosted look)
- Override the border-radius to less than `12px` on glass cards

---

## 4. Typography Scale

### Heading Scale

| Level | Classes | Size (mobile) | Size (desktop) | Weight | Line Height |
|-------|---------|--------------|----------------|--------|-------------|
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` | 36px | 72px | `font-extrabold` (800) | `leading-[1.1]` |
| Section H2 | `text-3xl sm:text-4xl md:text-5xl` | 30px | 48px | `font-bold` (700) | default |
| Card H3 | `text-xl` or `text-lg` | 18-20px | 18-20px | `font-bold` (700) or `font-semibold` (600) | default |
| Tier name | `text-lg` | 18px | 18px | `font-semibold` (600) | default |

### Body Scale

| Usage | Classes | Size | Weight | Color |
|-------|---------|------|--------|-------|
| Hero subtitle | `text-base sm:text-lg md:text-xl` | 16-20px | `font-normal` (400) | `text-muted/60` |
| Section subtitle | `text-base sm:text-lg` | 16-18px | `font-normal` (400) | `text-muted/50` |
| Card body | `text-sm` | 14px | `font-normal` (400) | `text-muted/50` |
| Feature list | `text-sm` | 14px | `font-normal` (400) | `text-muted/60` |
| Small labels | `text-xs` | 12px | `font-semibold` (600) | `text-primary` |
| Trust signals | `text-xs` | 12px | `font-medium` (500) | `text-muted/30` |

### Monospace Usage

| Context | Classes |
|---------|---------|
| Terminal body | `font-mono text-sm` |
| Terminal header label | `font-mono text-xs text-muted/30` |
| Step labels | `font-mono text-xs text-muted/30 tracking-widest uppercase` |
| Footer tech labels | `font-mono text-primary/60` or `font-mono text-accent/60` |

### Tracking (Letter Spacing)

| Pattern | Class | Where used |
|---------|-------|------------|
| Tight headline | `tracking-tight` | H1, wordmark |
| Normal body | default | Body copy |
| Wide label | `tracking-wide` | Badge text |
| Widest label | `tracking-widest` | Section labels ("Capabilities", "Process", "Pricing"), trust signals |

### Line Height

| Context | Class |
|---------|-------|
| Hero headline | `leading-[1.1]` (tight) |
| Card body | `leading-relaxed` (1.625) |
| Footer description | `leading-relaxed` |

---

## 5. Spacing & Layout

### Container

All page sections use a consistent max-width container:

```html
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

| Property | Value |
|----------|-------|
| Max width | `max-w-7xl` (80rem / 1280px) |
| Padding (mobile) | `px-4` (16px) |
| Padding (tablet) | `sm:px-6` (24px) |
| Padding (desktop) | `lg:px-8` (32px) |
| Centering | `mx-auto` |

### Section Spacing

| Pattern | Classes |
|---------|---------|
| Standard section | `py-24 sm:py-32` (96px mobile, 128px desktop) |
| Hero section | `min-h-screen pt-16` (full viewport, nav offset) |
| Section header margin bottom | `mb-16` or `mb-20` |
| Footer | `py-16` (64px) |

### Card Padding

| Card type | Padding |
|-----------|---------|
| Feature card | `p-6` (24px) |
| Step card | `p-8` (32px) |
| Industry card | `p-8` (32px) |
| Pricing card | `p-8` (32px) |
| CTA container | `p-10 sm:p-16` (40px mobile, 64px desktop) |
| Terminal preview | `px-6 py-5` |

### Grid Layouts

| Section | Grid | Gap |
|---------|------|-----|
| Features | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` | `gap-6` |
| How It Works | `grid-cols-1 md:grid-cols-3` | `gap-8 lg:gap-12` |
| Industries | `grid-cols-1 sm:grid-cols-2` | `gap-6` |
| Pricing | `grid-cols-1 md:grid-cols-3` | `gap-6 lg:gap-8` |
| Footer | `grid-cols-2 md:grid-cols-5` | `gap-8` |

### Content Width Constraints

| Content | Class |
|---------|-------|
| Section subtitles | `max-w-xl` (36rem / 576px) |
| Hero subtitle | `max-w-2xl` (42rem / 672px) |
| Terminal preview | `max-w-2xl` |
| CTA subtitle | `max-w-lg` (32rem / 512px) |
| Footer description | `max-w-xs` (20rem / 320px) |

---

## 6. Component Library

### Buttons

#### Glow Button (Primary CTA)

The glow button uses a gradient background with a blurred gradient pseudo-element behind it for the glow effect.

| Property | Value |
|----------|-------|
| Background | `linear-gradient(135deg, #6A5BCD, #FF6E61)` |
| Border radius | `12px` (`rounded-xl`) |
| Padding | `14px 32px` (default) or `py-4 px-8` (hero variant) |
| Color | `#FFFFFF` |
| Font weight | 600 (`font-semibold`) |
| Font size | `1rem` (16px) |
| Glow blur | `filter: blur(12px)` on `::before` pseudo |
| Glow opacity | 0.5 default, 0.8 on hover |
| Hover transform | `translateY(-2px)` |
| Hover shadow | `0 0 30px rgba(106,91,205,0.4), 0 0 60px rgba(255,110,97,0.2)` |
| Active transform | `translateY(0)` |
| Transition | `all 0.3s ease` |

Apply with: `className="glow-button"`

#### Ghost Button (Secondary CTA)

| Property | Value |
|----------|-------|
| Background | `bg-white/5` |
| Border | `border border-white/10` |
| Border radius | `rounded-xl` |
| Padding | `px-8 py-4` |
| Text color | `text-muted` |
| Font weight | `font-medium` (500) |
| Hover background | `bg-white/10` |
| Hover border | `border-white/20` |
| Transition | `transition-all duration-200` |

```html
<a className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200">
```

#### Outline Button (Soft CTA)

Used for nav CTAs and non-primary actions.

| Property | Value |
|----------|-------|
| Background | `bg-primary/10` |
| Border | `border border-primary/30` |
| Border radius | `rounded-lg` |
| Padding | `px-4 py-2` |
| Text color | `text-primary` |
| Font weight | `font-medium` (500) |
| Font size | `text-sm` |
| Hover background | `bg-primary/20` |
| Hover border | `border-primary/50` |
| Transition | `transition-all duration-200` |

```html
<a className="rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-200">
```

### Cards

#### Feature Card

```html
<div className="glass glass-hover p-6 flex flex-col">
  <!-- Icon + Tag row -->
  <div className="flex items-center justify-between mb-5">
    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
      <!-- Lucide icon -->
    </div>
    <span className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 bg-primary/20 text-primary">
      Tag
    </span>
  </div>
  <!-- Content -->
  <h3 className="text-lg font-semibold text-white mb-2">Title</h3>
  <p className="text-sm text-muted/50 leading-relaxed flex-1">Description</p>
  <!-- Bottom accent line -->
  <div className="mt-5 h-px bg-gradient-to-r from-primary/30 to-transparent" />
</div>
```

#### Pricing Card

Standard: glass card with `hover:-translate-y-2`.
Highlighted: adds `border-primary/40 shadow-lg shadow-primary/10 md:scale-105`.

#### Industry Card

Glass card with icon-left, content-right layout using `flex items-start gap-5`. Icon container is `h-14 w-14 rounded-2xl` with industry-specific gradient.

### Badges

#### Status Badge (Hero)

```html
<div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
  <span className="text-xs font-medium text-primary tracking-wide uppercase">
    Now accepting new clients
  </span>
</div>
```

#### Feature Tag Badge

```html
<span className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 bg-primary/20 text-primary">
  Core
</span>
```

Tag color mapping:

| Tag | Background | Text |
|-----|-----------|------|
| Core | `bg-primary/20` | `text-primary` |
| Power | `bg-accent/20` | `text-accent` |
| Reach | `bg-success/20` | `text-success` |
| Secure | `bg-warning/20` | `text-warning` |

#### Pricing Badge ("Most Popular")

```html
<span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white shadow-lg">
  Most Popular
</span>
```

Positioned with `absolute -top-3 left-1/2 -translate-x-1/2`.

### Navigation

Fixed glass navbar with `z-50`, full width, no border-radius.

| Property | Value |
|----------|-------|
| Position | `fixed top-0 left-0 right-0 z-50` |
| Style | `.glass` with `rounded-none` override |
| Height | `h-16` (64px) |
| Border bottom | `border-b border-white/5` |
| Container | `max-w-7xl mx-auto` |

**Nav links:** `text-sm text-muted/70` with underline-on-hover animation using `after:` pseudo-element:

```html
className="text-sm text-muted/70 hover:text-white transition-colors duration-200
  relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
  after:w-0 after:bg-primary after:transition-all after:duration-300
  hover:after:w-full"
```

**Mobile menu:** `max-h-0` to `max-h-64` transition with `overflow-hidden transition-all duration-300`.

**Mobile hamburger:** Three bars with rotation transform for X animation when open.

### Inputs (Design Spec)

When building form inputs, follow this pattern:

| Property | Value |
|----------|-------|
| Background | `bg-white/5` |
| Border | `border border-white/10` |
| Border radius | `rounded-xl` |
| Padding | `px-4 py-3` |
| Text color | `text-white` |
| Placeholder color | `placeholder:text-muted/30` |
| Focus border | `focus:border-primary/50` |
| Focus ring | `focus:ring-2 focus:ring-primary/20` |
| Transition | `transition-all duration-200` |

### Modals (Design Spec)

| Property | Value |
|----------|-------|
| Overlay | `bg-background/80 backdrop-blur-sm` |
| Container | `.glass rounded-2xl p-8 max-w-lg mx-auto` |
| Close button | Top-right, `text-muted/40 hover:text-white` |
| Animation in | `fade-in-up 0.3s ease-out` |
| Animation out | Reverse with `opacity 0 translateY(10px)` |

### Tooltips (Design Spec)

| Property | Value |
|----------|-------|
| Background | `bg-surface border border-white/10` |
| Border radius | `rounded-lg` |
| Padding | `px-3 py-2` |
| Text | `text-xs text-muted` |
| Shadow | `shadow-xl shadow-background/50` |
| Arrow | 6px CSS triangle in `border-surface` |

### Terminal Preview

The terminal is a glass card containing a simulated chat interface:

| Part | Classes |
|------|---------|
| Container | `.glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5` |
| Header bar | `flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface/50` |
| Traffic lights | Three `h-3 w-3 rounded-full` spans: `bg-accent/80`, `bg-warning/80`, `bg-success/80` |
| Header label | `ml-3 text-xs text-muted/30 font-mono` |
| Body | `px-6 py-5 space-y-3 text-left font-mono text-sm` |
| User message | `text-primary font-semibold` for label, `text-muted/80` for text |
| Bot message | `text-success font-semibold` for label, `text-muted/80` for text |
| Typing indicator | `h-2 w-2 rounded-full bg-primary animate-pulse` + `text-xs text-muted/30` |

---

## 7. Animation & Motion

### Core Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| Default ease | `cubic-bezier(0.4, 0, 0.2, 1)` | Glass hover transitions |
| Standard ease | `ease` | Glow button, generic transitions |
| Ease out | `ease-out` | Fade-in-up entrance animations |
| Ease in-out | `ease-in-out` | Float, gradient-shift loops |

### Duration Scale

| Duration | Usage |
|----------|-------|
| `150ms` | Instant feedback (active states) |
| `200ms` | Hover transitions (color, background, border) |
| `300ms` | Transform transitions (translate, scale), menu toggle |
| `600ms` | Entrance animations (fade-in-up) |
| `2s` | Glow pulse loop |
| `6s` | Float loop |
| `8s` | Gradient shift loop, hero orb float |
| `10s` | Secondary hero orb float (reverse) |

### Keyframe Animations

#### Fade In Up (Entrance)

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
```

Stagger with delay utilities:

| Class | Delay |
|-------|-------|
| `animate-delay-100` | 100ms |
| `animate-delay-200` | 200ms |
| `animate-delay-300` | 300ms |
| `animate-delay-400` | 400ms |

Usage pattern: Badge (0ms) -> H1 (100ms) -> Subtitle (200ms) -> CTAs (300ms) -> Terminal (400ms).

#### Float (Ambient)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-20px); }
}
```

Duration: `6s ease-in-out infinite`. Used on hero gradient orbs.

#### Glow Pulse (Ambient)

```css
@keyframes glow-pulse {
  0%   { box-shadow: 0 0 20px rgba(106, 91, 205, 0.3); }
  100% { box-shadow: 0 0 40px rgba(106, 91, 205, 0.6); }
}
```

Duration: `2s ease-in-out infinite alternate`.

#### Gradient Shift (Background)

```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
```

Duration: `8s ease infinite`.

### Hover Microinteractions

| Element | Interaction |
|---------|-------------|
| Glass card | `translateY(-4px)`, border brightens, shadow appears |
| Glow button | `translateY(-2px)`, glow intensifies (opacity 0.5 -> 0.8) |
| Ghost button | Background and border opacity increase |
| Nav link | Underline slides in from left (`width: 0 -> 100%`) |
| Logo icon | `scale-110` on parent group hover |
| Industry/Step icon | `scale-110` on parent group hover |
| Pricing card (all) | `translateY(-8px)` via `hover:-translate-y-2` |
| Social icons | `text-muted/40 -> text-white`, border and bg shift to primary tints |

### Scroll-Triggered Animations (GSAP ScrollTrigger)

When implementing scroll-triggered animations, follow these patterns:

```js
// Standard section reveal
gsap.from(".section-element", {
  scrollTrigger: {
    trigger: ".section-element",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
});
```

| Parameter | Value | Notes |
|-----------|-------|-------|
| Trigger start | `top 80%` | Element enters viewport at 80% scroll |
| y offset | 30-40px | Consistent with fade-in-up animation |
| Duration | 0.6-0.8s | |
| Ease | `power2.out` | GSAP equivalent of ease-out |
| Stagger | 0.1-0.15s | Between sibling elements |

### Page Transitions (Framer Motion)

```tsx
// Standard page wrapper
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
```

### Smooth Scrolling (Lenis)

```ts
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
```

### Parallax Guidelines

| Layer | Speed | Usage |
|-------|-------|-------|
| Background orbs | 0.3x (slow) | Hero gradient orbs |
| Grid pattern | 0.5x | Grid overlay |
| Content | 1x (normal) | Text, cards |
| Floating elements | 1.2x (fast) | 3D elements, decorative objects |

---

## 8. 3D Elements

### Spline Integration (Current)

For embedding Spline scenes in Next.js:

```tsx
import Spline from "@splinetool/react-spline";

<Spline
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  style={{ width: "100%", height: "400px" }}
/>
```

### Performance Budget

| Metric | Limit |
|--------|-------|
| Scene file size | < 2MB compressed |
| Polygon count | < 50K triangles |
| Textures | Max 2048x2048, prefer 1024x1024 |
| Animation keyframes | < 300 per scene |
| Load time | < 3s on 4G connection |
| Frame rate target | 60fps on mid-tier devices |

### 3D Design Rules

| Rule | Details |
|------|---------|
| Color palette | Match brand colors exactly. Use `#6A5BCD`, `#FF6E61`, `#0A0A0F`, `#1A1A2E` |
| Lighting | Dark ambient with purple/coral point lights |
| Materials | Glass/translucent materials preferred (matches glassmorphism) |
| Background | Transparent, so the scene sits on the `#0A0A0F` page background |
| Interaction | Subtle mouse-follow rotation only. No drag-to-rotate unless it is the primary UI |

### Fallback Strategy

Always provide a fallback for devices that cannot render 3D:

```tsx
<div className="relative">
  {/* 3D Scene */}
  <Suspense fallback={<SplineFallback />}>
    <Spline scene="..." />
  </Suspense>
</div>

// Fallback: static gradient illustration or Lottie animation
function SplineFallback() {
  return (
    <div className="h-[400px] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
      <span className="text-muted/30 text-sm">Loading 3D scene...</span>
    </div>
  );
}
```

### React Three Fiber Migration Path (Advanced)

When migrating from Spline to R3F for more control:

| Spline | React Three Fiber Equivalent |
|--------|------------------------------|
| Scene URL embed | `<Canvas>` with custom geometry |
| Spline materials | `meshPhysicalMaterial` with `transmission`, `roughness` |
| Mouse interaction | `useFrame` + pointer events |
| Animations | `useSpring` (react-spring) or `gsap` |

---

## 9. Iconography

### Icon Library

**Primary:** Lucide Icons (https://lucide.dev)
**Current:** Custom inline SVGs matching Lucide style

### Icon Specifications

| Property | Value |
|----------|-------|
| Default size | `24x24` |
| Small size | `14-16px` (checkmarks, trust signals) |
| Large size | `28px` (step icons in "How It Works") |
| Stroke width | `2` (default) or `2.5` (emphasis, small icons) |
| Stroke linecap | `round` |
| Stroke linejoin | `round` |
| Fill | `none` (outline style only) |

### Size Grid

| Context | Size | viewBox |
|---------|------|---------|
| Feature card icon | 24x24 | `0 0 24 24` |
| Step icon | 28x28 | `0 0 24 24` |
| Nav logo icon | 18x18 | `0 0 24 24` |
| Checkmark (lists) | 14-16px | `0 0 24 24` |
| Social icons | 16x16 | `0 0 24 24` |

### Icon Color Rules

| Context | Color |
|---------|-------|
| Feature card icon | `text-primary` (inherits via `currentColor`) |
| Step icon | `text-white` (on gradient background) |
| Checkmark | `text-success` |
| Social icon default | `text-muted/40` |
| Social icon hover | `text-white` |

### Icon Containers

| Type | Classes |
|------|---------|
| Feature card icon box | `h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center` |
| Step icon box | `h-16 w-16 rounded-2xl bg-gradient-to-br {accent} flex items-center justify-center` |
| Industry icon box | `h-14 w-14 rounded-2xl bg-gradient-to-br {gradient} border border-white/10 flex items-center justify-center` |
| Social icon box | `h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center` |

### Migrating to Lucide React

When replacing inline SVGs with the Lucide library:

```tsx
import { FileText, Terminal, MessageCircle, Lock } from "lucide-react";

<FileText size={24} strokeWidth={2} />
```

Maintain the same container patterns. Lucide icons use `currentColor` by default, so color is controlled by the parent's `text-*` class.

---

## 10. Noise, Grain & Texture

### SVG Noise Overlay

Applied as a `::before` pseudo-element on `<body>`:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}
```

| Parameter | Value | Notes |
|-----------|-------|-------|
| Noise type | `fractalNoise` | Organic, film-grain look |
| Base frequency | `0.9` | Higher = finer grain |
| Octaves | `4` | More octaves = more detail |
| Tile stitching | `stitch` | Seamless repeat |
| Opacity | `0.035` (3.5%) | Subtle, never distracting |
| Tile size | `200x200px` | Repeating tile |
| Z-index | `9999` | Above everything |
| Pointer events | `none` | Click-through |
| Position | `fixed` | Stays during scroll |

**Do not adjust opacity above 0.05.** The noise should be felt, not seen.

### Grid Pattern Overlay

Used in the hero section for a subtle technical feel:

```tsx
<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "linear-gradient(rgba(106,91,205,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(106,91,205,0.3) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }}
/>
```

| Parameter | Value |
|-----------|-------|
| Grid color | `rgba(106, 91, 205, 0.3)` (primary at 30%) |
| Line width | `1px` |
| Grid size | `60x60px` |
| Overall opacity | `0.03` (3%) |

### Mesh Gradient Recipes

Hero section uses two floating radial-gradient orbs:

**Purple Orb:**
- Size: 600x600px
- Position: `top: -200px; right: -100px`
- Gradient: `radial-gradient(circle, rgba(106,91,205,0.25) 0%, transparent 70%)`
- Animation: `float 8s ease-in-out infinite`

**Coral Orb:**
- Size: 500x500px
- Position: `bottom: -150px; left: -100px`
- Gradient: `radial-gradient(circle, rgba(255,110,97,0.15) 0%, transparent 70%)`
- Animation: `float 10s ease-in-out infinite reverse`

**CTA section blur orbs:**
- Purple: `w-80 h-80 bg-primary/10 rounded-full blur-[100px]` (top-right)
- Coral: `w-60 h-60 bg-accent/10 rounded-full blur-[80px]` (bottom-left)

---

## 11. Accessibility

### Contrast Ratios

| Pair | Ratio | WCAG |
|------|-------|------|
| White (`#FFF`) on background (`#0A0A0F`) | 19.4:1 | AAA |
| Muted (`#E0E0E0`) on background (`#0A0A0F`) | 15.2:1 | AAA |
| Primary (`#6A5BCD`) on background (`#0A0A0F`) | 4.7:1 | AA |
| Accent (`#FF6E61`) on background (`#0A0A0F`) | 5.6:1 | AA |
| Success (`#6FBE8D`) on background (`#0A0A0F`) | 8.2:1 | AAA |
| Warning (`#F7C94B`) on background (`#0A0A0F`) | 11.9:1 | AAA |
| `text-muted/50` effective | ~7.6:1 | AAA |
| `text-muted/30` effective | ~4.6:1 | AA (large text only) |

**Rule:** Any text at `text-muted/30` or lower opacity must be either:
- Large text (18px+ bold or 24px+ regular) for WCAG AA, or
- Decorative/supplementary (not critical for understanding)

### Focus States

All interactive elements must have visible focus states:

```css
/* Default focus ring */
focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background

/* For glass elements */
focus:border-primary/50 focus:ring-2 focus:ring-primary/20
```

When using shadcn/ui components, the built-in focus styles should match the primary color. Override the default ring color:

```css
--ring: 255 106 91 205; /* primary in shadcn format */
```

### Reduced Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

In Framer Motion:

```tsx
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();
```

In GSAP:

```ts
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(0);
}
```

### Screen Reader Considerations

| Pattern | Implementation |
|---------|---------------|
| Decorative elements | Add `aria-hidden="true"` (hero gradient, grid pattern already do this) |
| Hamburger button | `aria-label="Toggle menu"` |
| Social icons | `aria-label="Twitter"`, `aria-label="LinkedIn"`, etc. |
| Icon-only buttons | Always include `aria-label` |
| Gradient text | The `.text-gradient` uses `background-clip: text` which is visually hidden to screen readers but the underlying text is still readable. No extra work needed. |
| Noise overlay | `pointer-events: none` + pseudo-element, invisible to assistive tech. |
| Status badge pulse | The `animate-pulse` dot is decorative. The text label communicates the status. |

### Keyboard Navigation

- All interactive elements must be reachable via Tab
- Maintain logical tab order (left to right, top to bottom)
- Mobile menu should trap focus when open
- Escape key should close mobile menu and modals

---

## 12. Responsive Design

### Breakpoint System

Using Tailwind's default mobile-first breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| (default) | 0px | Mobile phones, single column |
| `sm` | 640px | Large phones, 2-column grids |
| `md` | 768px | Tablets, 3-column grids, desktop nav visible |
| `lg` | 1024px | Desktops, 4-column grids, wider gaps |
| `xl` | 1280px | Large desktops (matches `max-w-7xl`) |
| `2xl` | 1536px | Ultra-wide (not actively used) |

### Responsive Patterns

#### Typography Scaling

```
H1:  text-4xl  -> sm:text-5xl  -> md:text-6xl  -> lg:text-7xl
H2:  text-3xl  -> sm:text-4xl  -> md:text-5xl
Body: text-base -> sm:text-lg   -> md:text-xl (hero only)
```

#### Grid Collapse

```
Features:    1 col -> sm:2 col -> lg:4 col
How It Works: 1 col -> md:3 col
Industries:   1 col -> sm:2 col
Pricing:      1 col -> md:3 col
Footer:       2 col -> md:5 col
```

#### Container Padding

```
px-4 -> sm:px-6 -> lg:px-8
```

#### Section Padding

```
py-24 -> sm:py-32
```

### Touch Targets

Minimum touch target size: **44x44px** (WCAG 2.5.5).

| Element | Current Size | Meets Target |
|---------|-------------|--------------|
| Glow button | `py-4 px-8` (~56px height) | Yes |
| Ghost button | `py-4 px-8` (~56px height) | Yes |
| Outline CTA | `py-2 px-4` (~36px height) | Increase to `py-2.5` for mobile |
| Nav links | Text only, `py-1` on mobile | Add `py-2` on mobile for 44px target |
| Hamburger button | `p-2` (~40px) | Increase to `p-2.5` |
| Social icons | `h-9 w-9` (36px) | Increase to `h-11 w-11` on mobile |

### Mobile-Specific Patterns

| Pattern | Implementation |
|---------|---------------|
| Hamburger menu | 3-bar icon with CSS rotation animation to X |
| CTA stack | `flex-col sm:flex-row` for button pairs |
| Pricing scale | Only apply `md:scale-105` on highlighted card (removes on mobile) |
| Hero height | `min-h-screen` with `pt-16` for nav offset |
| Overflow | `overflow-x: hidden` on body to prevent horizontal scroll |

---

## 13. Dark Mode

### Dark-First Design

SkillScout is a **dark-only** product. The `<html>` element carries `className="dark"` permanently. There is no light mode toggle and no light mode design.

### Why Dark-Only

1. Matches Gen Z design aesthetic expectations
2. Glassmorphism requires dark backgrounds to achieve the frosted effect
3. Reduces complexity (no dual theme maintenance)
4. Terminal/code previews look native on dark backgrounds
5. Noise/grain texture is only visible on dark surfaces

### If Light Mode Is Ever Needed

If a future requirement demands light mode support, the minimum changes would be:

| Token | Dark Value | Light Value (Hypothetical) |
|-------|-----------|---------------------------|
| background | `#0A0A0F` | `#F5F5F7` |
| surface | `#1A1A2E` | `#FFFFFF` |
| glass bg | `rgba(26,26,46,0.6)` | `rgba(255,255,255,0.7)` |
| glass border | `rgba(106,91,205,0.15)` | `rgba(106,91,205,0.2)` |
| body text | `#E0E0E0` | `#1A1A2E` |
| noise opacity | `0.035` | `0.02` |
| scrollbar track | `#0A0A0F` | `#F5F5F7` |

This is documented for reference only. Do not implement light mode unless explicitly approved.

---

## 14. Code Reference

### Custom Scrollbar

```css
/* Webkit (Chrome, Edge, Safari) */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0a0a0f; }
::-webkit-scrollbar-thumb { background: #6a5bcd; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #7d6fe0; }

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #6a5bcd #0a0a0f;
}
```

### Font Smoothing

```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Text Gradient

```css
.text-gradient {
  background: linear-gradient(135deg, #6a5bcd, #ff6e61);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Section Divider

```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(106, 91, 205, 0.3), transparent);
}
```

### Full Tailwind Config

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#1A1A2E",
        primary: "#6A5BCD",
        accent: "#FF6E61",
        success: "#6FBE8D",
        warning: "#F7C94B",
        muted: "#E0E0E0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(106, 91, 205, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(106, 91, 205, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### Component Class Cheatsheet

Quick reference for the most commonly used class combinations:

```
Glass card:          glass glass-hover p-6
Section:             relative py-24 sm:py-32
Container:           mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
Section label:       text-xs font-semibold uppercase tracking-widest text-primary mb-4
Section heading:     text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4
Section subtitle:    mx-auto max-w-xl text-muted/50 text-base sm:text-lg
Card title:          text-lg font-semibold text-white mb-2
Card body:           text-sm text-muted/50 leading-relaxed
Icon container:      h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
Tag badge:           text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1
Glow CTA:            glow-button text-base px-8 py-4
Ghost CTA:           rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200
Outline CTA:         rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-200
Accent line:         h-px bg-gradient-to-r from-primary/30 to-transparent
Fade entrance:       animate-fade-in-up animate-delay-{100|200|300|400}
```

---

## Appendix: File Map

| File | Purpose |
|------|---------|
| `frontend/tailwind.config.ts` | Color tokens, font families, custom animations |
| `frontend/app/globals.css` | Glass utilities, glow button, noise overlay, scrollbar, text gradient, section divider, fade-in-up animation |
| `frontend/app/layout.tsx` | Root layout, dark class, Navbar mount |
| `frontend/components/Navbar.tsx` | Fixed glass nav, mobile hamburger, underline links |
| `frontend/components/Hero.tsx` | Mesh gradient, grid overlay, badge, headline, terminal preview |
| `frontend/components/Features.tsx` | 4-column glass cards with icon + tag pattern |
| `frontend/components/HowItWorks.tsx` | 3-step cards with connector lines, gradient icon boxes |
| `frontend/components/Industries.tsx` | 2-column cards with icon-left layout, use-case lists |
| `frontend/components/Pricing.tsx` | 3-column pricing with highlighted card, "Most Popular" badge |
| `frontend/components/CTA.tsx` | Glass container with gradient blur orbs, dual CTA, trust signals |
| `frontend/components/Footer.tsx` | 5-column grid, brand section, social icons, section divider |
