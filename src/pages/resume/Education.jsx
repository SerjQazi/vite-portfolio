import { React, useState, useEffect } from 'react';
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all';

const Resume = () => {
  return (
    <div className="text-slate-700">
      <div className="my-6 hidden border border-dashed border-slate-400 landscape:block xl:landscape:my-4 ipad:landscape:my-8 2xl:landscape:my-4 3xl:landscape:my-8"></div>

      <h3 className="mb-2 text-lg font-bold uppercase md:text-xl smallTab:text-2xl lg:portrait:mb-4 lg:portrait:text-3xl lg:landscape:mb-2 xl:landscape:mb-2 xl:landscape:text-xl ipad:landscape:mb-4 ipad:landscape:text-3xl 2xl:landscape:mb-2 2xl:landscape:text-2xl 3xl:landscape:mb-4 3xl:landscape:text-3xl ">
        Education
      </h3>

      <div className="">
        <div className="text-slate-700">
          <p className="mb-1 text-base md:text-lg smallTab:text-xl lg:portrait:mb-2 lg:portrait:text-2xl xl:landscape:text-lg 2xl:landscape:text-xl">
            Juno College Of Technology
          </p>

          <p className="ml-2 flex items-center justify-start text-xs xs:text-sm md:text-base smallTab:text-lg lg:portrait:text-xl xl:landscape:text-sm 2xl:landscape:text-base">
            <FaReact className="mr-1 xl:mr-2 lg:portrait:text-2xl" />
            React Development |
            <SiJavascript className="mx-1 lg:portrait:mx-1.5 lg:portrait:text-2xl" />{' '}
            JavaScript |
            <AiFillHtml5 className="mx-1 lg:portrait:mx-1.5 lg:portrait:text-2xl" />{' '}
            HTML5 & CSS3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
