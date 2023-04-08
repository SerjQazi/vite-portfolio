import React from 'react';

const AboutMeText = () => {
  return (
    <div className="mb-4 font-thin text-slate-700 xs:mb-5 lg:portrait:mb-7 landscape:mb-4 ipad:landscape:mb-8 2xl:landscape:mb-6 3xl:landscape:mb-8">
      <div className="landscape:hidden">
        <h4 className="mb-1 text-[0.8rem] font-bold xs:mb-2 xs:text-sm md:text-base smallTab:text-lg lg:portrait:text-xl">
          Experienced in:
        </h4>
        <ul className="ml-6 text-xs tracking-wider md:text-sm smallTab:text-base lg:portrait:text-lg">
          <li className="mb-0.5 list-disc xs:mb-1">
            <p>
              <span className="font-bold">Accessible</span> and{' '}
              <span className="font-bold">responsive </span>page builds.
            </p>
          </li>
          <li className="mb-0.5 list-disc xs:mb-1">
            <p>
              <span className="font-bold">RESTful APIs, Git,</span> and{' '}
              <span className="font-bold">Figma,</span>
            </p>
          </li>
          <li className="mb-0.5 list-disc xs:mb-1">
            <p>
              Agile method - <span className="font-bold">Kanban, Jira,</span> &{' '}
              <span className="font-bold">Confluence.</span>
            </p>
          </li>
          <li className="mb-0.5 list-disc xs:mb-1">
            <p>
              <span className="font-bold">
                Material-UI, Ant Design, Tailwind,
              </span>{' '}
              and <span className="font-bold">Firebase</span>
            </p>
          </li>
        </ul>
      </div>

      <p className="hidden text-xs leading-5 tracking-wide md:text-sm md:leading-6 landscape:block lg:landscape:text-base xl:landscape:text-sm ipad:landscape:text-lg ipad:landscape:leading-8 ipad:landscape:tracking-widest 2xl:landscape:text-base 2xl:landscape:tracking-wide 3xl:landscape:text-lg 3xl:landscape:leading-8 3xl:landscape:tracking-widest ">
        A Frontend Developer with years of experience in building accessible and
        responsive web pages using <span className="font-bold">React.</span> I
        have worked with <span className="font-bold">RESTful APIs, Git,</span>{' '}
        and <span className="font-bold">Figma,</span> and have experience in
        agile methodologies such as{' '}
        <span className="font-bold">Kanban, Jira,</span> and{' '}
        <span className="font-bold">Confluence.</span> Additionally, I have
        experience with{' '}
        <span className="font-bold">Material-UI, Ant Design, Tailwind,</span>{' '}
        and <span className="font-bold">Firebase,</span> and have worked on
        projects in small and large team environments.
      </p>
    </div>
  );
};

export default AboutMeText;
