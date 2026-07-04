import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Sprout, Store, Smartphone, Shirt, Gem, UtensilsCrossed, PawPrint, Bike, Home as HomeIcon, Heart, Landmark } from "lucide-react";
import { CATEGORIES, WA_URL, waUrlFor } from "@/lib/site-data";
import { VideoCard } from "@/components/VideoCard";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  sprout: Sprout, store: Store, smartphone: Smartphone, shirt: Shirt,
  gem: Gem, food: UtensilsCrossed, paw: PawPrint, bike: Bike, home: HomeIcon,
  heart: Heart, bank: Landmark,
};

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.title} — AI Video Ads | Ashok Gawali Grafix` },
          { name: "description", content: loaderData.cat.long },
          { property: "og:title", content: `${loaderData.cat.title} — AI Video Ads` },
          { property: "og:description", content: loaderData.cat.long },
          { property: "og:image", content: loaderData.cat.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Category not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Go home</Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const Icon = ICONS[cat.iconKey] ?? Store;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div
        className="relative overflow-hidden border-b border-border"
        style={{ background: `linear-gradient(135deg, ${cat.color}25, transparent)` }}
      >
        <div className="container-x py-10 sm:py-14">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-primary transition">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <div
              className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lift sm:h-20 sm:w-20"
              style={{ background: cat.color }}
            >
              <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{cat.emoji} Category</p>
              <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl lg:text-6xl">{cat.title}</h1>
              <p className="mt-3 max-w-2xl text-base text-ink/70">{cat.long}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Videos grid */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              {cat.videos.length} Sample Videos
            </h2>
            <a
              href={waUrlFor(`Hi, I want a ${cat.title} AI video ad. Please share details.`)}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-dark transition"
            >
              <MessageCircle className="h-4 w-4" /> Order this category
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cat.videos.map((v: typeof cat.videos[number], i: number) => (
              <div key={i} className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lift">
                <VideoCard video={v} category={cat.title} aspect={v.aspect ?? "video"} className="rounded-none" />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <div className="truncate font-bold text-ink">{v.title}</div>
                    {v.duration && <div className="text-xs text-ink/55">Duration {v.duration}</div>}
                  </div>
                  <a
                    href={waUrlFor(`Hi, I want a video like "${v.title}" (${cat.title}). Please share details.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="shrink-0 rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-primary-dark transition"
                  >
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile order button */}
          <div className="mt-10 text-center sm:hidden">
            <a
              href={waUrlFor(`Hi, I want a ${cat.title} AI video ad. Please share details.`)}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="section-pad bg-cream-deep/40">
        <div className="container-x">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Explore other categories</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 8).map((c) => {
              const I = ICONS[c.iconKey] ?? Store;
              return (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="group flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: c.color }}>
                    <I className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-ink">{c.title}</div>
                    <div className="truncate text-xs text-ink/55">{c.short}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
