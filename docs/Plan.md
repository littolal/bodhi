# Bodhi School Website Migration Plan

## Objective
Rebuild the existing Bodhi School website as a React + Vite single-page application with CSS styling, using the current site copy and the current top-level navigation structure, while refreshing the visual presentation into a more elegant, academic, minimally ornate design.

The implementation must cover every public page currently in scope:
- `/`
- `/about.html`
- `/whybodhi.html`
- `/admission.html`
- `/facilities.html`
- `/gallery.html`
- `/contact.html`

No new pages are required.

## Inputs and Assumptions
- Current public content should be reused as-is in substance.
- Presentation may be redesigned freely as long as the information remains intact.
- Logo is inside /src/assets.
- Dummy images are acceptable for the initial build.
- No gallery filters, lightbox, WhatsApp chat, or admission form are required.
- A contact form is required.
- A map embed is required.
- The site should remain a React + Vite SPA with client-side routing.
- Content should be hardcoded in the app for now.
- SEO should be optimized for Lighthouse scores of 95+ even though redirect preservation is not required.

If any assumption changes, update this plan before implementation begins.

## Design Direction
### Visual principles
- Minimalistic, academic, refined.
- Use the provided brand colors as the design palette:
  - `#f17347`
  - `#5a8102`
  - `#4d4d18`
  - `#7e5755`
  - `#646e14`
  - `#602822`
  - `#262918`
  - `#6c7435`
- Avoid generic template styling.
- Build a design that feels calm, intentional, and premium.
- Use asymmetry inside a stable grid so the layout feels organic without becoming messy.

### Motion system
- Use smooth, flowy transitions between sections and route changes.
- Alternate feature cards so every second card shifts vertically.
- Rotate images subtly, never aggressively.
- Keep motion soft and purposeful, not decorative noise.
- Respect reduced-motion preferences.

### Layout rules
- Strong typography hierarchy.
- Spacious sections with breathing room.
- Section compositions should alternate between left-heavy and right-heavy layouts.
- Cards and content blocks should break the grid in controlled ways.
- Mobile layout should preserve the same visual language without stacking into a plain linear template.

## Information Architecture
Maintain the existing top-level navigation:
- Home
- About
- Why Bodhi
- Admission
- Facilities
- Gallery
- Contact

Change the current URL style to:
- `/`
- `/about`
- `/whybodhi`
- `/admission`
- `/facilities`
- `/gallery`
- `/contact`

Because this is a SPA, the implementation should still support these routes in React Router and should not introduce extra public pages unless required later.

## Technical Architecture
### Stack
- React
- Vite
- CSS styling only
- React Router for client-side navigation

### Content strategy
- Store all page copy in local hardcoded content modules.
- Keep content separated from presentation so each page can render from a content object.
- Do not introduce a CMS, backend API, or database.

### Asset strategy
- Place provided logo in `public/` or an appropriate asset folder.
- Use temporary placeholder/dummy imagery during implementation.
- Keep image usage abstracted so the final provided images can be swapped in without restructuring components.

### Components to build
Create reusable components only where they reduce duplication meaningfully:
- App shell
- Header / navigation
- Footer
- Hero section
- Section heading block
- Feature card
- Content grid / split section
- Image panel
- Contact form
- Map embed block
- Page transition wrapper

Do not over-abstract single-use UI.

## Page-by-Page Build Scope
### Home
Purpose: establish the brand, showcase the school identity, and guide users to the main pages.
- Hero with strong headline, supporting copy, and CTA navigation.
- Feature highlights for school strengths.
- Short academic/community message.
- Visual sections with alternating asymmetry.

### About
Purpose: communicate school background and philosophy.
- Mission / vision style content blocks.
- School overview sections.
- Human, warm, academic presentation.

### Why Bodhi
Purpose: explain differentiators and value proposition.
- Reasons / benefits cards.
- Alternate card layout with vertical shifting every second card.
- Use motion carefully to reinforce the premium feel.

### Admission
Purpose: explain admission flow and important details.
- Admission overview.
- Key admission information sections.
- No interactive admission form.
- Include clear action paths to Contact.

### Facilities
Purpose: present campus facilities and student experience.
- Facilities grouped into readable sections.
- Support image-backed cards or panels.
- Keep layout elegant and scannable.

### Gallery
Purpose: show school life visually.
- Use dummy images initially.
- Make the grid varied and asymmetric.
- No filter or lightbox interaction is required.

### Contact
Purpose: provide user contact options.
- Contact details section.
- Required contact form.
- Required embedded map.
- Keep the form simple and accessible.

## SEO Requirements
Optimize for Lighthouse 95+ by doing all of the following:
- Unique `title` and `meta description` per route.
- Semantic landmarks and heading structure.
- Descriptive alt text for all images.
- Fast-loading CSS and minimal JS overhead.
- Use modern image handling with compressed placeholders or lightweight local assets.
- Add Open Graph and Twitter metadata.
- Add canonical-style route awareness if needed for the deployed host.
- Ensure good color contrast and accessible focus states.
- Avoid layout shifts by reserving space for images and embedded map content.

## Accessibility Requirements
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient text contrast.
- Form labels linked to inputs.
- Reduced-motion support.
- Semantic buttons and links.
- Responsive structure that works on mobile, tablet, and desktop.

## Implementation Plan
### Phase 1: Audit and content mapping
1. Inspect current public pages and extract the reusable content structure from each page.
2. Map current page sections into local content objects.
3. Identify shared UI patterns across pages.

Verification:
- Every current public page has a corresponding React route and content source.
- No page content is omitted.

### Phase 2: App scaffold and routing
1. Set up React Router in the Vite app.
2. Create the main app shell with header and footer.
3. Create route definitions for all existing pages.
4. Ensure the old-style URLs resolve in the SPA.

Verification:
- All listed routes load the correct content.
- Navigation works across desktop and mobile.

### Phase 3: Design system
1. Define CSS variables for the brand colors, spacing scale, typography scale, shadows, radii, and motion timing.
2. Implement base typography, links, buttons, and form styles.
3. Add layout utilities for asymmetric sections and alternating cards.

Verification:
- Pages share a consistent visual language.
- The layout feels intentional rather than template-like.

### Phase 4: Page implementation
1. Build each page from content objects and reusable components.
2. Keep copy intact while improving hierarchy and visual presentation.
3. Add alternating card motion and subtle image rotation where appropriate.

Verification:
- Each page matches the content scope above.
- Motion is subtle and consistent.

### Phase 5: Contact and map
1. Implement the contact form with labels, validation-ready structure, and submit UI state.
2. Embed the map in the contact page.
3. Ensure the form is keyboard-friendly and accessible.

Verification:
- Contact form renders correctly.
- Map embed loads without breaking layout.

### Phase 6: SEO and performance hardening
1. Add route-specific metadata.
2. Validate heading structure and semantic HTML.
3. Optimize image placeholders and layout stability.
4. Remove unused code and keep bundle size lean.

Verification:
- Lighthouse targets are realistic for performance, accessibility, SEO, and best practices.

### Phase 7: Final QA
1. Review all pages at mobile, tablet, and desktop widths.
2. Verify navigation, scrolling, and section spacing.
3. Check motion behavior and reduced-motion fallback.
4. Confirm the content matches the current site scope.

Verification:
- No broken routes.
- No missing required sections.
- No obvious layout regressions.

## Suggested File Structure
- `src/data/`
  - page content objects
- `src/components/`
  - shared UI components
- `src/pages/`
  - one file per route
- `src/styles/`
  - global CSS and tokens

Keep the structure simple and avoid premature abstraction.

## Acceptance Criteria
- All existing public pages are rebuilt in React + Vite.
- Navigation matches the current site structure.
- Content remains equivalent to the current site copy.
- The design is refreshed, minimal, academic, and polished.
- Motion is subtle, elegant, and performance-safe.
- Contact form and map embed work on the contact page.
- SEO and accessibility are intentionally handled.
- The app is easy for another agentic AI to extend without guessing.

## Open Items Before Implementation
- Final logo file location. Resolved: use the supplied files in `src/assets`.
- Final contact destination for the form submission, if not purely presentational.
- Final map embed link or coordinates, if the current site’s map needs replacement.

If those are not provided, the implementation should keep the form presentational and use the most appropriate current map embed source from the existing site.
