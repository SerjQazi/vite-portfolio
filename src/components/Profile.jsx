import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavigation from '../components/TopNavigation';
import SideNavigation from '../components/SideNavigation';

import About from '../pages/about/About';
import Resume from '../pages/resume/Resume';
import Portfolio from '../pages/portfolio/Portfolio';
import Contact from '../pages/contact/Contact';

const Profile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 844;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    const handleHeightResize = () => setHeight(window.innerHeight);

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
    // adjustment for landscape height
    <div className=" landscape:flex landscape:h-[94.5vh] lg:landscape:h-[75vh] xl:landscape:h-[90vh] ipad:landscape:h-[75vh] 2xl:landscape:h-[90vh] 3xl:landscape:h-[48rem]">
      <div className="navContainer h-fit landscape:h-full landscape:w-[18vw] phone:landscape:w-[19vw] 3xl:landscape:w-[22.5rem]">
        <div className="landscape:hidden ">
          <TopNavigation />
        </div>
        <div className="hidden h-full flex-col justify-center text-slate-700 landscape:flex">
          <SideNavigation />
        </div>
      </div>

      <div className="pageContainer h-auto w-full landscape:h-auto landscape:w-[82%] landscape:overflow-auto">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
