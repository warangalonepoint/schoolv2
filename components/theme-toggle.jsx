"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(saved || (prefersDark ? "dark" : "light"));
  }, []);
  function apply(next) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next === "dark" ? "dark" : "light");
    localStorage.setItem("theme", next);
  }
  return (
    <button onClick={() => apply(theme === "dark" ? "light" : "dark")} className={`icon-btn ${className}`} aria-label="Toggle theme">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
