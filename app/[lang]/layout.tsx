import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { getSite, isLocale, locales, type Locale } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const site = getSite(lang);
  const ogImage = lang === "en" ? "/og-en.png" : "/og.png";
  return {
    title: site.meta.title,
    description: site.meta.description,
    openGraph: {
      title: site.meta.title,
      description: site.meta.description,
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      url: `https://${site.domain}/${lang}`,
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.meta.title,
      description: site.meta.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en" },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <SetHtmlLang lang={lang as Locale} />
      {children}
    </>
  );
}
