import Button from "../ui/Button";
import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className=" w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
              Luxury Event Studio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight pb-4">
              Creating unforgettable events with elegance and style
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed pb-10">
              We create unforgettable celebrations that become lifelong
              memories.
            </p>
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
            <div className="flex gap-4 mt-8">
              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">50+</p>
                <p className="text-sm text-gray-500">Events</p>
              </div>

              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm text-gray-500">Years</p>
              </div>

              <div className="rounded-xl bg-gray-100 px-4 py-3 text-center">
                <p className="font-bold text-xl">5★</p>
                <p className="text-sm text-gray-500">Reviews</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/hero-placeholder.avif"
              width={700}
              height={500}
              alt="Wedding hall decoration"
              className="rounded-3xl shadow-2xl object-cover h-full "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
