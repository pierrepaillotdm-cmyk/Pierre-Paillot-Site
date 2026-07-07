import siteFr from "@/content/site.fr.json";
import siteEn from "@/content/site.en.json";
import projectsFr from "@/content/projects.fr.json";
import projectsEn from "@/content/projects.en.json";

export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export type ProjectStatus = "live" | "built" | "wip";

export interface GalleryItem {
  src: string;
  caption?: string;
}

export interface ProjectMedia {
  kind: "video" | "image" | null;
  video?: string;
  poster?: string;
  thumb?: string;
  aspect?: "portrait" | "landscape";
  caption?: string;
  gallery?: GalleryItem[];
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  featured: boolean;
  url: string | null;
  tagline: string;
  badges?: string[];
  title: string;
  media?: ProjectMedia;
  stack: string[];
  problem: string;
  delivered: string;
  running: string;
  under: string;
  role: string;
}

export type Site = typeof siteFr;

const siteByLocale: Record<Locale, Site> = {
  fr: siteFr as Site,
  en: siteEn as Site,
};

const projectsByLocale: Record<Locale, Project[]> = {
  fr: projectsFr as Project[],
  en: projectsEn as Project[],
};

export function getSite(locale: Locale): Site {
  return siteByLocale[locale];
}

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function getFeatured(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

export function getOther(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => !p.featured);
}

const statusRank: Record<ProjectStatus, number> = { live: 0, built: 1, wip: 2 };

export function getProjectsSorted(locale: Locale): Project[] {
  return [...getProjects(locale)].sort(
    (a, b) => statusRank[a.status] - statusRank[b.status]
  );
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}
