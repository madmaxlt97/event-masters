import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
                About us
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                We create moments worth remembering
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600">
                Every celebration has its own story. Our job is to turn that
                story into an atmosphere, a feeling, and memories that last.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl lg:h-[550px]">
              <Image
                src="/about-placeholder.avif"
                alt="Event Masters creating an elegant celebration"
                fill
                priority
                quality={60}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <FadeIn className="w-full lg:w-1/2" delay={0.2}>
              <div>
                <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
                  Our story
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  More than decoration. We create an experience.
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
                  <p>
                    We believe that the most beautiful events are the ones that
                    feel personal.
                  </p>

                  <p>
                    From the first idea to the final detail, we work closely
                    with our clients to create celebrations that reflect their
                    personality, style, and vision.
                  </p>

                  <p>
                    Whether it is an intimate gathering or a large celebration,
                    we care about every detail that makes the moment truly
                    yours.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-100 px-6 py-6 text-center">
                <p className="text-3xl font-bold">10+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Years of experience
                </p>
              </div>

              <div className="rounded-xl bg-gray-100 px-6 py-6 text-center">
                <p className="text-3xl font-bold">50+</p>
                <p className="mt-1 text-sm text-gray-500">Events created</p>
              </div>

              <div className="rounded-xl bg-gray-100 px-6 py-6 text-center">
                <p className="text-3xl font-bold">5★</p>
                <p className="mt-1 text-sm text-gray-500">Client rating</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
                Our philosophy
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                What makes our work special
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold">Creativity</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  We create concepts that feel unique rather than following a
                  template.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold">Attention to detail</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Every element matters, from the overall atmosphere to the
                  smallest decorative detail.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold">Personal approach</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  We listen first, understand your vision, and build the
                  celebration around you.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="rounded-3xl bg-[#2b2b2b] px-6 py-16 text-center text-white md:px-12">
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's create something beautiful
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-gray-300">
                Tell us about your event and let's turn your ideas into
                something unforgettable.
              </p>
              <Button
                href="/contacts"
                className="mt-8 bg-[#c8a97e] text-[#2b2b2b] hover:-translate-y-1 hover:shadow-xl"
              >
                Let's talk →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
