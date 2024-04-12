import React from "react";
import Image from "next/image";
import "./hero.css";

const Hero = () => {
  return (
    <div id="container-hero">
      <div id="cover">
        <Image
          id="hero"
          src="/cover.jpg"
          width={1000}
          height={1000}
          alt="Picture of India Gate in New Delhi, India"
          quality={100}
        />
      </div>
      <div id="main">
        <h1>MAKE LIFE AN ADVENTURE</h1>
        <h3>Welcome to India</h3>
      </div>
    </div>
  );
};

export default Hero;
