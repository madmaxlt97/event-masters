import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { contacts } from "@/data/contacts";
import ContactItem from "@/components/contacts/ContactItem";

export default function About() {
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
          <FadeIn>
            <div className="grid gap-12 border-t border-border-custom pt-12 lg:grid-cols-2 lg:gap-20">
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
              <div>{/*Here'll be form */}</div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
