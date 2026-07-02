# SRW UI Kit

An Angular component library pulled directly from the srw-dev production site. The showcase app lets you browse components in full-page context; Storybook covers isolated states and args-driven testing for primitives.

Built with **Angular 19**, standalone components, and Angular Signals throughout. No NgModules, no RxJS.

## Tech stack

- Angular 19 + TypeScript
- SCSS (with design tokens)
- Angular Router (lazy-loaded per page)
- Storybook v8

## Getting started

```bash
npm install
npm run start      # showcase app at http://localhost:4200
npm run storybook  # Storybook at http://localhost:6006
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run start` | Start the showcase app |
| `npm run storybook` | Start Storybook |
| `npm run build` | Build the showcase app |
| `npm run build-storybook` | Build Storybook for static deployment |

## Components

| Component | Category | Storybook |
|-----------|----------|-----------|
| `Alert` | Primitive | Yes |
| `ALink` | Primitive | Yes |
| `Badge` | Primitive | Yes |
| `Button` | Primitive | Yes |
| `Input` | Primitive | Yes |
| `Card` | Container | Yes |
| `Modal` | Container | Yes |
| `PricingCard` | Container | Yes |
| `ContactForm` | Pattern | Showcase only |
| `FaqAccordion` | Pattern | Yes |
| `Footer` | Layout | Yes |
| `Hero` | Layout | Yes |
| `Navbar` | Layout | Yes |
| `Reveal` | Utility | Yes |

## Project structure

```
src/
├── stories/        # Storybook stories
├── styles/         # Global styles and design tokens
└── app/
    ├── shared/
    │   ├── components/   # Reusable UI components
    │   ├── directives/   # Angular directives (srwReveal)
    │   └── services/     # Angular services (Theme, Modal)
    └── pages/            # Full-page showcase demos
```

---

## Stack

| | |
|---|---|
| Framework | Angular 19 (standalone) |
| State | Angular Signals — no RxJS |
| Styles | SCSS with CSS custom properties |
| Routing | Angular Router, lazy-loaded per page |
| Fonts | Inter (body), Space Grotesk (display) via Google Fonts |

---

## Design tokens

All tokens live in [`src/styles/tokens.scss`](src/styles/tokens.scss) and are used via `var(--token-name)` throughout every component. They are extracted verbatim from the srw-dev production stylesheet.

### Colours

| Token | Value | Usage |
|---|---|---|
| `--dark-bg` | `#0e0c0a` | Nav, hero, footer background |
| `--dark-text` | `#f5f0e8` | Text on dark surfaces |
| `--dark-text-muted` | `rgba(245,240,232,0.45)` | Subtext on dark surfaces |
| `--light-bg` | `#ffffff` | Content section background |
| `--light-text` | `#1a1a1a` | Body text on light surfaces |
| `--light-body` | `#4a4a4a` | Secondary body text |
| `--light-muted` | `#9a9489` | Placeholder, helper text |
| `--card-bg` | `#f5f2ee` | Card and form background |
| `--card-border` | `#e8e2d8` | Card borders and dividers |
| `--divider` | `#e8e2d8` | Horizontal rule colour |
| `--accent` | `#c8b89a` | Primary accent — warm tan |
| `--accent-hover` | `#b8a88a` | Accent on hover |

### Geometry

| Token | Value |
|---|---|
| `--nav-height` | `64px` |
| `--radius` | `3px` |
| `--radius-md` | `8px` |
| `--max-w` | `1240px` |

### Dark mode

Dark mode is applied by setting `data-theme="dark"` on `document.body` via `ThemeService`. Under that selector, the light surface tokens are overridden to use the dark palette. The accent and geometry tokens are unchanged.

---

## Project structure

```
src/
├── styles/
│   ├── tokens.scss          Design tokens (source of truth)
│   └── pages.scss           Shared page layout and demo-block styles
├── styles.scss              Global reset, font import, reveal utility classes
└── app/
    ├── app.routes.ts        Lazy-loaded route per component page
    ├── app.component.*      App shell — sidebar nav + theme toggle
    ├── shared/
    │   ├── directives/
    │   │   └── reveal.directive.ts   srwReveal — IntersectionObserver fade-in
    │   ├── services/
    │   │   ├── theme.service.ts      Signal-based light/dark toggle
    │   │   └── modal.service.ts      Signal-based modal open/close
    │   └── components/
    │       ├── button/
    │       ├── badge/
    │       ├── card/
    │       ├── input/
    │       ├── alert/
    │       ├── modal/
    │       ├── navbar/
    │       ├── footer/
    │       ├── hero/
    │       ├── pricing-card/
    │       ├── faq-accordion/
    │       └── contact-form/
    └── pages/
        ├── home/
        ├── button-page/
        ├── badge-page/
        ├── card-page/
        ├── input-page/
        ├── alert-page/
        ├── modal-page/
        ├── navbar-page/
        ├── footer-page/
        ├── hero-page/
        ├── pricing-page/
        ├── faq-page/
        └── contact-page/
```

---

## Components

### Primitives

#### `<srw-button>`

```html
<srw-button variant="primary" size="md">Label</srw-button>
```

| Input | Type | Default | Values |
|---|---|---|---|
| `variant` | `string` | `primary` | `primary` `secondary` `outline` `ghost` |
| `size` | `string` | `md` | `sm` `md` `lg` |
| `disabled` | `boolean` | `false` | |
| `loading` | `boolean` | `false` | Shows a spinning indicator |

---

#### `<srw-badge>`

```html
<srw-badge variant="success" [dot]="true">Active</srw-badge>
```

| Input | Type | Default | Values |
|---|---|---|---|
| `variant` | `string` | `neutral` | `neutral` `success` `warning` `error` `info` `dark` |
| `dot` | `boolean` | `false` | Renders a coloured dot before the label |

---

#### `<srw-input>`

```html
<srw-input label="Email" helperText="We'll never share this." placeholder="you@example.com" />
```

| Input | Type | Default |
|---|---|---|
| `label` | `string` | `''` |
| `helperText` | `string` | `''` |
| `error` | `string` | `''` — when set, switches to error state |
| `disabled` | `boolean` | `false` |
| `placeholder` | `string` | `''` |

---

#### `<srw-alert>`

```html
<srw-alert variant="warning">Your session expires in 10 minutes.</srw-alert>
```

| Input | Type | Default | Values |
|---|---|---|---|
| `variant` | `string` | `info` | `info` `success` `warning` `error` |

---

### Containers

#### `<srw-card>`

```html
<!-- Without image -->
<srw-card>
  <p>Card content via ng-content</p>
</srw-card>

<!-- With image slot -->
<srw-card [hasImage]="true">
  <img slot="image" src="..." alt="" />
  <p>Card body</p>
</srw-card>
```

| Input | Type | Default |
|---|---|---|
| `hasImage` | `boolean` | `false` |

---

#### `<srw-modal>`

Declared once at the app root. Driven entirely by `ModalService`.

```ts
// In any component
readonly modal = inject(ModalService);

this.modal.open({
  title: 'Confirm deletion',
  body: 'This cannot be undone.',
  confirmLabel: 'Delete',
  danger: true,
});
```

Clicking the backdrop or Cancel calls `modal.close()`.

---

#### `<srw-pricing-card>`

```html
<srw-pricing-card [plan]="plan" />
```

The `plan` input accepts a `PricingPlan` object:

```ts
interface PricingPlan {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
```

Popular cards render on a dark surface with inverted text. All cards have a bounce keyframe animation on hover.

---

### Patterns

#### `<srw-faq-accordion>`

Self-contained — FAQ items are declared inside the component. One item open at a time, driven by an `openIndex` signal. The icon rotates 45° when open.

---

#### `<srw-contact-form>`

Self-contained two-column layout. The submit handler simulates an async send for demo purposes. Replace the `submit()` method body with a real API call (the original uses [Web3Forms](https://web3forms.com)). Three visual states: idle, sending, success.

---

### Layout

#### `<srw-navbar>`

Sticky navigation bar with:
- Logo with accent-coloured prefix
- Services hover-dropdown with 150 ms close delay
- Availability badge
- Mobile hamburger with full-screen drawer and animated Services sub-accordion

---

#### `<srw-hero>`

Full-width dark hero with:
- Three animated image columns (float up/down via CSS keyframes)
- Three ambient blurred orbs (CSS `animation: orb1/2/3`)
- Text block wired to `srwReveal` directive

In the kit, colour gradients stand in for the production photographs.

---

#### `<srw-footer>`

Dark footer matching nav chrome. Address block on the left, external links on the right.

---

### Directive: `srwReveal`

Adds an IntersectionObserver-based fade-in to any element. Applied as an attribute.

```html
<div srwReveal>Fades in on scroll</div>
<div srwReveal [revealDelay]="120" revealFrom="right">Slides in from the right</div>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `revealDelay` | `number` | `0` | Milliseconds before the class is added after intersection |
| `revealFrom` | `'default' \| 'right'` | `'default'` | `right` adds a translateX slide |

---

## Services

### `ThemeService`

```ts
readonly themeService = inject(ThemeService);

themeService.toggle();       // switches light ↔ dark
themeService.theme();        // signal: 'light' | 'dark'
themeService.isDark();       // boolean
```

Writes `data-theme="dark"` to `document.body` via an `effect()`. The sidebar footer toggle is wired to this service.

---

### `ModalService`

```ts
readonly modal = inject(ModalService);

modal.open({ title, body, confirmLabel?, danger? });
modal.close();
modal.isOpen();   // signal: boolean
modal.config();   // signal: ModalConfig
```

---

## Build

```bash
ng build
```

Output goes to `dist/srw-ui-kit/`. The build is fully tree-shaken — each component page is a separate lazy chunk.

---

## Origin

All visual design decisions — colours, typography, spacing, animations, and interaction patterns — are extracted from the [srw-dev](https://srwdev.fr) portfolio site built with React + Vite. This Angular kit is a faithful component-by-component translation of that production codebase.
