import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import type { Locale, Project, Site } from "@/lib/content";

function CardMedia({ project }: { project: Project }) {
  const media = project.media;
  if (!media || media.kind === null) return null;

  if (media.kind === "video" && media.video) {
    return (
      <div className="mb-5 h-48 overflow-hidden rounded-[12px] border border-hair bg-page">
        <video
          className="h-full w-full object-cover"
          src={media.video}
          poster={media.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          aria-label={project.name}
        />
      </div>
    );
  }

  const img = media.thumb ?? media.gallery?.[0]?.src;
  if (media.kind === "image" && img) {
    return (
      <div className="mb-5 h-48 overflow-hidden rounded-[12px] border border-hair bg-page">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={project.name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }
  return null;
}

export function ProjectCard({
  project,
  lang,
  ui,
}: {
  project: Project;
  lang: Locale;
  ui: Site["ui"];
}) {
  return (
    <Link
      href={`/${lang}/projets/${project.slug}`}
      className="group flex flex-col rounded-card border border-hair bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-hair-strong"
    >
      <CardMedia project={project} />

      <div className="mb-4 flex items-center justify-between">
        <span className="text-[17px] font-medium text-primary">{project.name}</span>
        <StatusBadge status={project.status} label={ui.status[project.status]} />
      </div>

      <p className="mb-4 text-[15px] leading-relaxed text-secondary">
        {project.tagline}
      </p>

      {project.badges && project.badges.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-clay/30 bg-clay/10 px-2.5 py-1 text-[12px] font-medium text-clay"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-end">
        <span className="inline-flex items-center gap-1 text-[14px] text-clay transition-transform group-hover:translate-x-0.5">
          {ui.viewProject}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
