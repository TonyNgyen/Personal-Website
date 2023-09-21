import './App.css';
import Arrow from './Arrow';
import Hero from './Hero';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App snap-y snap-mandatory">
      <Navbar />
      <div className=''>
        <Hero />
        <Arrow />
      </div>
      <div className='snap-start h-screen about bg-slate-300' id='about'>

      </div>
    </div>
  );
}

export default App;

// https://huemint.com/website-1/#palette=fbf9f6-042e38-d02622
// https://realtimecolors.com/?colors=2C363F-fbf9f6-A41623-dfdad2-86775f