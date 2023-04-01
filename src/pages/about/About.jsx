import { React } from 'react';
import AboutMeText from './AboutMeText';
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png';
import webIcon from '../../assets/icons/webDesign.png';

const About = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 landscape:min-h-[94.4vh] landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 landscape:mx-36 lg:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl phone:landscape:text-xl lg:landscape:text-3xl">
          About Me
        </h1>
      </div>
      <div className="textContainer mx-2 md:mx-6 landscape:mx-6">
        <div className="mb-2 items-center justify-start text-sm font-light leading-5 xs:mb-4 xs:flex xs:text-sm sm:text-base md:text-xl landscape:mb-4">
          <h2 className=" ">
            I'm <span className="font-bold">Serj Qazi,</span>
          </h2>
          <h2 className="ml-2 font-thin underline underline-offset-4">
            Frontend Developer / Graphic Designer
          </h2>
        </div>
        <AboutMeText />
      </div>

      <div className=" ">
        <div className="mb-4 px-2 xs:mb-5 md:px-6 landscape:mb-4 landscape:px-6">
          <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-xl">
            What I Do?
          </h3>

          <div className="landscape:flex">
            <div className="mb-4 flex items-center pl-2 landscape:mb-0 landscape:pl-0">
              <div className="logo flex w-20 items-center justify-center md:w-[5.5rem] phone:landscape:w-20 lg:landscape:w-[30%]">
                <img src={webIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold md:text-base phone:landscape:text-sm lg:landscape:text-base">
                  Development
                </h3>
                <p className="text-xs md:text-sm phone:landscape:text-xs lg:landscape:text-sm">
                  Manage / build new content for existing web pages and
                  applications using JavaScript and React.
                </p>
              </div>
            </div>
            <div className="flex items-center pl-2 landscape:pl-4">
              <div className="logo flex w-20 items-center justify-center md:w-[5.5rem] phone:landscape:w-20 lg:landscape:w-[30%]">
                <img src={figmaIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold md:text-base phone:landscape:text-sm lg:landscape:text-base">
                  Figma Design
                </h3>
                <p className="text-xs md:text-sm phone:landscape:text-xs lg:landscape:text-sm">
                  Build prototypes of web pages and applications from scratch
                  using figma and other design tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 bg-slate-700 drop-shadow-lg md:mx-6 landscape:mx-6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
