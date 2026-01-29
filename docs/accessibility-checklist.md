# Accessibility Checklist (BaselineWeb)

This checklist documents the accessibility considerations applied across the site.

## Keyboard & focus

- [x] All interactive elements are reachable via keyboard (Tab / Shift+Tab).
- [x] Focus is clearly visible (`:focus-visible` styling).
- [x] Mobile menu toggle is keyboard operable.
- [x] ESC closes the mobile menu and returns focus to the toggle button.

## Landmarks & structure

- [x] Consistent semantic landmarks: `header`, `nav`, `main`, `footer`.
- [x] Skip link provided and functional (jumps to `#main`).
- [x] Each page has a single `h1` and sensible heading hierarchy.

## Navigation

- [x] Primary nav uses an accessible label (`aria-label="Primary navigation"`).
- [x] Current page is indicated with `aria-current="page"`.

## Forms (Contact page)

- [x] Every form control has an associated `<label>`.
- [x] Validation errors are announced via `aria-live` status region.
- [x] Invalid fields are marked with `aria-invalid="true"`.
- [x] Error messages are associated using `aria-describedby`.
- [x] On submit, focus moves to the first invalid field.

## Images (Gallery)

- [x] Images include descriptive `alt` text.
- [x] Captions are provided using `<figure>` / `<figcaption>` where helpful.
- [x] Images use `loading="lazy"` to reduce unnecessary bandwidth.

## Color & motion

- [x] Focus outline color is highly visible.
- [x] No animation is required to use the site (no motion-dependent UI).

## Notes / future improvements (optional)

- [ ] Run automated checks (e.g., Lighthouse / axe) and document results.
- [ ] Add `prefers-reduced-motion` rules if animations are introduced later.
