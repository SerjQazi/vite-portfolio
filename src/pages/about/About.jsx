import { React } from 'react';
import AboutMeText from './AboutMeText';
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png';
import webIcon from '../../assets/icons/webDesign.png';

const About = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 lg:portrait:py-6 landscape:py-4 2xl:landscape:py-6">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 lg:portrait:mx-48 lg:portrait:mb-6 landscape:mx-36 smallTab:landscape:mx-44 lg:landscape:mb-6 xl:landscape:mx-64 xl:landscape:mb-4 2xl:landscape:mx-[24rem] 2xl:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl smallTab:text-4xl xl:py-4 lg:portrait:py-4 lg:portrait:text-5xl phone:landscape:text-xl lg:landscape:text-3xl xl:landscape:py-2 2xl:landscape:text-4xl">
          About Me
        </h1>
      </div>
      <div className="textContainer mx-2 md:mx-6 landscape:mx-6">
        <div className="mb-2 items-center justify-start text-sm font-light leading-5 xs:mb-4 xs:flex xs:text-sm sm:text-base md:text-xl smallTab:text-2xl xl:text-xl lg:portrait:mb-6 lg:portrait:text-[1.7rem] landscape:mb-4 2xl:landscape:mb-6 2xl:landscape:text-2xl">
          <h2 className=" ">
            I'm <span className="font-bold">Serj Qazi,</span>
          </h2>
          <h2 className="ml-2 font-thin underline underline-offset-4 lg:portrait:ml-4">
            Frontend Developer / Graphic Designer
          </h2>
        </div>
        <AboutMeText />
      </div>

      <div className="flex-row-reverse xl:flex ">
        <div className="mb-4 px-2 xs:mb-5 md:px-6 xl:w-1/2 lg:portrait:mb-7 landscape:mb-4 landscape:px-6 xl:landscape:mb-0 xl:landscape:py-4 2xl:landscape:pl-16">
          <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-xl smallTab:text-2xl lg:portrait:text-[1.65rem] xl:landscape:text-xl 2xl:landscape:mb-8 2xl:landscape:text-2xl">
            What I Do?
          </h3>

          <div className="xl:flex-col landscape:flex">
            <div className="mb-4 flex items-center pl-2 landscape:mb-0 landscape:pl-0 xl:landscape:mb-5 2xl:landscape:mb-10">
              <div className="logo flex w-20 items-center justify-center md:w-[5.5rem] smallTab:w-[6.5rem] lg:portrait:w-[8.5rem] phone:landscape:w-20 lg:landscape:w-[7.5rem] xl:landscape:w-[6rem] ">
                <img src={webIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold md:text-base smallTab:text-lg lg:portrait:text-[1.4rem] phone:landscape:text-sm lg:landscape:text-base 2xl:landscape:text-lg">
                  Development
                </h3>
                <p className="text-xs md:text-sm smallTab:text-base lg:portrait:text-lg phone:landscape:text-xs lg:landscape:text-sm 2xl:landscape:text-base">
                  Manage / build new content for existing web pages and
                  applications using JavaScript and React.
                </p>
              </div>
            </div>
            <div className="flex items-center pl-2 landscape:pl-4 xl:landscape:pl-0">
              <div className="logo flex w-20 items-center justify-center md:w-[5.5rem] smallTab:w-[6.5rem] lg:portrait:w-[8.5rem] phone:landscape:w-20 lg:landscape:w-[7.5rem] xl:landscape:w-[6rem] ">
                <img src={figmaIcon} alt="" />
              </div>
              <div className="ml-6 w-2/3 landscape:ml-4">
                <h3 className="mb-1 text-sm font-bold md:text-base smallTab:text-lg lg:portrait:text-[1.4rem] phone:landscape:text-sm lg:landscape:text-base 2xl:landscape:text-lg">
                  Figma Design
                </h3>
                <p className="text-xs md:text-sm smallTab:text-base lg:portrait:text-lg phone:landscape:text-xs lg:landscape:text-sm 2xl:landscape:text-base">
                  Build prototypes of web pages and applications from scratch
                  using figma and other design tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 bg-slate-700 drop-shadow-lg md:mx-6 xl:w-1/2 landscape:mx-6 xl:landscape:ml-6 xl:landscape:mr-0">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
