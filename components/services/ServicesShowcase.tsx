import { Service } from "@/types/service";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";

type ServiceCardProps = {
  service: Service;
  index: number;
  /*priority?: boolean;
  reverse?: boolean;*/
};

export default function ServiceShowcase({ service, index }: ServiceCardProps) {
  return (
    <FadeIn delay={0.15}>
      <article className="group border-t border-border-custom py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm tracking-widest text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="mb-5 flex w-12 h-12 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
              {service.icon}
            </div>
            <h2 className="text-3xl font-semibold">{service.title}</h2>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="group shrink-0 text-sm font-medium text-gray-500"
          >
            Explore service
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
