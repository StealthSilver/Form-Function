"use client";
import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { Testimonials } from "../components/sections/Testimonials";
import { CTA } from "../components/sections/Cta";
import { Footer } from "../components/sections/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
