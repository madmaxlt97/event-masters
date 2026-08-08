import { services } from "@/data/services";
import Container from "../ui/Container";
import ServiceCard from "../services/ServiceCard";
import FadeIn from "../animations/FadeIn";

export default function Services() {
  return (
    <FadeIn>
      <section id="services" className="py-20">
        <Container>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Our services
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Everything you need for an unforgettable event.
          </h2>

          <p className="text-gray-600 max-w-2xl mb-12">
            From elegant weddings to corporate celebrations, we bring
            creativity, precision and passion to every detail.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon} //possible to write just one line -> <ServiceCard key={service.title} {...service} />
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}
