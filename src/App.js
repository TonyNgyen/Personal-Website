import "./App.css";
import Arrow from "./Arrow";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
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
            This is where you will find out more about my technical skills,
            what I do, and how I am outside of work
          </h2>
        </article>
        <article className="grid grid-cols-2 h-3/4 justify-items-center w-5/6 mx-auto">
          <aside className=" w-3/4">
            <p className="text-3xl font-semibold text-center">Learn more about me</p>
          </aside>
          <aside className="w-3/4 text-center">
          <p className="text-3xl font-semibold">Technical Skills</p>
          </aside>
        </article>
      </section>
      <section className="h-screen bg-green-200" id="projects">
      </section>
      <section className="h-screen bg-blue-200" id="contact">

      </section>
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f
