"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Our projects" },
    { href: "/contacts", label: "Contacts" },
  ];

  const isActive = (href: string) =>
    pathName === href || pathName.startsWith(`${href}/`);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-between p-2 px-4">
          <h1>
            <Link
              href="/"
              className="whitespace-nowrap text-[16px] font-semibold sm:text-[20px]"
            >
              Event masters
            </Link>
          </h1>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] min-[340px]:text-[12px] sm:text-[16px] transition-all duration-300 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl md:hidden"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-gray-200 px-4 pb-4 md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-gray-100 py-4 text-sm transition-colors last:border-b-0 ${
                    isActive(link.href)
                      ? "font-semibold text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
