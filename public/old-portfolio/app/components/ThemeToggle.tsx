"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    document.body.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    document.body.setAttribute("data-theme", next);
  };

  return (
    <button
      type="button"
      className={["d-flex    align-items-center justify-content-center  pl-1 art-theme-toggle", className].filter(Boolean).join(" ")}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {/* <span className="art-theme-toggle__label  ">{theme === "dark" ? "Dark" : "Light"}</span> */}
      <span className="art-theme-toggle__track" aria-hidden="true">
      {theme === "dark" ?
      <span className="art-theme-toggle__thumb fa fa-moon p-2 d-flex justify-center items-center"></span> :
      <span className="art-theme-toggle__thumb fa fa-sun p-2 d-flex justify-center items-center"></span>
      }
       
      </span>
    </button>
  );
}
