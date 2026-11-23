import { bookingHref } from "@/lib/booking";
import { site } from "@/lib/site";

/** The "Book a session" button. Its target comes from `site.bookingUrl` (lib/booking.ts). */
export function BookButton({ label = "Book a session", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={bookingHref(site.bookingUrl)}
      className={`inline-flex items-center whitespace-nowrap justify-center rounded-full bg-bronze px-5 py-2.5 font-display text-small font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream ${className}`}
    >
      {label}
    </a>
  );
}
