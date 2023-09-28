import "./App.css";
import Arrow from "./Arrow";
import Hero from "./Hero";
import Navbar from "./Navbar";
import React from "react";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Arrow />
      <About />
      <section className="h-screen bg-Snow pt-40" id="projects">
        <article className="text-center font-montserrat">
          <h2 className="text-5xl font-semibold mb-6">Projects</h2>
          <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
          <h2 className="text-xl mx-auto w-4/12 mb-20">
            This is where you will some of my personal projects as well as the
            technologies that I used for each.
          </h2>
        </article>
      </section>
      <Contact />
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f
// https://www.youtube.com/watch?v=AF6vGYIyV8M
// Test
