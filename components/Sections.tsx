import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import type { Locale, Project, Site } from "@/lib/content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.12em] text-subtle">
      {children}
    </p>
  );
}

/* 1. Hero */
export function Hero({ site }: { site: Site }) {
  return (
    <section className="mx-auto max-w-container px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
      <Reveal>
        <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-clay">
          {site.role}
        </p>
      </Reveal>
      <Reveal delay={0.04}>
        <h1 className="max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight text-primary">
          {site.hero.title}
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-prose text-[19px] leading-relaxed text-secondary">
          {site.hero.subtitle}
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-4 font-serif text-[20px] italic text-primary">{site.hero.punch}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-prose border-l-2 border-clay pl-5 text-[16px] leading-relaxed text-secondary">
          {site.hero.ambition}
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="mt-8 font-mono text-[13px] tracking-tight text-subtle">
          {site.availabilityLine}
        </p>
      </Reveal>
      <Reveal delay={0.26}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-control bg-clay px-5 py-2.5 text-[15px] font-medium text-clay-ink transition-colors hover:bg-clay-hover"
          >
            {site.ui.cta.contact}
          </a>
          <a
            href={site.contact.cv}
            className="rounded-control border border-hair-strong px-5 py-2.5 text-[15px] text-primary transition-colors hover:bg-elevated"
          >
            {site.ui.cta.downloadCv}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* 2. Phrase */
export function Phrase({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-prose">
            {site.phrase.lines.map((line) => (
              <p key={line} className="text-[20px] leading-relaxed text-secondary">
                {line}
              </p>
            ))}
            <p className="mt-6 font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug text-primary">
              {site.phrase.punch}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 3. Scope (l'ampleur) */
export function Scope({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair bg-surface">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="max-w-[24ch] font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug text-primary">
            {site.scope.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {site.scope.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-none text-clay">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] leading-snug text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-12 max-w-prose font-serif text-[clamp(1.2rem,2.5vw,1.5rem)] leading-snug text-primary">
            {site.scope.why}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 font-mono text-[12px] tracking-tight text-subtle">{site.scope.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* 4. Offer */
export function Offer({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{site.ui.offerLabel}</SectionLabel>
        <Reveal>
          <h2 className="max-w-[20ch] font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug text-primary">
            {site.offer.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {site.offer.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="border-t border-hair-strong pt-5">
                <p className="mb-2 text-[17px] font-medium text-clay">{item.label}</p>
                <p className="text-[15px] leading-relaxed text-secondary">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-12 max-w-prose text-[16px] leading-relaxed text-secondary">
            {site.offer.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 5. Atelier — grille unique, live en tête */
export function Atelier({
  site,
  lang,
  projects,
}: {
  site: Site;
  lang: Locale;
  projects: Project[];
}) {
  return (
    <section id="atelier" className="scroll-mt-16 border-t border-hair bg-surface">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{site.ui.atelierLabel}</SectionLabel>
        <Reveal>
          <h2 className="max-w-[22ch] font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug text-primary">
            {site.atelier.title}
          </h2>
          <p className="mt-4 max-w-prose text-[16px] text-secondary">{site.atelier.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} lang={lang} ui={site.ui} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. Process — boucle visuelle, pas de paragraphe */
export function Process({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
            {site.process.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-control border border-hair-strong px-4 py-2 text-[15px] text-primary">
                  {step}
                </span>
                {i < site.process.steps.length - 1 && (
                  <span className="text-clay" aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif text-[18px] italic text-secondary">{site.process.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* 7. Proof — l'histoire d'abord, le CV ensuite (discret) */
export function Proof({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{site.ui.proofLabel}</SectionLabel>
        <Reveal>
          <p className="max-w-[34ch] font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug text-primary">
            {site.proof.lead}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {site.proof.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div>
                <p className="text-[15px] font-medium text-primary">{item.label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-subtle">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Soul */
export function Soul({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair bg-surface">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-[42ch] flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/pierre.jpg"
              alt={site.name}
              className="mb-8 h-20 w-20 rounded-full border border-hair object-cover grayscale"
              loading="lazy"
            />
            <p className="font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-snug text-primary">
              {site.soul.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 9. Contact */
export function Contact({ site }: { site: Site }) {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-hair">
      <div className="mx-auto max-w-container px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-primary">
            {site.contactSection.title}
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-[17px] leading-relaxed text-secondary">
            {site.contactSection.text}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.contact.email}`}
              className="rounded-control bg-clay px-5 py-2.5 text-[15px] font-medium text-clay-ink transition-colors hover:bg-clay-hover"
            >
              {site.ui.cta.writeEmail}
            </a>
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-control border border-hair-strong px-5 py-2.5 text-[15px] text-primary transition-colors hover:bg-elevated"
            >
              LinkedIn
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-control border border-hair-strong px-5 py-2.5 text-[15px] text-primary transition-colors hover:bg-elevated"
            >
              WhatsApp
            </a>
            <a
              href={site.contact.cv}
              className="rounded-control border border-hair-strong px-5 py-2.5 text-[15px] text-primary transition-colors hover:bg-elevated"
            >
              {site.ui.nav.cv}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Citation démotée, juste avant le footer */
export function QuoteStrip({ site }: { site: Site }) {
  return (
    <section className="border-t border-hair">
      <div className="mx-auto max-w-prose px-5 py-14 text-center sm:px-8">
        <Reveal>
          <blockquote className="font-serif text-[16px] italic leading-relaxed text-secondary">
            « {site.proof.quote.text} »
          </blockquote>
          <p className="mt-3 text-[13px] text-subtle">
            {site.proof.quote.author}, {site.proof.quote.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Footer */
export function Footer({ site }: { site: Site }) {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-5 py-8 text-[13px] text-subtle sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="font-mono">{site.role}</span>
      </div>
    </footer>
  );
}
