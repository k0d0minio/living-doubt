"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/BookButton";
import { nav } from "@/lib/site";

/** The navigation on a narrow screen: a button that opens and closes a panel. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-cream focus-visible:outline-2 focus-visible:outline-cream"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        onClick={(event) => (event.target as HTMLElement).closest("a") && setOpen(false)}
        className="absolute inset-x-0 top-full border-t border-ink-soft bg-ink px-6 pb-8 pt-4"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block py-3 font-display text-h3 text-cream aria-[current=page]:text-bronze"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <BookButton className="mt-6 w-full" />
      </nav>
    </div>
  );
}
