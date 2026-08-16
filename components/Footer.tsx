import Container from "./ui/Container";
import Link from "next/link";

export default function Footer() {
  const footerLinkStyles = "transition-colors duration-300 hover:text-white";
  return (
    <footer className="bg-gray-950 text-white py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">Event Masters</h3>
            <p className="mt-4 text-gray-400 max-w-sm">
              Creating unforgettable events with thoughtful design and attention
              to every detail.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/#about" className={footerLinkStyles}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={footerLinkStyles}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className={footerLinkStyles}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkStyles}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:hello@eventmasters.com">
                  hello@eventmasters.com
                </a>
              </li>
              <li>
                <a href="tel:+370 600 00000">+370 600 00000</a>
              </li>
              <li>@eventmasters</li>
            </ul>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col gap-4 border-t border-white/20
          pt-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-400">
            © 2026 Event Masters. All rights reserved.
          </p>
          <a className="text-sm text-gray-400 hover:text-white transition">
            Cookie Policy
          </a>
        </div>
      </Container>
    </footer>
  );
}
