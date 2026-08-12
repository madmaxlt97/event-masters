import FadeIn from "../animations/FadeIn";
import { services } from "@/data/services";
import ServiceShowcase from "./ServicesShowcase";

export default function ServicesList() {
  return (
    <FadeIn>
      <div className="mt-16">
        {services.map((service, index) => (
          <ServiceShowcase
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>
    </FadeIn>
  );
}
