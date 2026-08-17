import Container from "../ui/Container";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[360px] md:h-[450px]">
                <Image
                  src="/about-placeholder.avif"
                  fill
                  alt="Wedding hall decoration"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm uppercase tracking-widest text-gray-600 mb-4">
                About our studio
              </p>

              <h2 className="text-4xl font-bold leading-tight mb-6">
                We don't just organize events.
                <span className="italic">
                  We create experiences people remember forever.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
                From intimate weddings to large corporate events, we carefully
                design every detail to create beautiful and unforgettable
                moments.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}
