"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookButton } from "@/components/BookButton";
import { MobileMenu } from "@/components/MobileMenu";
import { nav, site } from "@/lib/site";

/** The sticky header of each page: the mark, the name, the navigation and the Book button. */
export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-ink-soft bg-ink/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:h-20">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-cream">
          <Image src="/brand/nourish-mark.svg" alt="" width={36} height={36} priority />
          <span className="font-display text-xl font-light uppercase tracking-[0.3em] text-cream">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="font-display text-small uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-cream aria-[current=page]:text-bronze"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <BookButton className="hidden sm:inline-flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
