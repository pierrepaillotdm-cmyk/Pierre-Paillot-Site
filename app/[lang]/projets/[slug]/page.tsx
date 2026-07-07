import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import { ProjectMedia } from "@/components/ProjectMedia";
import { getProject, getProjects, getSite, isLocale, locales } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getProjects(lang).map((p) => ({ lang, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const site = getSite(lang);
  const project = getProject(lang, slug);
  if (!project) return {};
  const title = `${project.name} · ${site.name}`;
  return {
    title,
    description: project.tagline,
    openGraph: { title, description: project.tagline, images: ["/og.png"] },
    alternates: {
      canonical: `/${lang}/projets/${project.slug}`,
      languages: { fr: `/fr/projets/${project.slug}`, en: `/en/projets/${project.slug}` },
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hair py-8">
      <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.12em] text-subtle">{label}</p>
      <div className="max-w-prose text-[17px] leading-relaxed text-secondary">{children}</div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const site = getSite(lang);
  const project = getProject(lang, slug);
  if (!project) notFound();

  const ui = site.ui;

  return (
    <>
      <Nav lang={lang} site={site} />
      <main className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <Link
            href={`/${lang}#atelier`}
            className="text-[14px] text-secondary transition-colors hover:text-primary"
          >
            ← {ui.detail.back}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <h1 className="text-[26px] font-medium text-primary">{project.name}</h1>
            <StatusBadge status={project.status} label={ui.status[project.status]} />
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[14px] text-clay transition-transform hover:translate-x-0.5"
              >
                {project.url.replace("https://", "")}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <p className="mt-6 max-w-[24ch] font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-primary">
            {project.title}
          </p>

          <ProjectMedia project={project} />
        </Reveal>

        <div className="mt-12">
          <Block label={ui.detail.problem}>{project.problem}</Block>
          <Block label={ui.detail.delivered}>{project.delivered}</Block>
          <Block label={ui.detail.running}>{project.running}</Block>
          <Block label={ui.detail.under}>
            <p>{project.under}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-hair px-3 py-1 font-mono text-[12px] text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6">
              <span className="font-medium text-primary">{ui.detail.role} </span>
              {project.role}
            </p>
          </Block>
        </div>

        {project.url && (
          <Reveal>
            <div className="mt-12 border-t border-hair pt-10">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-control bg-clay px-5 py-2.5 text-[15px] font-medium text-clay-ink transition-colors hover:bg-clay-hover"
              >
                {ui.detail.viewOnlinePrefix} {project.name} {ui.detail.viewOnlineSuffix} ↗
              </a>
            </div>
          </Reveal>
        )}
      </main>
      <Footer site={site} />
    </>
  );
}
