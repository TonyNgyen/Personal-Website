import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Tony Nguyen", "a software engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <header
      className="bg-Snow h-5/6 flex justify-center items-center font-montserrat w-full py-80"
      id="home"
    >
      <article className="w-full">
        <h1 className="lg:text-7xl font-semibold text-center mb-14 text-4xl">
          <span className="w-full">Hey, I'm {text}</span>
          <Cursor cursorColor="#A41623"></Cursor>
        </h1>
        <h2 className="text-center mx-auto lg:w-5/12 text-xl leading-8 mb-5 w-9/12">
          A software engineer expanding his skills and building fullstack
          applications and websites that are useful to others.
        </h2>
      </article>
    </header>
  );
}

export default Hero;
