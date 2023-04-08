import React from 'react';
import {
  FaReact,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiHtml5,
  SiCss3,
  FaSass,
  SiGithub,
  SiFirebase,
  FaDatabase,
  VscDebugAll,
  IoMdTabletPortrait,
  FaUniversalAccess,
} from 'react-icons/all';

const Skills = () => {
  return (
    <div className="py-2 xs:py-4 landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-400 border-opacity-50 md:mx-32 md:mb-6 smallTab:mx-36 lg:portrait:mx-52 landscape:mb-2 phone:landscape:mb-4 lg:landscape:mx-44 lg:landscape:mb-6 xl:landscape:mx-28 2xl:landscape:mx-40 2xl:landscape:mb-8">
        <h3 className="py-1 text-lg font-bold uppercase tracking-[0.35em] text-yellow-500 md:text-xl smallTab:text-xl lg:portrait:py-4 lg:portrait:text-3xl lg:landscape:py-2 2xl:landscape:text-2xl">
          Skills
        </h3>
      </div>

      <div className="text-xl text-yellow-500 md:text-2xl smallTab:text-3xl lg:portrait:text-4xl">
        <ul className="grid grid-cols-4 tracking-wider landscape:grid-cols-6 xl:landscape:grid-cols-4">
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <FaReact />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              React
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiJavascript />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              JavaScript
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiJquery />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              jQuery
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiHtml5 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              HTML 5
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiCss3 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              CSS 3
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <FaSass />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              SASS
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:mb-0 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiTailwindcss />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              Tailwind
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center lg:portrait:mb-4 landscape:mb-0 landscape:text-xl 2xl:landscape:mb-6 2xl:landscape:text-3xl">
            <SiGithub />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              GitHub
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xl 2xl:landscape:text-3xl">
            <SiFirebase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              Firebase
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xl 2xl:landscape:text-3xl">
            <FaDatabase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              RESTful API
            </p>
          </li>

          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xl 2xl:landscape:text-3xl">
            <IoMdTabletPortrait />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              Responsive
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xl 2xl:landscape:text-3xl">
            <FaUniversalAccess />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 md:text-sm smallTab:text-base lg:portrait:text-lg landscape:mt-3 2xl:landscape:mt-2 2xl:landscape:text-base">
              A11Y
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
