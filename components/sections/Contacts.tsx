import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import { contacts } from "@/data/contacts";
import ContactItem from "../contacts/ContactItem";
import FadeIn from "../animations/FadeIn";

export default function Contacts() {
  return (
    <FadeIn>
      <section id="contact" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-2/5">
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-600">
                GET IN TOUCH WITH US
              </p>
              <h2 className="text-4xl font-bold mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-gray-600 max-w-md mb-8">
                Whether you're planning a wedding, a private celebration or a
                corporate event, we'd love to hear your ideas and help turn them
                into reality.
              </p>
              <Button href="/contact">Start Your Project</Button>

              <div className="mt-10 space-y-6">
                {contacts.map((contact) => (
                  <ContactItem
                    key={contact.label}
                    icon={contact.icon}
                    label={contact.label}
                    value={contact.value}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-3/5">
              <div className="relative aspect-[5/4] max-h-[700px] overflow-hidden rounded-3xl">
                <Image
                  src="/hero-placeholder.avif"
                  alt="Event decoration by Event Masters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}
