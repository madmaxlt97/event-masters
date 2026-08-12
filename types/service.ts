import { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  slug: string;
  icon: ReactNode;
  details: string[];
};
