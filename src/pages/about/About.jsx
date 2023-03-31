import { React, useState, useEffect } from 'react';
import AboutMeText from './AboutMeText';
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png';
import webIcon from '../../assets/icons/webDesign.png';

const About = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 landscape:min-h-[94.4vh] landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 landscape:mx-36">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700">
          About Me
        </h1>
      </div>
      <div className="textContainer mx-2 landscape:mx-6">
        <div className="mb-2 items-center justify-start text-sm font-light leading-5 xs:mb-4 xs:flex xs:text-sm sm:text-base landscape:mb-4">
          <h2 className="text-base ">
            I'm <span className="font-bold">Serj Qazi,</span>
          </h2>
          <h2 className="ml-2 font-thin underline underline-offset-4">
            Frontend Developer / Graphic Designer
          </h2>
        </div>
        <AboutMeText />
      </div>

      <div className=" ">
        <div className="mb-4 px-2 xs:mb-5 landscape:mb-4 landscape:px-6 ">
          <h3 className="mb-2 text-lg font-bold">What I Do?</h3>

          <div className="landscape:flex">
            <div className="mb-4 flex pl-2 landscape:mb-0 landscape:pl-0">
              <div className="logo flex w-20 items-center justify-center">
                <img src={webIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold">Development</h3>
                <p className="text-xs">
                  Manage / build new content for existing web pages and
                  applications using JavaScript and React.
                </p>
              </div>
            </div>
            <div className="flex pl-2 landscape:pl-4">
              <div className="logo flex w-20 items-center justify-center">
                <img src={figmaIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold">Figma Design</h3>
                <p className="text-xs">
                  Build protortypes of web pages and applications from scratch
                  using figma and other design tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 bg-slate-700 drop-shadow-lg landscape:mx-6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
