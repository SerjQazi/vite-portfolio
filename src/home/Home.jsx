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
        <div className="textContainer pt-2 pl-2 landscape:pl-4 landscape:pt-2">
          <div className="header font-sans font-black uppercase text-slate-700">
            <h3 className=" text-lg leading-4">Hi There!</h3>
            <div className=" mb-2 flex ">
              <h2 className="text-2xl">I'M</h2>
              <h1 className="ml-2 font-cursive text-2xl text-yellow-500">
                Serj Qazi
              </h1>
            </div>

            <h3 className="mb-2 w-fit bg-yellow-500 px-2.5 py-0.5 text-sm ">
              Frontend Developer
            </h3>
          </div>
          <div className="mb-4 text-xs text-slate-700 portrait:leading-5 landscape:mb-2 landscape:leading-[1.05rem]">
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

          <div className="w-fit cursor-pointer font-sans text-sm font-bold uppercase text-slate-700 duration-500 portrait:mb-4">
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

      <div className="portraitContainer w-full xs:landscape:w-[87.5%]">
        <img src={selfPortrait} alt="" />
      </div>
    </div>
  );
};

export default Home;
