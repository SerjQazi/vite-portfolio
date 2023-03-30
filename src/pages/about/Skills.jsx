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
    <div className="py-2 xs:py-4 landscape:py-2">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-400 border-opacity-50 landscape:mb-2 phone:landscape:mb-4 ">
        <h3 className="py-1 text-lg font-bold uppercase tracking-widest text-yellow-500 landscape:text-sm">
          Skills
        </h3>
      </div>

      <div className="text-xl text-yellow-500">
        <ul className="grid grid-cols-4 tracking-wider landscape:grid-cols-6">
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <FaReact />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              React
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiJavascript />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              JavaScript
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiJquery />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              jQuery
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiHtml5 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              HTML 5
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiCss3 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              CSS 3
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <FaSass />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              SASS
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiTailwindcss />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              Tailwind
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center landscape:mb-1 landscape:text-xs">
            <SiGithub />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              GitHub
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xs">
            <SiFirebase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              Firebase
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xs">
            <FaDatabase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              RESTful API
            </p>
          </li>

          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xs">
            <IoMdTabletPortrait />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              Responsive
            </p>
          </li>
          <li className="mb-0 flex flex-col items-center justify-center landscape:text-xs">
            <FaUniversalAccess />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 landscape:mt-1 landscape:text-[0.5rem]">
              A11Y
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
