import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { contacts } from "@/data/contacts";
import ContactItem from "@/components/contacts/ContactItem";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import GoogleMaps from "@/components/contacts/GoogleMaps";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell Event Masters about your event and let's create something beautiful together.",
};

export default function Contact() {
  return (
    <main>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              GET IN TOUCH
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Let's Create Something Beautiful Together
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Whether you're planning a wedding, a private celebration, or a
              corporate event, we'd love to hear your ideas and help bring them
              to life.
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid gap-12 border-t border-border-custom pt-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  CONTACT DETAILS
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Tell us a little bit about your event.
                </h2>
                <p className="mt-4 max-w-lg text-gray-600">
                  Whether you already have a clear vision or are still exploring
                  ideas, we're happy to start the conversation.
                </p>
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
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  START A CONVERSATION
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Let's talk about your event.
                </h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <GoogleMaps />
        </Container>
      </section>
    </main>
  );
}
