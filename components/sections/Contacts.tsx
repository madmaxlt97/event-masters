import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

export default function Contacts() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-2/5">
            <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
              GET IN TOUCH WITH US
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              Whether you're planning a wedding, a private celebration or a
              corporate event, we'd love to hear your ideas and help turn them
              into reality.
            </p>
            <Button className="mt-8">Let's talk</Button>{" "}
            {/*Finished here! Next step is to create contact cards */}
            <div>{/*Contact items */}</div>
          </div>
          <div className="lg:w-3/5">
            <Image src="/..." alt="Contact photo" fill />
          </div>
        </div>
      </Container>
    </section>
  );
}
