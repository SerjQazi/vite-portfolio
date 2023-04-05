import { React, useState, useEffect } from 'react';
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all';

import Education from './Education';

const Resume = () => {
  return (
    <div className="text-slate-700">
      <h3 className="mb-2 text-lg font-bold uppercase md:text-xl smallTab:text-2xl lg:portrait:mb-4 lg:portrait:text-3xl">
        Experience
      </h3>

      <div className="">
        <div className="mb-4 lg:portrait:mb-7">
          <h4 className="mb-0.5 text-base font-medium md:text-lg smallTab:text-xl lg:portrait:text-2xl">
            INTERMEDIATE FRONTEND DEVELOPER
          </h4>
          <p className="mb-1 text-sm font-light md:text-base smallTab:text-lg lg:portrait:mb-4 lg:portrait:text-xl">
            Bank of Montreal - BMO
          </p>

          <ul className="text-xs md:text-sm smallTab:text-base lg:portrait:text-lg">
            <li className="ml-6 mb-1 list-disc">
              <p>
                Built accessible & responsive web pages on BMO.com &
                BMOHarris.com
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>
                Developed new React components and refactored existing
                components
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>
                Maintained a consistent design language using utility-first CSS
                frameworks, similar to Tailwind
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>
                Prepared deployment artifacts for QA, preview, and production
                environments daily using Python scripts & OpenText's WEM
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>Worked in an agile environment using Kanban methodologies</p>
            </li>
            <li className="ml-0 mt-2 lg:portrait:mt-4">
              <p className="text-sm font-bold md:text-base smallTab:text-lg lg:portrait:text-xl">
                Tech Stack :
              </p>
              <p className="xs:text-x ml-2 flex items-center justify-start text-[0.7rem] leading-5 md:text-sm smallTab:text-base lg:portrait:text-lg">
                &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022;
                Tailwind &#x2022; RESTful API &#x2022; Bitbucket
              </p>
              <p className="ml-2 flex items-center justify-start text-[0.7rem] leading-5 xs:text-xs md:text-sm smallTab:text-base lg:portrait:text-lg">
                &#x2022; Figma &#x2022; Agile Methodologies (Rally & Confluence)
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-4 lg:portrait:mb-6">
          <h4 className="mb-0.5 text-base font-medium md:text-lg smallTab:text-xl lg:portrait:text-2xl">
            FRONTEND DEVELOPER
          </h4>
          <p className="mb-1 text-sm font-light md:text-base smallTab:text-lg lg:portrait:mb-4 lg:portrait:text-xl">
            Novela Neurotechnologies
          </p>

          <ul className="text-xs md:text-sm smallTab:text-base lg:portrait:text-lg">
            <li className="ml-6 mb-1 list-disc">
              <p>
                Built components with React and JavaScript to integrate API data
                in an intuitive UX design
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>
                Refactored existing web application to be fully mobile
                compatible
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>Designed a new application using Figma</p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>
                Developed the new application using React, Material UI and Ant
                Design
              </p>
            </li>
            <li className="ml-6 mb-1 list-disc">
              <p>Created API schemas for new APIs</p>
            </li>
            <li className="ml-0 mt-2 lg:portrait:mt-4">
              <p className="text-sm font-bold md:text-base smallTab:text-lg lg:portrait:text-xl">
                Tech Stack :
              </p>
              <p className="ml-2 flex items-center justify-start text-[0.7rem] leading-5 xs:text-xs md:text-sm smallTab:text-base lg:portrait:text-lg">
                &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022; CSS3
                &#x2022; SASS &#x2022; Material UI &#x2022; Ant Design
              </p>
              <p className="ml-2 flex items-center justify-start text-[0.7rem] leading-5 xs:text-xs md:text-sm smallTab:text-base lg:portrait:text-lg">
                &#x2022; RESTful API &#x2022; Firebase &#x2022; GitHub &#x2022;
                Figma &#x2022; Jira &#x2022; Confluence
              </p>
            </li>
          </ul>
          {/* <Education /> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
