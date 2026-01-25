// =========================================================
// Dark/Light Theme Toggle
//
// Contract:
// - Toggle Button: [data-theme-toggle]
// - Theme wird auf <html> als data-theme="dark|light" gespeichert
// - Persistenz über localStorage("theme")
// =========================================================

(() => {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  const getSystemTheme = () => {
    // Falls matchMedia nicht existiert, fallback auf light
    if (!window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const normalizeTheme = (t) => (t === "dark" ? "dark" : "light");

  const applyTheme = (theme) => {
    const t = normalizeTheme(theme);
    root.setAttribute("data-theme", t);
    btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    btn.textContent = t === "dark" ? "🌙" : "☀️";
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved || getSystemTheme());

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || getSystemTheme();
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });

  // Optional: Wenn nichts gespeichert ist und System-Theme sich ändert
  if (!window.matchMedia) return;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => {
    const hasSaved = localStorage.getItem(STORAGE_KEY);
    if (!hasSaved) applyTheme(getSystemTheme());
  };

  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
