import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-container flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-subtle">404</p>
      <h1 className="mt-4 font-serif text-[clamp(1.8rem,4vw,2.6rem)] text-primary">
        Cette page n'existe pas.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-control bg-clay px-5 py-2.5 text-[15px] font-medium text-clay-ink transition-colors hover:bg-clay-hover"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
