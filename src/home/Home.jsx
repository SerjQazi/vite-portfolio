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
    <div className="flex flex-wrap items-center justify-center phoneHorizontal:flex-nowrap ipadHorizontal:flex-nowrap portraitX:flex-wrap portraitIpad:flex-wrap ipadXL:flex-nowrap">
      <div className="leftContainer flex w-full">
        <div className="textContainer pt-4 pl-4 phoneHorizontal:pt-0 phoneHorizontalX:pl-6 ipadHorizontal:pl-20 portraitX:pt-4 portraitX:pl-10">
          <div className="header font-sans font-black uppercase text-slate-700">
            <h3 className=" text-lg leading-4 phoneHorizontalX:leading-5 portraitX:leading-4">
              Hi There!
            </h3>
            <div className="mb-2 flex phoneHorizontal:mb-1 portraitX:mb-2">
              <h2 className="text-2xl">I'M</h2>
              <h1 className="ml-2 font-cursive text-2xl text-yellow-500">
                Serj Qazi
              </h1>
            </div>

            <h3 className="mb-2 w-fit bg-yellow-500 px-2.5 py-0.5 text-sm phoneHorizontal:text-[0.7rem] phoneHorizontalX:mb-3 phoneHorizontalX:text-[0.75rem] portraitX:mb-2 portraitX:text-sm ">
              Frontend Developer
            </h3>
          </div>
          <div className="mb-4 text-xs leading-5 text-slate-700 phoneHorizontal:text-[0.75rem] phoneHorizontal:leading-[1.05rem] phoneHorizontalX:leading-[1.15rem] portraitX:text-xs portraitX:leading-5">
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

          <div className="mb-4 w-fit cursor-pointer font-sans text-sm font-bold uppercase  text-slate-700 duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 phoneHorizontal:mb-0 portraitX:mb-4  ">
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

      <div className="portraitContainer w-full phoneHorizontal:w-[79.7%] phoneHorizontalX:w-[78.7%] portraitX:w-full">
        <img src={selfPortrait} alt="" />
      </div>
    </div>
  );
};

export default Home;
