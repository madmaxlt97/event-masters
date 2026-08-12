import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Luxury Wedding in Vilnius",
    description:
      "An elegant wedding with floral installations, candlelight decor and timeless white aesthetics.",
    slug: "wedding-vilnius",
    images: [
      "/hero-placeholder.avif",
      "/about-placeholder.avif",
      "/events-photos/birthday-celebration.avif",
    ],
  },
  {
    title: "Corporate Gala Evening",
    description:
      "A modern corporate event featuring premium table styling, stage decoration and ambient lighting.",
    slug: "gala-evening",
    images: ["/about-placeholder.avif"],
  },
  {
    title: "Garden Birthday Celebration",
    description:
      "An intimate outdoor birthday party with natural decorations, custom seating and cozy evening lights.",
    slug: "garden-birthday",
    images: ["/events-photos/birthday-celebration.avif"],
  },
  {
    title: "Luxury Baby Shower",
    description:
      "Soft pastel decorations, balloon arrangements and personalized details for a memorable celebration.",
    slug: "luxury-babyshower",
    images: ["/events-photos/baby-shower.avif"],
  },
  {
    title: "Winter Wedding Reception",
    description:
      "A sophisticated winter-themed wedding with crystal accents, candles and seasonal floral design.",
    slug: "winter-wedding",
    images: ["/events-photos/winter-wedding.avif"],
  },
];
