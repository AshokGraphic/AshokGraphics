import { useState } from "react";
import { Settings, Sun, Moon, X, Type, Palette } from "lucide-react";
import { ACCENTS, FONTS, useTheme } from "@/lib/theme";

export function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { mode, setMode, accent, setAccent, font, setFont } = useTheme();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open settings"
        className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-card text-ink shadow-lift ring-1 ring-border transition hover:scale-110"
      >
        <Settings className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-card p-6 text-ink shadow-lift">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">Site Settings</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-xl bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Theme Mode */}
            <div className="mt-7">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Appearance</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMode("light")}
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${mode === "light" ? "border-primary bg-primary/10 text-primary" : "border-border bg-muted/30"}`}
                >
                  <Sun className="h-4 w-4" /> Light
                </button>
                <button
                  onClick={() => setMode("dark")}
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${mode === "dark" ? "border-primary bg-primary/10 text-primary" : "border-border bg-muted/30"}`}
                >
                  <Moon className="h-4 w-4" /> Dark
                </button>
              </div>
            </div>

            {/* Accent Color */}
            <div className="mt-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Palette className="h-3.5 w-3.5" /> Accent Color
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2.5">
                {ACCENTS.map((a) => (
                  <button
                    key={a.key}
                    onClick={() => setAccent(a.key)}
                    aria-label={a.label}
                    title={a.label}
                    className={`group relative aspect-square rounded-2xl ring-2 transition ${accent === a.key ? "ring-ink scale-105" : "ring-transparent hover:scale-105"}`}
                    style={{ background: a.swatch }}
                  >
                    {accent === a.key && <span className="absolute inset-0 grid place-items-center text-lg text-white">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Font */}
            <div className="mt-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Type className="h-3.5 w-3.5" /> Typography
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {FONTS.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFont(f.key)}
                    style={{ fontFamily: f.display }}
                    className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-base font-bold transition ${font === f.key ? "border-primary bg-primary/10 text-primary" : "border-border bg-muted/30"}`}
                  >
                    <span>{f.label}</span>
                    {font === f.key && <span className="text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Your preferences are saved automatically on this device.
            </p>
          </aside>
        </div>
      )}
    </>
  );
}
