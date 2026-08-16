import { Metadata } from "next";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);

  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="text-gray-900">
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
            >
              ← Back to services
            </Link>
            <div className="mt-10 max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                OUR SERVICES
              </p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
                {service.description}
              </p>
            </div>
            <div className="mt-12 grid gap-10 border-t border-border-custom pt-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  WHAT WE OFFER
                </p>

                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Thoughtful details, beautifully executed.
                </h2>
              </div>

              <ul className="space-y-5">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="border-b border-border-custom py-5 text-lg text-gray-600 first:pt-0 last:border-b-0"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-16 border-t border-border-custom pt-16 text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to create something beautiful?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Let's bring your vision to life.
              </p>
              <Button href="/contact" className="mt-8">
                Start your project →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
