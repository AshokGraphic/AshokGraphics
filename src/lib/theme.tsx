import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Mode = "light" | "dark";
export type Accent = "green" | "blue" | "purple" | "orange" | "red" | "pink" | "teal";
export type FontKey = "sora" | "poppins" | "inter" | "montserrat" | "playfair" | "space" | "roboto";

export const ACCENTS: { key: Accent; label: string; swatch: string }[] = [
  { key: "green",  label: "Green",  swatch: "#1F7A3D" },
  { key: "blue",   label: "Blue",   swatch: "#2563EB" },
  { key: "purple", label: "Purple", swatch: "#7C3AED" },
  { key: "orange", label: "Orange", swatch: "#EA8A1F" },
  { key: "red",    label: "Red",    swatch: "#DC2626" },
  { key: "pink",   label: "Pink",   swatch: "#DB2777" },
  { key: "teal",   label: "Teal",   swatch: "#0D9488" },
];

export const FONTS: { key: FontKey; label: string; display: string; body: string }[] = [
  { key: "sora",       label: "Sora + Inter (Default)",  display: "Sora",                body: "Inter" },
  { key: "poppins",    label: "Poppins",                 display: "Poppins",             body: "Poppins" },
  { key: "inter",      label: "Inter",                   display: "Inter",               body: "Inter" },
  { key: "montserrat", label: "Montserrat",              display: "Montserrat",          body: "Montserrat" },
  { key: "playfair",   label: "Playfair + Inter",        display: "Playfair Display",    body: "Inter" },
  { key: "space",      label: "Space Grotesk",           display: "Space Grotesk",       body: "Space Grotesk" },
  { key: "roboto",     label: "Roboto",                  display: "Roboto",              body: "Roboto" },
];

type ThemeState = {
  mode: Mode; setMode: (m: Mode) => void;
  accent: Accent; setAccent: (a: Accent) => void;
  font: FontKey; setFont: (f: FontKey) => void;
};

const Ctx = createContext<ThemeState | null>(null);

const KEY = "agg-theme-v1";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("light");
  const [accent, setAccent] = useState<Accent>("green");
  const [font, setFont] = useState<FontKey>("sora");

  // load persisted (default: light mode, ignore OS preference)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p.mode === "light" || p.mode === "dark") setMode(p.mode);
        if (p.accent) setAccent(p.accent);
        if (p.font) setFont(p.font);
      }
    } catch {/* ignore */}
  }, []);

  // apply to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-accent", accent);
    const f = FONTS.find((x) => x.key === font)!;
    root.style.setProperty("--font-display-user", f.display);
    root.style.setProperty("--font-body-user", f.body);
    try { localStorage.setItem(KEY, JSON.stringify({ mode, accent, font })); } catch {/* ignore */}
  }, [mode, accent, font]);

  return (
    <Ctx.Provider value={{ mode, setMode, accent, setAccent, font, setFont }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}
