import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { contacts } from "@/data/contacts";
import ContactItem from "@/components/contacts/ContactItem";
import Button from "@/components/ui/Button";

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
                <form className="mt-10 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Tell us about your event
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Tell us a little about what you're planning..."
                      rows={4}
                      required
                      className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-4  bg-black px-7 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
                  >
                    Send Inquiry →
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
