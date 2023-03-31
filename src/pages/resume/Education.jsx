import { React, useState, useEffect } from 'react';
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all';

const Resume = () => {
  return (
    <div className="text-slate-700">
      <div className="my-6 hidden border border-dashed border-slate-400 landscape:block"></div>

      <h3 className="mb-2 mt-4 text-lg font-bold uppercase md:text-xl">
        Education
      </h3>

      <div className="">
        <div className="text-slate-700">
          <p className="mb-1 text-base md:text-lg">
            Juno College Of Technology
          </p>

          <p className="ml-2 flex items-center justify-start text-xs xs:text-sm md:text-base">
            <FaReact className="mr-1 xl:mr-2" />
            React Development |
            <SiJavascript className="mx-1" /> JavaScript |
            <AiFillHtml5 className="mx-1" /> HTML5 & CSS3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
