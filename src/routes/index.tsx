import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Play, MessageCircle, Phone, Mail, MapPin,
  Sprout, Store, Smartphone, Shirt, Gem, UtensilsCrossed, PawPrint, Bike, Home as HomeIcon,
  Check, ShieldCheck, Star, Video, Clock, Sparkles, ArrowRight, ChevronLeft, ChevronRight,
  Youtube, Instagram, Facebook, Send, Tractor, Droplets, Leaf, Wheat, Megaphone,
  Heart, TrendingUp, BarChart3, Landmark, Sun, Moon, Globe,
} from "lucide-react";
import founderPhoto from "@/assets/founder.jpeg";
import logoAsset from "@/assets/ashok-logo.asset.json";
import cinemaCamera from "@/assets/cinema-camera.jpg";
import { CATEGORIES, HERO_VIDEOS, TESTIMONIALS, BRANDS, SITE, WA_URL } from "@/lib/site-data";
import { VideoCard } from "@/components/VideoCard";
import { useTheme } from "@/lib/theme";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.brand} — AI Powered TV Commercials for Every Business` },
      { name: "description", content: "AI-generated 4K video ads & TV commercials for agriculture, retail, jewellery, mobile shops, restaurants & more. 24-hour delivery. Order on WhatsApp." },
      { property: "og:title", content: `${SITE.brand} — AI Powered TV Commercials` },
      { property: "og:description", content: "AI video ads & TV commercials for every business. 4K, 24-hour delivery." },
    ],
  }),
  component: LandingPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  sprout: Sprout, store: Store, smartphone: Smartphone, shirt: Shirt,
  gem: Gem, food: UtensilsCrossed, paw: PawPrint, bike: Bike, home: HomeIcon,
  heart: Heart, bank: Landmark,
};

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.49 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
  </svg>
);

function FloatingWhatsApp() {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110">
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        id="logo-upload"
        src={logoAsset.url}
        alt={`${SITE.brand} logo`}
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary shadow-soft sm:h-12 sm:w-12"
      />
      <div className="min-w-0 leading-tight">
        <div className={`truncate font-display text-sm font-extrabold sm:text-base lg:text-lg ${light ? "text-cream" : "text-ink"}`}>
          ASHOK GAWALI
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
          GRAFIX
        </div>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-ink hover:bg-muted transition"
    >
      {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.key === lang)!;
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-ink hover:bg-muted transition"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.key.toUpperCase()}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-lift">
            {LANGS.map((l) => (
              <button
                key={l.key}
                onClick={() => { setLang(l.key as Lang); setOpen(false); }}
                className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm font-medium transition hover:bg-muted ${lang === l.key ? "bg-primary/10 text-primary" : "text-ink"}`}
              >
                <span>{l.flag}</span> {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const NAV_KEYS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.work", href: "#work" },
  { key: "nav.process", href: "#process" },
  { key: "nav.reviews", href: "#reviews" },
  { key: "nav.contact", href: "#contact" },
];

function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-background/85 backdrop-blur border-b border-border shadow-sm" : "bg-background/60 backdrop-blur-sm"}`}>
        <div className="container-x flex items-center justify-between gap-3 py-3">
          <a href="#home" aria-label={`${SITE.brand} home`} className="min-w-0 flex-1"><Logo /></a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_KEYS.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-ink/75 hover:text-primary transition-colors">{t(n.key)}</a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-dark transition-all hover:-translate-y-0.5">
              <WhatsAppIcon className="h-4 w-4" /> {t("cta.whatsappNow")}
            </a>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}
              type="button"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-ink hover:bg-muted transition">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu rendered OUTSIDE the backdrop-blurred header so `fixed` is viewport-relative */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/60" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-card p-6 shadow-lift">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-ink">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV_KEYS.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-muted">{t(n.key)}</a>
              ))}
            </nav>
            <div className="mt-6 border-t border-border pt-6">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Categories</div>
              <div className="mt-2 flex flex-col gap-1">
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-muted">
                    <span>{c.emoji}</span> {c.title}
                  </Link>
                ))}
              </div>
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-soft">
              <WhatsAppIcon className="h-5 w-5" /> {t("cta.whatsappNow")}
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

function WhatsAppCTA({ children = "Order on WhatsApp", variant = "primary", className = "" }: { children?: React.ReactNode; variant?: "primary" | "dark" | "gold"; className?: string }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
    dark: "bg-ink text-cream hover:bg-ink/90",
    gold: "bg-gold text-ink hover:brightness-95",
  }[variant];
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5 ${styles} ${className}`}>
      <WhatsAppIcon className="h-4 w-4" /> {children}
    </a>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl" />
      </div>
      <div className="container-x grid gap-12 pt-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-20 lg:pb-28">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            {t("hero.badge")}
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-ink">{t("hero.t1")}</span>
            <span className="block text-primary">{t("hero.t2")}</span>
            <span className="mt-2 block text-2xl font-bold text-gold sm:text-3xl">{t("hero.t3")}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">{t("hero.sub")}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              { icon: Sparkles, label: "AI Generated Videos" },
              { icon: Video, label: "4K Ultra HD Quality" },
              { icon: Clock, label: "24 Hour Delivery" },
              { icon: BarChart3, label: "Meta Ads Ready" },
            ].map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
                <c.icon className="h-3.5 w-3.5 text-primary" /> {c.label}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppCTA>{t("cta.orderWA")}</WhatsAppCTA>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-card px-6 py-3.5 text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-all">
              <Play className="h-4 w-4 fill-current" /> {t("cta.viewDemo")}
            </a>
          </div>
        </div>

        {/* Real YouTube playable grid */}
        <div className="fade-up [animation-delay:120ms] relative">
          <div className="rounded-3xl bg-card p-4 shadow-lift ring-1 ring-border">
            <div className="grid grid-cols-2 gap-3">
              {HERO_VIDEOS.map((v, i) => (
                <VideoCard key={i} video={v} aspect={v.aspect ?? "video"} />
              ))}
            </div>
          </div>
          <div className="absolute -top-5 -right-5 hidden rotate-6 rounded-2xl bg-gold px-4 py-2 text-sm font-bold text-ink shadow-lift sm:block">
            ⚡ 24 Hour Delivery
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CATEGORY GRID ───────────── */
function CategoryGrid() {
  return (
    <section id="services" className="section-pad bg-cream-deep/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Agriculture First — All Businesses Welcome</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">AI Video Ads for Every Business</h2>
          <p className="mt-4 text-ink/65">Specialists in Agriculture brands & Krishi Seva Kendras. Tap any category to see 10 sample videos.</p>

        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.iconKey] ?? Store;
            return (
              <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.cover} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  <div style={{ background: c.color }} className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lift">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink">{c.videos.length} Videos</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink">{c.emoji} {c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink/65 leading-relaxed">{c.long}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    View videos <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── BRAND LOGOS ───────────── */
function BrandLogos() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container-x text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/55">{t("trusted")}</p>
        <p className="mt-1 text-[11px] text-muted-foreground">Brand names shown as placeholders — upload official logos to replace.</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              title={b.name}
              className="flex h-14 min-w-[120px] items-center justify-center rounded-xl border border-border bg-gradient-to-br from-muted/40 to-card px-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:h-16 sm:min-w-[140px]"
            >
              <span className="font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">{b.name}</span>
            </div>
          ))}
          <span className="rounded-full bg-gold/20 px-4 py-2.5 text-sm font-bold text-ink">& Many More</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────── WHY CHOOSE US + STATS ───────────── */
function WhyChooseUs() {
  const features = [
    "AI Powered Video Creation",
    "4K Ultra HD TV Commercial Quality",
    "24 Hour Fast Delivery",
    "Meta Ads & YouTube Ads Ready",
    "Experienced Team",
    "100% Satisfaction Guarantee",
    "Marathi, Hindi, English — All Languages Supported",
  ];
  const stats = [
    { icon: Video, n: "500+", l: "Videos Created" },
    { icon: Heart, n: "300+", l: "Happy Clients" },
    { icon: Star, n: "4.9/5", l: "Client Rating" },
    { icon: ShieldCheck, n: "100%", l: "Satisfaction" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">Why Choose {SITE.brand}</h2>
          <ul className="mt-7 space-y-3.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base text-ink/85">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lift">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl">{s.n}</div>
              <div className="mt-1 text-sm font-medium text-ink/65">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── AGRI SUB SERVICES ───────────── */
function AgriServices() {
  const agriServices = [
    { icon: Droplets, t: "Fertilizer Ads", d: "High-impact ads for fertilizer brands" },
    { icon: Leaf, t: "Pesticide Ads", d: "Crop-protection product commercials" },
    { icon: Wheat, t: "Seed Company Ads", d: "Hybrid & desi seed promotions" },
    { icon: Store, t: "Agri Shop Ads", d: "Krishi Seva Kendra promotions" },
    { icon: Tractor, t: "Tractor & Machinery", d: "Showroom & equipment films" },
    { icon: Sprout, t: "Drip Irrigation Ads", d: "Drip & micro-irrigation videos" },
  ];
  return (
    <section className="section-pad bg-gradient-to-b from-background to-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Agriculture Specialist</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">AI Commercial Videos for Every Agri Need</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agriServices.map((s) => (
            <Link key={s.t} to="/category/$slug" params={{ slug: "agriculture-products" }}
              className="group flex items-center gap-4 rounded-3xl bg-card p-5 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lift">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-ink">{s.t}</h3>
                <p className="text-sm text-ink/60">{s.d}</p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── PORTFOLIO CAROUSEL ───────────── */
function PortfolioCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  // Show 2 videos from each category as portfolio
  const portfolio = CATEGORIES.flatMap((c) =>
    c.videos.slice(0, 2).map((v) => ({ ...v, category: c.title, slug: c.slug })),
  );

  return (
    <section id="work" className="section-pad">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Work</p>
            <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">Our AI Commercial Work</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scrollBy(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-ink hover:bg-primary hover:text-primary-foreground transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-ink hover:bg-primary hover:text-primary-foreground transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={ref} className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolio.map((p, i) => (
            <div key={i} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
              <VideoCard video={p} category={p.category} aspect="portrait" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <WhatsAppCTA variant="gold">View All Demos ▷</WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}

/* ───────────── PROCESS ───────────── */
function ProcessSteps() {
  const steps = [
    { t: "Share Your Requirements", d: "Tell us your product, business & goals" },
    { t: "Script & Planning", d: "We create the best script & plan" },
    { t: "AI Video Creation", d: "We create stunning AI video" },
    { t: "Delivery & Support", d: "On-time delivery with full support" },
  ];
  return (
    <section id="process" className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Process</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">4 Simple Steps to Get Your AI Video</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="h-full rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lift">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground font-display text-2xl font-extrabold shadow-soft">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-ink/65">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CTA BANNER ───────────── */
function CTABanner() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold via-gold to-secondary p-8 shadow-lift sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Get Your AI Video Ad Today!</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Powerful AI Commercials", "Boost Your Brand", "Increase Sales", "Grow Faster"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-ink font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <WhatsAppCTA variant="dark">Order on WhatsApp</WhatsAppCTA>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl ring-4 ring-ink/10">
                <img loading="lazy" alt="Professional 4K cinema video camera" src={cinemaCamera} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-ink px-4 py-2.5 text-xs font-bold text-cream shadow-lift">
                🎬 4K Cinema Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── TESTIMONIALS ───────────── */
function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Reviews</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">What Our Clients Say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 flex-1 text-base italic text-ink/80 leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{t.n}</div>
                  <div className="text-xs text-ink/60">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ABOUT ───────────── */
function AboutUs() {
  const services = [
    { icon: Sparkles, t: "AI Video Editing", d: "Smart Editing, Stunning Results" },
    { icon: Megaphone, t: "Social Media Ads", d: "Eye-Catching Ads That Engage" },
    { icon: Heart, t: "AI Emotional Videos", d: "Stories That Touch Hearts" },
    { icon: TrendingUp, t: "Business Promotion", d: "Promote Your Business, Grow Fast" },
    { icon: BarChart3, t: "Digital Marketing", d: "Smart Strategy, Strong Reach" },
  ];
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col items-center">
          <div className="relative grid w-full place-items-center">
            <div className="grid h-[240px] w-[240px] place-items-center rounded-full bg-gradient-to-br from-primary to-primary-dark p-1.5 shadow-lift sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">
              <div className="grid h-full w-full place-items-center rounded-full bg-gold p-2 sm:p-2.5">
                <div className="h-full w-full overflow-hidden rounded-full bg-muted ring-4 ring-card">
                  {/* founder-photo-upload — REPLACE WITH UPLOADED PHOTO */}
                  <img id="founder-photo-upload" alt="Ashok Gawali — Founder" src={founderPhoto} className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 max-w-xs rounded-2xl bg-ink px-5 py-3 text-center text-sm font-bold text-cream shadow-lift">
            Ashok Gawali — Founder, AI Video Editor & Digital Creator
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">About</p>
          <h2 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">About {SITE.brand}</h2>
          <div className="mt-5 space-y-4 text-ink/75 leading-relaxed">
            <p>I'm <strong className="text-ink">Ashok Gawali</strong> — a passionate AI video editor and digital creator based in Beed, Maharashtra. I started this studio with one belief: every business deserves a powerful, beautiful video ad — not just the big brands.</p>
            <p>From village agri-input shops to city jewellery showrooms, our mission is to help every business grow with affordable, conversion-focused AI-powered TV commercials.</p>
            <p>Hundreds of brands across India already trust us. You're next.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{s.t}</div>
                  <div className="text-xs text-ink/60">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CONTACT ───────────── */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold text-ink sm:text-5xl">Let's Grow Your Brand Together!</h2>
          <p className="mt-3 text-ink/65">Create Powerful AI Videos That Drive Real Results.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Your Name</label>
              <input required className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Ashok Patil" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Phone Number</label>
              <input required className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="9145026302" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Business Type</label>
              <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                {CATEGORIES.map((c) => <option key={c.slug}>{c.title}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Message</label>
              <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell us about your product / brand..." />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft hover:bg-primary-dark transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>

          <div className="space-y-5">
            <div className="rounded-3xl bg-ink p-7 text-cream shadow-soft">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Phone className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">Phone</div>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-base font-semibold">{SITE.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Mail className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">Email</div>
                    <a href={`mailto:${SITE.email}`} className="text-base font-semibold break-all">{SITE.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">Address</div>
                    <div className="text-base font-semibold">{SITE.address}</div>
                  </div>
                </li>
              </ul>
              <div className="mt-6 flex gap-2.5">
                {[
                  { i: Youtube, l: "YouTube", h: SITE.socials.youtube },
                  { i: Instagram, l: "Instagram", h: SITE.socials.instagram },
                  { i: Facebook, l: "Facebook", h: SITE.socials.facebook },
                  { i: MessageCircle, l: "WhatsApp", h: WA_URL },
                ].map((s) => (
                  <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.l}
                    className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-gold hover:text-ink transition">
                    <s.i className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-soft hover:bg-primary-dark transition">
              <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink text-cream/85">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />

          <p className="mt-4 text-sm text-cream/65 leading-relaxed">
            AI Video Editor & Digital Creator — Helping brands grow with creative videos & smart ads.
          </p>
          <div className="mt-5 flex gap-2.5">
            {[Youtube, Instagram, Facebook, MessageCircle].map((Ic, i) => (
              <a key={i} href={i === 3 ? WA_URL : "#"} aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-gold hover:text-ink transition">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_KEYS.map((q) => (
              <li key={q.key}><a href={q.href} className="hover:text-gold transition">{t(q.key)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Categories</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-gold transition">
                  {c.emoji} {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-cream">Let's Grow Your Brand Together!</h4>
          <p className="mt-3 text-sm text-cream/65">One message away from your next viral ad.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-dark transition">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
          </a>
        </div>
      </div>
      <div className="bg-gold py-3 text-center text-xs font-semibold text-ink">
        © 2026 {SITE.brand}. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ───────────── PAGE ───────────── */
function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AgriServices />
        <CategoryGrid />
        <WhyChooseUs />
        <PortfolioCarousel />
        <BrandLogos />
        <ProcessSteps />
        <CTABanner />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />

    </div>
  );
}
