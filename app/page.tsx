"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <h1>That's a Home page</h1>
      <div className="flex gap-4">
        <Button
          href="/contacts"
          className="border-red-500 border-2 hover:scale-110 transition"
        >
          Contact us
        </Button>

        <Button href="/services">See what we can do</Button>
      </div>
    </>
  );
}
