import React from 'react';

import Experience from './Experience';
import Education from './Education';

const Resume = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 lg:portrait:py-6 landscape:py-4 ipad:landscape:py-6 2xl:landscape:py-6 3xl:landscape:py-10">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 lg:portrait:mx-48 lg:portrait:mb-6 landscape:mx-36 smallTab:landscape:mx-44 lg:landscape:mb-6 xl:landscape:mx-64 xl:landscape:mb-4 ipad:landscape:mb-8 2xl:landscape:mx-[24rem] 2xl:landscape:mb-6 3xl:landscape:mb-8">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl smallTab:text-4xl xl:py-4 lg:portrait:py-4 lg:portrait:text-5xl phone:landscape:text-xl lg:landscape:text-3xl xl:landscape:py-2 ipad:landscape:py-4 ipad:landscape:text-[3.5rem] 2xl:landscape:py-2 2xl:landscape:text-4xl 3xl:landscape:py-4 3xl:landscape:text-[3.5rem]">
          Resume
        </h1>
      </div>
      <div className="textContainer mx-2 md:mx-6 landscape:mx-6 xl:landscape:mx-6 ipad:landscape:mx-16 2xl:landscape:mx-6 3xl:landscape:mx-16">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
