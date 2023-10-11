import React from "react";
import Chip from "./Chip.js";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MongoDB",
    "Python",
    "Java",
    "C",
    "C++",
    "GIT",
    "GitHub",
    "Pandas",
    "Web Scraping",
    "NextJS",
    "Flask",
  ];
  const chips = skills.map((skill) => <Chip name={skill}></Chip>);
  return (
    <section className="bg-gray-100 min-h-screen pt-40 pb-28" id="about">
      <article className="text-center font-montserrat">
        <h2 className="text-5xl font-semibold mb-6">About Me</h2>
        <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
        <h2 className="text-xl mx-auto lg:w-4/12 mb-20 w-9/12">
          Here you will find out more about my technical skills, what I do, and
          my professional interests.
        </h2>
      </article>
      <article className="grid lg:grid-cols-2 h-3/4 justify-items-center w-4/5 mx-auto">
        <aside className="w-9/12">
          <p className="md:text-3xl font-semibold font-montserrat mb-8 text-2xl text-center lg:text-left">
            Learn More About Me
          </p>
          <aside className="text-lg leading-8">
            <p className="mb-5">
              I'm a <b>software engineer</b> with a focus on full-stack
              development. I enjoy the entire process of full-stack development
              from designing the application, creating the frontend, and
              building the backend. I'm open to
              <b> shifting</b> my focus elsewhere depending on the opportunity.
            </p>
            <p className="mb-5">
              My projects seek to make life more <b>convenient</b> in any way
              possible. When I'm not coding, I am always searching for new
              technologies that I can use for future projects as well as
              improving my current projects which are displayed in the
              <b> Projects</b> section.
            </p>
            <p>
              I am interested in <b>job opportunities</b> where I can contribute
              and develop professionally. Please do not hesitate to
              <b> contact</b> me if you have a good opportunity that matches my
              qualifications or requires me to adapt for the team.
            </p>
          </aside>
        </aside>
        <aside className="w-9/12">
          <p className="text-2xl font-semibold mb-8 font-montserrat mt-24 lg:mt-0 text-center lg:text-left md:text-3xl">Technical Skills</p>
          <div className="flex flex-wrap lg:w-full">{chips}</div>
        </aside>
      </article>
    </section>
  );
}

export default About;
