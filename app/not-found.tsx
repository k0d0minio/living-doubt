import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-section text-center">
      <p className="mb-4 font-display text-label uppercase text-bronze">404</p>
      <h1 className="text-h1">This page is not here</h1>
      <p className="mt-6 text-body text-cream/80">The address may be wrong, or the page has moved.</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-cream/40 px-5 py-2.5 font-display text-small uppercase tracking-[0.18em] text-cream hover:border-cream"
        >
          Back to home
        </Link>
        <BookButton />
      </div>
    </div>
  );
}
