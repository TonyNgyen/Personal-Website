import React from "react";
import image from "./images/example.png";
import Chip from "./Chip";

function Projects() {
  return (
    <section className="min-h-screen bg-Snow pt-40" id="projects">
      <article className="text-center font-montserrat">
        <h2 className="text-5xl font-semibold mb-6">Projects</h2>
        <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
        <h2 className="text-xl mx-auto w-4/12 mb-20">
          This is where you will some of my personal projects as well as the
          technologies that I used for each.
        </h2>
      </article>
      <article className="flex mx-auto w-8/12">
        <a href="https://k-calendar-2.vercel.app/" className="mr-10">
          <img src={image}></img>
        </a>
        <aside className="font-montserrat my-auto">
          <h2 className="text-3xl font-semibold mb-5 hover:text-Ruby hover:underline underline-offset-8">
            <a href="https://k-calendar-2.vercel.app/">K-Calendar</a>
          </h2>
          <p className="text-lg leading-8 mb-5">
            K-Calendar is a web application which acts as an informational hub
            for Korean pop. Users can use K-Calendar to track upcoming K-pop
            releases for the month as well aslook at artists' past releases.
          </p>
          <aside className="flex flex-wrap">
            <Chip name="HTML" />
            <Chip name="CSS" />
            <Chip name="JavaScript" />
            <Chip name="React" />
            <Chip name="NextJS" />
            <Chip name="MongoDB" />
            <Chip name="GIT" />
            <Chip name="Github" />
            <Chip name="Web Scraping" />
          </aside>
        </aside>
      </article>
    </section>
  );
}

export default Projects;
