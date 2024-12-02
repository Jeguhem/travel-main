import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
