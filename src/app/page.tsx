"use client";

import Hero from "@/components/Hero";
import Season from "@/components/Season";
import Trip from "@/components/Trip";
import UsefulLinks from "@/components/UsefulLinks";
import Travel from "@/components/Travel";
import Map from "@/components/Map";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Fade cascade damping={0.01} triggerOnce>
        <Travel />
        <UsefulLinks />
        <Map />
        <Season />
        <Trip />
        <Blog />
        {/* <FAQ /> */}
        <Contact />
      </Fade>
    </>
  );
}
