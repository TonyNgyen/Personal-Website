import "./App.css";
import Arrow from "./Arrow";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Chip from "./Chip";

function App() {
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
      <section className="h-screen bg-gray-100 pt-40" id="contact">
        <article className="text-center font-montserrat">
          <h2 className="text-5xl font-semibold mb-6">Contact Me</h2>
          <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
          <h2 className="text-xl mx-auto w-4/12 mb-20">
            If you want to talk about an opportunity or just want to talk to me,
            please do not hesitate to contact me!
          </h2>
        </article>
      </section>
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f
