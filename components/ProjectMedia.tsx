import type { Project } from "@/lib/content";

export function ProjectMedia({ project }: { project: Project }) {
  const media = project.media;
  if (!media || media.kind === null) return null;

  if (media.kind === "video" && media.video) {
    const portrait = media.aspect === "portrait";
    return (
      <figure className="mt-10">
        <div
          className={`mx-auto overflow-hidden rounded-card border border-hair bg-page ${
            portrait ? "max-w-[300px]" : "max-w-full"
          }`}
        >
          <video
            className="h-full w-full"
            src={media.video}
            poster={media.poster}
            controls
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          />
        </div>
        {media.caption && (
          <figcaption className="mt-3 text-center text-[13px] text-subtle">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.kind === "image" && media.gallery?.length) {
    return (
      <div className="mt-10 space-y-8">
        {media.gallery.map((item) => (
          <figure key={item.src}>
            <div className="overflow-hidden rounded-card border border-hair bg-page">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.caption ?? project.name}
                className="w-full"
                loading="lazy"
              />
            </div>
            {item.caption && (
              <figcaption className="mt-3 text-[13px] text-subtle">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  return null;
}
