// assets/js/nav.js

(function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.dataset.open = open ? "true" : "false";
  };

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  // Start closed on load (progressive enhancement: without JS it's always visible on desktop)
  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(!isOpen());
  });

  // ESC closes when open
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!isOpen()) return;
    setOpen(false);
    toggle.focus();
  });

  // Click outside closes when open (mobile convenience)
  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const target = e.target;
    if (!(target instanceof Node)) return;

    if (nav.contains(target) || toggle.contains(target)) return;
    setOpen(false);
  });
})();
