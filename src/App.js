import "./App.css";
import Arrow from "./Arrow";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Chip from "./Chip";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrfd87w",
        "template_8h48u9n",
        form.current,
        "faNgOb9LHJLLNVTq6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
    <div className="App">
      <Navbar />
      <Hero />
      <Arrow />
      <section className="bg-gray-100 h-screen pt-40" id="about">
        <article className="text-center font-montserrat">
          <h2 className="text-5xl font-semibold mb-6">About Me</h2>
          <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
          <h2 className="text-xl mx-auto w-4/12 mb-20">
            Here you will find out more about my technical skills, what I do,
            and my professional interests.
          </h2>
        </article>
        <article className="grid grid-cols-2 h-3/4 justify-items-center w-4/5 mx-auto">
          <aside className="w-9/12">
            <p className="text-3xl font-semibold font-montserrat mb-8">
              Learn More About Me
            </p>
            <aside className="text-lg leading-8">
              <p className="mb-5">
                I'm a <b>software engineer</b> with a focus on full-stack
                development. I enjoy the entire process of full-stack
                development from designing the application, creating the
                frontend, and building the backend. I'm open to
                <b> shifting</b> my focus elsewhere depending on the
                opportunity.
              </p>
              <p className="mb-5">
                My projects seek to make life more <b>convenient</b> in any way
                possibe. When I'm not coding, I am always searching for new
                technologies that I can use for future projects as well as
                improving my current projects which displayed in the
                <b> Projects</b> section.
              </p>
              <p>
                I am interested in <b>job opportunities</b> where I can
                contribute and develop professionally. Please do not hesitate to
                <b> contact</b> me if you have a good opportunity that matches
                my qualifications or requires me to adapt for the team.
              </p>
            </aside>
          </aside>
          <aside className="w-9/12">
            <p className="text-3xl font-semibold mb-8">Technical Skills</p>
            <div className="flex flex-wrap">{chips}</div>
          </aside>
        </article>
      </section>
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
      <section className="bg-gray-100 pt-40 pb-40" id="contact">
        <article className="font-montserrat">
          <h2 className="text-5xl font-semibold mb-6 text-center">
            Contact Me
          </h2>
          <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
          <h2 className="text-xl mx-auto w-5/12 mb-20 text-center">
            If you want to talk about an opportunity or just want to talk to me,
            please do not hesitate to contact me!
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-Snow w-5/12 mx-auto px-10 py-8 drop-shadow-2xl rounded-lg"
          >
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm"
              placeholder="Enter Your Name"
            />
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm"
              placeholder="Enter Your Email"
            />
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="8"
              className="block bg-gray-200 mb-8 w-full resize-none rounded-md drop-shadow-sm p-4 h-auto"
            />
            <div className="flex justify-end">
              <button className="hover:cursor-pointer bg-Ruby rounded-md">
                <input
                  type="submit"
                  value="Send"
                  className="hover:cursor-pointer text-white font-bold text-xl py-3 px-10"
                />
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f
