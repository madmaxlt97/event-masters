"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const links = [
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Our projects" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md flex flex-row justify-between items-center p-2 pl-4 pr-4">
        <Link
          className="font-semibold text-[16px] sm:text-[20px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] min-[400px]:max-w-none"
          href="/"
        >
          <h1>Event masters</h1>
        </Link>

        <div className="flex items-center gap-2 min-[340px]:gap-4 sm:gap-6">
          {links.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] min-[340px]:text-[12px] sm:text-[16px] transition-all duration-300 ${
                  isActive
                    ? "text-white scale-110 font-bold"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
