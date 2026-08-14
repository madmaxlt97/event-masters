import Container from "./ui/Container";
import Link from "next/link";

export default function Footer() {
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
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>hello@eventmasters.com</li>
              <li>+370 600 00000</li>
              <li>@eventmasters</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 gap-4 border-t border-white/20 pt-6 flex flex-col md:flex-row md:justify-between">
          <p className="text-sm text-gray-400">
            © 2026 Event Studio. All rights reserved.
          </p>
          <a className="text-sm text-gray-400 hover:text-white transition">
            Cookies Policies
          </a>
        </div>
      </Container>
    </footer>
  );
}
