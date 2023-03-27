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
    const handleHeightResize = () => setWidth(window.innerHeight);
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
    <div className="flex flex-wrap items-center justify-center ipadHorizontal:flex-nowrap ipadXL:flex-nowrap portrait:flex-wrap">
      <div className="leftContainer flex w-full ipadXL:w-3/4">
        <div className="textContainer">
          <div className="header mt-0 mb-2 font-sans font-black uppercase text-slate-700 lg:mb-4 2xl:mt-20 phone:mt-0">
            <h3 className="mb-0 text-2xl tracking-wide sm:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl phone:text-lg">
              Hi There!
            </h3>
            <div className="mb-2 flex md:mb-4 xl:mb-0">
              <h2 className="text-3xl tracking-wide sm:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl phone:text-xl">
                I'M
              </h2>
              <h1 className="ml-4 font-cursive text-3xl tracking-wide text-yellow-500 sm:text-4xl lg:text-3xl xl:ml-6 xl:text-5xl 2xl:text-6xl phone:ml-2 phone:text-xl">
                Serj Qazi
              </h1>
            </div>

            <h3 className="w-fit bg-yellow-500 px-2.5 py-0.5 ">
              Frontend Developer
            </h3>
          </div>
          <div className="">
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

          <div className="w-fit cursor-pointer font-sans text-sm font-bold uppercase text-slate-700 duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 sm:text-base lg:text-sm xl:text-base 2xl:text-lg phone:text-xs">
            <Link
              to={'/about'}
              className="flex items-center justify-center rounded-xl bg-yellow-500 px-4 py-2 lg:px-6 lg:py-2 2xl:px-6 2xl:py-4"
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

      <div className="portraitContainer w-full ipadXL:w-8/12">
        <img src={selfPortrait} alt="" />
      </div>
    </div>
  );
};

export default Home;
