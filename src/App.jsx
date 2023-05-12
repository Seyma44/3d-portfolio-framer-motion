import { BrowserRouter } from "react-router-dom";
import { 
          About, 
          Contact, 
          Experience, 
          Hero, 
          Navbar, 
          SquareEmoji, 
          Works, 
          FlyingPointsCanvas 
  } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <SquareEmoji/>
        <Works />
        <div className='relative z-0'>
          <Contact />
          <FlyingPointsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
