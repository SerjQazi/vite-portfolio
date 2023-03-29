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
    <>
      <div className="mx-20 mt-4 mb-5 flex items-center justify-center border-2 border-dashed border-slate-400 border-opacity-50 sm:my-6 phone:my-4 xl:mx-32 2xl:mx-36">
        <h3 className="py-1 text-lg font-bold uppercase tracking-widest text-yellow-500 sm:py-2 sm:tracking-[0.35em] phone:py-0.5 phone:text-base phone:tracking-widest xl:py-1 xl:text-2xl xl:tracking-[0.35em] 2xl:py-2 2xl:text-2xl">
          Skills
        </h3>
      </div>

      <div className="text-xl text-yellow-500 sm:text-4xl phone:text-sm lg:text-sm xl:text-2xl 2xl:text-4xl">
        <ul className="grid grid-cols-4 tracking-wider phone:grid-cols-6 lg:grid-cols-4">
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <FaReact />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              React
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiJavascript />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              JavaScript
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiJquery />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              jQuery
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiHtml5 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              HTML 5
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiCss3 />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              CSS 3
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <FaSass />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              SASS
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiTailwindcss />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              Tailwind
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiGithub />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              GitHub
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <SiFirebase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              Firebase
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <FaDatabase />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              RESTful API
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 phone:hidden lg:mb-1 lg:flex">
            <VscDebugAll />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              Debugging
            </p>
          </li>
          <li className="mb-3 flex flex-col items-center justify-center phone:mb-2 lg:mb-1">
            <IoMdTabletPortrait />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:mb-2 lg:text-[0.7rem] xl:text-sm">
              Responsive
            </p>
          </li>
          <li className="col-span-4 mb-4 flex flex-col items-center justify-center phone:col-span-1 phone:mb-2 lg:col-span-4 lg:mb-1 xl:mb-2">
            <FaUniversalAccess />
            <p className="mt-2 text-center text-xs font-thin text-slate-100 sm:mt-3 sm:text-sm phone:mt-2 phone:text-[0.5rem] lg:mt-1 lg:text-[0.7rem] xl:text-sm">
              A11Y
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
