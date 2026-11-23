import { Inter, Jost } from "next/font/google";

/**
 * The two brand fonts (JAM-489). The Tailwind theme reads their CSS variables:
 * `font-display` is Jost, `font-body` is Inter. Put `fontVariables` on <html>.
 */
export const display = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${display.variable} ${body.variable}`;
