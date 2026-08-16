import Button from "../ui/Button";
import Image from "next/image";
import Container from "../ui/Container";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="mb-4 text-sm uppercase tracking-widest text-gray-600">
              Luxury Event Studio
            </p>
            <FadeIn delay={0}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight pb-4">
                Creating unforgettable events with elegance and style
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed pb-10">
                We create unforgettable celebrations that become lifelong
                memories.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  href="/contacts"
                  className="border-1 border-red-300 bg-red-50 hover:-translate-y-1 hover:shadow-xl hover:bg-red-100 transition-all duration-300 ease-in-out"
                >
                  Contact us →
                </Button>

                <Button
                  href="/projects"
                  className="border-1 border-red-300 bg-red-50 hover:-translate-y-1 hover:shadow-xl hover:bg-red-100 transition-all duration-300 ease-in-out"
                >
                  See our works →
                </Button>
              </div>
            </FadeIn>
            <div className="flex gap-4 mt-8">
              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">50+</p>
                <p className="text-sm text-gray-600">Events</p>
              </div>

              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>

              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">5★</p>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[500px] md:flex-[1.25] overflow-hidden rounded-3xl">
            <Image
              src="/hero-placeholder.avif"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
              alt="Wedding hall decoration"
              className="rounded-3xl shadow-2xl object-cover h-full "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
