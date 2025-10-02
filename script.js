// ===== Dark Mode hantering =====
(function () {
  const STORAGE_KEY = "theme"; // "light" | "dark" | "system"
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");

  const systemPrefersDark = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function updateUI(mode) {
    label.textContent = mode === "system" ? "System" : mode === "dark" ? "Mörkt" : "Ljust";
    icon.textContent = mode === "dark" ? "🌙" : mode === "light" ? "☀️" : "🖥️";
  }

  function apply(mode) {
    // Städa ev. explicit ljus-klass
    html.classList.remove("light", "dark");

    // Effektivt tema
    const effective = mode === "system" ? (systemPrefersDark() ? "dark" : "light") : mode;

    // Sätt endast .dark när mörkt används
    if (effective === "dark") html.classList.add("dark");

    // Meddela till UA för formler/scrollbar
    html.style.colorScheme = effective;

    // Spara användarval
    localStorage.setItem(STORAGE_KEY, mode);
    updateUI(mode);
  }

  // Initiera läge
  const saved = localStorage.getItem(STORAGE_KEY) || "system";
  apply(saved);

  // Lyssna på systemändringar när system-läget är valt
  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  mq?.addEventListener?.("change", () => {
    if ((localStorage.getItem(STORAGE_KEY) || "system") === "system") {
      apply("system");
    }
  });

  // Växla med knapp: system -> dark -> light -> system
  btn.addEventListener("click", () => {
    const curr = localStorage.getItem(STORAGE_KEY) || "system";
    const next = curr === "system" ? "dark" : curr === "dark" ? "light" : "system";
    apply(next);
  });
})();

// ===== SearchBar demo-submit =====
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim();
  if (!q) return;
  // Koppla till din filtrering eller API-anrop här:
  console.log("Sökterm:", q);
});
