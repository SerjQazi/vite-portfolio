import React from 'react';

import Experience from './Experience';
import Education from './Education';

const Resume = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 landscape:min-h-[94.4vh] landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 landscape:mx-36 lg:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl smallTab:text-4xl">
          Resume
        </h1>
      </div>
      <div className="textContainer mx-2 md:mx-6 landscape:mx-6">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
