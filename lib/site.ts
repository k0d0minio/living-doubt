/** Site-wide values. The one home of the contact details and the booking address. */
export const site = {
  name: "Nourish",
  description:
    "Sauna and ice bath in Sintra. A 75-minute session of heat, cold and rest, open every day from 07:00 to 23:00.",
  email: "maximrettich@yahoo.com",
  phone: "+34 600 235 207",
  whatsappUrl: "https://wa.me/34600235207",
  /** The booking service. Empty: each Book button opens the contact block (`#contact`). */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  hours: "07:00 to 23:00",
  town: "Sintra",
};

/** The pages in the navigation, in order. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "The experience" },
  { href: "/prices", label: "Prices" },
  { href: "/faq", label: "FAQ" },
] as const;

/** The absolute address of the site, for the sitemap and the Open Graph tags. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
