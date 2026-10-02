import { useEffect, useState } from "react";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("team-theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // localStorage indisponible : on suit le système
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("team-theme", theme);
    } catch {
      // impossible de sauvegarder, le thème reste actif pour la session
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? "☀️ Mode clair" : "🌙 Mode sombre"}
    </button>
  );
}

export default ThemeToggle;