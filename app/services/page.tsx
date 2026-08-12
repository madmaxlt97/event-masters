import Container from "@/components/ui/Container";
import ServicesList from "@/components/services/ServicesList";
import FadeIn from "@/components/animations/FadeIn";

export default function Services() {
  return (
    <main>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              OUR SERVICES
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              What we have to offer
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600">
              From intimate celebrations to large-scale events, we take care of
              the details that make each occasion special.
            </p>
          </FadeIn>
          <ServicesList />
        </Container>
      </section>
    </main>
  );
}
