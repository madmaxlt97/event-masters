import { Service } from "@/types/service";
import { Heart } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Building2 } from "lucide-react";
import { Sparkles } from "lucide-react";

export const services: Service[] = [
  {
    title: "Wedding Design",
    description: "Elegant wedding decoration tailored to your vision.",
    icon: <Heart />,
  },
  {
    title: "Corporate Events",
    description:
      "Professional event styling for conferences and business gatherings.",
    icon: <PartyPopper />,
  },
  {
    title: "Private Celebrations",
    description: "Birthdays, anniversaries and unforgettable family moments.",
    icon: <Building2 />,
  },
  {
    title: "Custom Decoration",
    description: "Unique floral and decorative concepts created just for you.",
    icon: <Sparkles />,
  },
];
