import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),

  title: {
    default: "Event Masters | Luxury Event Studio",
    template: "%s | Event Masters",
  },

  description:
    "Event Masters creates elegant and unforgettable weddings, private celebrations, and corporate events.",

  openGraph: {
    title: "Event Masters | Luxury Event Studio",
    description:
      "Elegant and unforgettable weddings, private celebrations, and corporate events.",
    siteName: "Event Masters",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Event Masters — Luxury Event Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Event Masters | Luxury Event Studio",
    description:
      "Elegant and unforgettable weddings, private celebrations, and corporate events.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Header />

        <main className="flex-1 bg-slate-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
