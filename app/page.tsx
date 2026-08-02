"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
