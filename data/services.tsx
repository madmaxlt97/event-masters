import { Service } from "@/types/service";
import { Heart } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Building2 } from "lucide-react";
import { Sparkles } from "lucide-react";

export const services: Service[] = [
  {
    title: "Wedding Design",
    description: "Elegant wedding decoration tailored to your vision.",
    slug: "wedding-decoration",
    icon: <Heart />,
    details: [
      "Wedding ceremony and reception decoration",
      "Table styling and floral arrangements",
      "Lighting and decorative elements",
      "Personalized design concept",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Professional event styling for conferences and business gatherings.",
    slug: "event-decoration",
    icon: <PartyPopper />,
    details: [
      "Corporate celebrations and company events",
      "Branded event styling and decoration",
      "Venue setup and visual coordination",
      "Professional planning tailored to your goals",
    ],
  },
  {
    title: "Private Celebrations",
    description: "Birthdays, anniversaries and unforgettable family moments.",
    slug: "event-organization",
    icon: <Building2 />,
    details: [
      "Birthday parties and private celebrations",
      "Custom decoration and table styling",
      "Floral arrangements and decorative elements",
      "Personalized concepts tailored to your occasion",
    ],
  },
  {
    title: "Custom Decoration",
    description: "Unique floral and decorative concepts created just for you.",
    slug: "custom-decoration",
    icon: <Sparkles />,
    details: [
      "Creative styling for memorable occasions",
      "Custom decorative concepts",
      "Floral arrangements and finishing touches",
      "Coordinated visual details throughout the venue",
    ],
  },
];
