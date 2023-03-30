import React from 'react';

const AboutMeText = () => {
  return (
    <div className="mb-4 font-thin text-slate-700 xs:mb-5  landscape:mb-2">
      <div className="landscape:hidden">
        <h4 className="mb-1 text-[0.8rem] font-bold xs:mb-2 xs:text-sm">
          Experienced in:
        </h4>
        <ul className="ml-6 text-xs tracking-wide">
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

      <p className="hidden text-xs leading-4 tracking-wide landscape:block ">
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
