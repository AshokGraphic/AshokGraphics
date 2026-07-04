import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoItem } from "@/lib/site-data";

type Props = {
  video: VideoItem;
  category?: string;
  aspect?: "video" | "portrait" | "square";
  className?: string;
};

const aspectClass = {
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function VideoCard({ video, category, aspect = "video", className = "" }: Props) {
  const [playing, setPlaying] = useState(false);
  const hasYT = !!video.youtubeId;

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-ink/10 ring-1 ring-border ${aspectClass[aspect]} ${className}`}>
      {playing && hasYT ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          loading="lazy"
          allow="accelerated-2d-canvas; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <>
          <img
            src={
              hasYT
                ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
                : video.thumbnail
            }
            alt={video.title}
            loading="lazy"
            onError={(e) => {
              const t = e.currentTarget;
              if (video.thumbnail && t.src !== video.thumbnail) {
                t.src = video.thumbnail;
              }
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <button
            onClick={() => hasYT && setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 grid place-items-center"
            disabled={!hasYT}
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-primary shadow-lift transition group-hover:scale-110">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </button>
          {video.duration && (
            <span className="absolute right-3 top-3 rounded-md bg-ink/70 px-2 py-1 text-xs font-bold text-white backdrop-blur">{video.duration}</span>
          )}
          <div className="pointer-events-none absolute inset-x-4 bottom-4 text-white">
            {category && (
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">{category}</div>
            )}
            <div className="mt-1 text-base font-bold leading-tight">{video.title}</div>
          </div>
          {!hasYT && (
            <span className="absolute left-3 top-3 rounded-md bg-gold px-2 py-1 text-[10px] font-bold text-ink">SOON</span>
          )}
        </>
      )}
    </div>
  );
}
