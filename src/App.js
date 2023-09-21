import './App.css';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

function App() {
  const [text, count] = useTypewriter({
    words: ["Tony", "a software engineer"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="App h-screen">
      <nav className='flex justify-between py-8 px-20 sticky top-0 bg-white'>
        <h1 className=' text-4xl font-montserrat font-semibold'>Tony Nguyen</h1>
        <ul className='flex justify-around w-1/3 text-xl font-montserrat pt-1'>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
      </nav>
      <header className='bg-Snow h-5/6 flex justify-center items-center font-montserrat w-full'>
        <article className='w-full'>
          <h1 className='text-7xl font-semibold text-center mb-14'>
            <span className='w-full'>
              Hey, I'm {text}
            </span>
            <Cursor cursorColor='#A41623'></Cursor>
          </h1>
          <h2 className='text-center mx-auto w-4/12 text-xl leading-8'>
            A software engineer expanding his skills and building fullstack 
            applications and websites that are useful to others.
          </h2>
        </article>
      </header>
      <div className='h-16 bg-red-200'>

      </div>
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f