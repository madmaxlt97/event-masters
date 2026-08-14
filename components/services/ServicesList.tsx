import { services } from "@/data/services";
import ServiceShowcase from "./ServicesShowcase";

export default function ServicesList() {
  return (
    <div className="mt-16">
      {services.map((service, index) => (
        <ServiceShowcase key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}
