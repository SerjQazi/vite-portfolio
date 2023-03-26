import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/TopNavigation';
import SideNavigation from './components/SideNavigation';

import Home from './home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 1025;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    const handleHeightResize = () => setWidth(window.innerHeight);

    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    window.addEventListener('resize', handleHeightResize);

    console.log('Width: ', width + 'px');
    console.log('Height: ', height + 'px');

    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <Router>
      <div className="background flex min-h-screen items-center justify-center bg-gradient-to-tr from-slate-300 to-sky-50">
        <div className="card h-[95vh] w-[95%] max-w-screen-3xl bg-slate-100 shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)] iPad:max-h-[34.68rem] xl:flex 3xl:max-h-[50rem]">
          <div className="navContainer w-full xl:w-[23%]">
            {width < breakpoint ? <TopNavigation /> : <SideNavigation />}
          </div>

          <div className="pageContainer w-full border-2 border-blue-500">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
