"use client";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { LazyMotion, domAnimation } from "framer-motion";


export default function Home() {
  return (
    <div>
      <LazyMotion features={domAnimation}>
      <Hero />
      <About />
      <Projects />
      </LazyMotion>
    </div>
  );
}
