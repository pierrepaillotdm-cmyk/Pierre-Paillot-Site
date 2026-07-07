import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import {
  Hero,
  Phrase,
  Scope,
  Offer,
  Atelier,
  Process,
  Proof,
  Soul,
  Contact,
  QuoteStrip,
  Footer,
} from "@/components/Sections";
import { getSite, getProjectsSorted, isLocale } from "@/lib/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const site = getSite(lang);
  const projects = getProjectsSorted(lang);

  return (
    <>
      <Nav lang={lang} site={site} />
      <main>
        <Hero site={site} />
        <Phrase site={site} />
        <Scope site={site} />
        <Offer site={site} />
        <Atelier site={site} lang={lang} projects={projects} />
        <Process site={site} />
        <Proof site={site} />
        <Soul site={site} />
        <Contact site={site} />
        <QuoteStrip site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
