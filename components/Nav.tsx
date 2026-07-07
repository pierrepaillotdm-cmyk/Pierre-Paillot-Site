"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import type { Locale, Site } from "@/lib/content";

export function Nav({ lang, site }: { lang: Locale; site: Site }) {
  const pathname = usePathname();
  const other: Locale = lang === "fr" ? "en" : "fr";
  const toggleHref = pathname.replace(/^\/(fr|en)/, `/${other}`) || `/${other}`;
  const ui = site.ui;

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-5 sm:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <span className="font-medium tracking-tight text-primary">{site.name}</span>
          {site.available && (
            <span className="hidden items-center gap-1.5 text-[12px] text-secondary sm:inline-flex">
              <span className="h-[7px] w-[7px] rounded-full bg-live" />
              {ui.nav.available}
            </span>
          )}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href={`/${lang}#atelier`}
            className="hidden rounded-control px-3 py-1.5 text-[14px] text-secondary transition-colors hover:text-primary sm:block"
          >
            {ui.nav.projects}
          </Link>
          <Link
            href={`/${lang}#contact`}
            className="hidden rounded-control px-3 py-1.5 text-[14px] text-secondary transition-colors hover:text-primary sm:block"
          >
            {ui.nav.contact}
          </Link>
          <a
            href={site.contact.cv}
            className="rounded-control border border-hair-strong px-3 py-1.5 text-[14px] text-primary transition-colors hover:bg-elevated"
          >
            {ui.nav.cv}
          </a>
          <a
            href={toggleHref}
            aria-label={other === "en" ? "Switch to English" : "Passer en français"}
            className="rounded-control border border-hair px-2.5 py-1.5 font-mono text-[13px] text-secondary transition-colors hover:border-hair-strong hover:text-primary"
          >
            {other.toUpperCase()}
          </a>
          <ThemeToggle lang={lang} />
        </nav>
      </div>
    </header>
  );
}
