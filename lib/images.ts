/*
 * The photos of the site (JAM-491). All five are stock placeholders for v1.
 * When Max sends his own photos, change the file in `public/images/` and its entry here.
 * Unsplash and Pixabay licences permit commercial use with no credit. Keep the source.
 */
export type ImageKey = "hero" | "sauna" | "stove" | "steam" | "iceBath";

export type SiteImage = {
  src: string;
  alt: string;
  source: string;
  licence: string;
  placeholder: boolean;
};

export const images: Record<ImageKey, SiteImage> = {
  hero: {
    src: "/images/hero.webp",
    alt: "A warm wooden sauna with benches and a window onto a forest",
    source: "https://unsplash.com/photos/xrjx6nX3Mp4 (Clay Banks)",
    licence: "Unsplash License",
    placeholder: true,
  },
  sauna: {
    src: "/images/sauna.webp",
    alt: "A dark wood sauna with soft light along the ceiling and a stone stove",
    source: "https://unsplash.com/photos/r_3QoSxNWOw (HUUM)",
    licence: "Unsplash License",
    placeholder: true,
  },
  stove: {
    src: "/images/stove.webp",
    alt: "Steam rising from the hot stones of a sauna stove",
    source: "https://unsplash.com/photos/IsDUT74YEp4 (HUUM)",
    licence: "Unsplash License",
    placeholder: true,
  },
  steam: {
    src: "/images/steam.webp",
    alt: "Steam and a beam of light in a quiet wooden sauna",
    source: "https://pixabay.com/photos/sauna-9176885/ (tylijura)",
    licence: "Pixabay Content License",
    placeholder: true,
  },
  iceBath: {
    src: "/images/ice-bath.webp",
    alt: "A cold plunge tub with a wooden rim and a small step",
    source: "Client file image.png (Drive id 19EijqVkiW-yWgbKUzxILT_QOpLEQ-ozX)",
    licence: "Placeholder from the client. Confirm the licence before it goes live",
    placeholder: true,
  },
};
