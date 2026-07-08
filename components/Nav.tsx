"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import type { Locale, Site } from "@/lib/content";

export function Nav({ lang, site }: { lang: Locale; site: Site }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "fr" ? "en" : "fr";
  const toggleHref = pathname.replace(/^\/(fr|en)/, `/${other}`) || `/${other}`;
  const ui = site.ui;
  const toggleLabel = other === "en" ? "Switch to English" : "Passer en français";

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-5 sm:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-medium tracking-tight text-primary">{site.name}</span>
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
            aria-label={toggleLabel}
            className="hidden rounded-control border border-hair px-2.5 py-1.5 font-mono text-[13px] text-secondary transition-colors hover:border-hair-strong hover:text-primary sm:inline-block"
          >
            {other.toUpperCase()}
          </a>
          <ThemeToggle lang={lang} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-hair text-secondary transition-colors hover:border-hair-strong hover:text-primary sm:hidden"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-t border-hair bg-page sm:hidden">
          <div className="mx-auto flex max-w-container flex-col px-5 py-3">
            <Link
              href={`/${lang}#atelier`}
              onClick={() => setOpen(false)}
              className="rounded-control py-3 text-[15px] text-secondary transition-colors hover:text-primary"
            >
              {ui.nav.projects}
            </Link>
            <Link
              href={`/${lang}#contact`}
              onClick={() => setOpen(false)}
              className="rounded-control border-t border-hair py-3 text-[15px] text-secondary transition-colors hover:text-primary"
            >
              {ui.nav.contact}
            </Link>
            <a
              href={toggleHref}
              className="flex items-center justify-between border-t border-hair py-3 text-[15px] text-secondary transition-colors hover:text-primary"
            >
              <span>{other === "en" ? "English" : "Français"}</span>
              <span className="font-mono text-[13px] text-subtle">{other.toUpperCase()}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
