import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GoChevronRight } from 'react-icons/all';
import selfPortrait from '../assets/self-portrait.png';

import Social from './Social';

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 640;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    const handleHeightResize = () => setHeight(window.innerHeight);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    window.addEventListener('resize', handleHeightResize);
    console.log('Width: ', width + 'px');
    console.log('Height: ', height + 'px');
    // console.log ("Height: ", height)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center landscape:flex-nowrap ">
      <div className="leftContainer flex w-full">
        <div className="textContainer pt-2 pl-2 xs:pt-6 xs:pl-6 md:portrait:pl-10 md:portrait:pt-10 landscape:pl-4 landscape:pt-2 phone:landscape:pt-0 phone:landscape:pl-8 lg:landscape:pl-8 ipad:landscape:pl-10">
          <div className="header font-sans font-black uppercase text-slate-700">
            <h3 className="text-lg leading-4 md:portrait:text-2xl phone:landscape:text-xl phone:landscape:leading-5 lg:landscape:text-3xl xl:landscape:mb-2 xl:landscape:text-4xl">
              Hi There!
            </h3>
            <div className=" mb-2 flex md:portrait:mb-4 lg:landscape:mb-4 ">
              <h2 className="text-2xl md:portrait:text-4xl phone:landscape:text-3xl lg:landscape:text-4xl xl:landscape:text-[3.25rem] ipad:landscape:text-5xl">
                I'M
              </h2>
              <h1 className="ml-2 font-cursive text-2xl text-yellow-500 md:portrait:text-4xl phone:landscape:text-3xl lg:landscape:text-4xl xl:landscape:ml-4 xl:landscape:text-[3.25rem] ipad:landscape:text-5xl">
                Serj Qazi
              </h1>
            </div>

            <h3 className="mb-2 w-fit bg-yellow-500 px-2.5 py-0.5 text-sm xs:mb-4 md:portrait:py-1 md:portrait:px-4 md:portrait:text-base xl:landscape:py-1.5 xl:landscape:px-3 xl:landscape:text-base ipad:landscape:px-3 ipad:landscape:py-1 ipad:landscape:text-lg">
              Frontend Developer
            </h3>
          </div>
          <div className="mb-4 text-xs font-thin leading-5 text-slate-700 xs:mb-6 xs:leading-[1.32rem] md:portrait:mb-8 md:portrait:text-base md:portrait:leading-6 lg:portrait:text-lg landscape:mb-2 landscape:leading-[1.05rem] phone:landscape:mb-6 lg:landscape:text-base xl:landscape:mb-14 xl:landscape:leading-7 ipad:landscape:mb-10 ipad:landscape:text-lg">
            <p>
              A Frontend Developer with a passion for photography and graphic
              design based out of Guelph, Ontario. Fueled mostly by coffee, I
              challenge myself everyday to master the tools and concepts of
              Frontend Development. I am passionate about creating impactful web
              applications using <span className="font-bold">React</span>,{' '}
              <span className="font-bold">JavaScript</span>,{' '}
              <span className="font-bold">HTML</span>,{' '}
              <span className="font-bold">SASS</span> and{' '}
              <span className="font-bold">Tailwind</span>. I find myself focused
              on minimalist clean designs that provide a playful and engaging
              user experience.
            </p>
          </div>

          <div className="w-fit cursor-pointer font-sans text-sm font-bold uppercase text-slate-700 duration-500 portrait:mb-4 md:portrait:mb-10 md:portrait:text-base ipad:landscape:text-lg">
            <Link
              to={'/about'}
              className="flex items-center justify-center rounded-xl bg-yellow-500 px-4 py-2 md:py-3"
            >
              More About Me
              <GoChevronRight className="ml-2 text-3xl" />
            </Link>
          </div>
        </div>

        <div className="socialContainer flex items-center justify-center">
          <Social />
        </div>
      </div>

      <div className="portraitContainer w-full landscape:w-[87.5%] phone:landscape:w-[87%]">
        <img
          className="w-full object-cover md:portrait:h-[50vh] lg:portrait:h-[58.4vh] phone:landscape:h-[94.5vh] lg:landscape:h-auto xl:landscape:h-[90vh] 3xl:landscape:h-[45.5rem]"
          src={selfPortrait}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
