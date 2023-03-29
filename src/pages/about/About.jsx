import { React, useState, useEffect } from 'react';
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png';
import webIcon from '../../assets/icons/webDesign.png';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const mobile =
    'verticalText uppercase text-center font-black tracking-wide text-slate-700 text-lg py-2 px-1';
  const desktop =
    'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl sm:text-2xl lg:text-6xl xl:text-5xl 2xl:text-6xl py-6 phone:py-2 xl:py-4';

  return (
    <div>
      <div className="flex items-center justify-center bg-slate-100">
        <div className="wrapper w-full px-2">
          <div className="my-4">
            <div className="mb-4">
              <div className="ml-2 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 sm:mx-28 sm:mb-4 xl:mx-48">
                <h1 className="py-6 text-center font-black uppercase tracking-widest text-slate-700">
                  About Me
                </h1>
              </div>

              <div className="font-thin text-slate-700">
                <div className="mb-0 items-center justify-start font-light leading-5 tracking-wide">
                  <h2 className="mb-1">
                    I'm <span className="font-black">Serj Qazi,</span>
                  </h2>
                  <h2 className="text-xs font-thin underline underline-offset-4 sm:ml-3 sm:text-xl sm:no-underline">
                    Frontend Developer / Graphic Designer
                  </h2>
                </div>
                {width < breakpoint ? (
                  <>
                    <h4 className="mt-4 mb-2 text-[0.8rem] font-bold sm:text-base">
                      Experienced in:
                    </h4>
                    <ul className="ml-6 text-xs tracking-wide sm:text-sm phone:text-[0.5rem]">
                      <li className="mb-1 list-disc">
                        <p>
                          <span className="font-bold">Accessible</span> and{' '}
                          <span className="font-bold">responsive </span>page
                          builds.
                        </p>
                      </li>
                      <li className="mb-1 list-disc">
                        <p>
                          <span className="font-bold">RESTful APIs, Git,</span>{' '}
                          and <span className="font-bold">Figma,</span>
                        </p>
                      </li>
                      <li className="mb-1 list-disc">
                        <p>
                          Agile method -{' '}
                          <span className="font-bold">Kanban, Jira,</span> &{' '}
                          <span className="font-bold">Confluence.</span>
                        </p>
                      </li>
                      <li className="mb-1 list-disc">
                        <p>
                          <span className="font-bold">
                            Material-UI, Ant Design, Tailwind,
                          </span>{' '}
                          and <span className="font-bold">Firebase</span>
                        </p>
                      </li>
                    </ul>
                  </>
                ) : (
                  <p className="ml-2 text-xs tracking-wide ">
                    A Frontend Developer with years of experience in building
                    accessible and responsive web pages using{' '}
                    <span className="font-bold">React.</span> I have worked with{' '}
                    <span className="font-bold">RESTful APIs, Git,</span> and{' '}
                    <span className="font-bold">Figma,</span> and have
                    experience in agile methodologies such as{' '}
                    <span className="font-bold">Kanban, Jira,</span> and{' '}
                    <span className="font-bold">Confluence.</span> Additionally,
                    I have experience with{' '}
                    <span className="font-bold">
                      Material-UI, Ant Design, Tailwind,
                    </span>{' '}
                    and <span className="font-bold">Firebase,</span> and have
                    worked on projects in small and large team environments.
                  </p>
                )}
              </div>
            </div>

            <div className="m flex grid-cols-3 flex-col-reverse phone:grid phone:grid-cols-4">
              <div className="col-span-2 bg-slate-700 drop-shadow-lg phone:col-span-3 lg:col-span-2">
                <Skills />
              </div>

              <div className="col-span-1 font-thin text-slate-700 phone:pl-2 lg:col-span-2 lg:pl-8 xl:my-4 xl:pr-4 2xl:my-6">
                <h3 className="mb-2 text-lg font-bold sm:text-base phone:mb-3 lg:text-2xl xl:mb-4">
                  What I Do?
                </h3>

                <div className="mb-3 ml-2 flex phone:mb-6 phone:ml-0 phone:items-center lg:mb-4 xl:mb-6">
                  <div className="image flex w-20 items-center justify-center phone:w-10 lg:w-1/3 xl:w-1/3">
                    <img src={webIcon} alt="" />
                  </div>

                  <div className="ml-6 w-2/3 phone:ml-2 phone:w-fit xl:ml-4">
                    <h3 className="mb-1 text-sm font-bold sm:text-base phone:text-[0.7rem] xl:text-lg">
                      Development
                    </h3>
                    <p className="text-xs sm:text-sm phone:hidden lg:block">
                      Manage / build new content for existing web pages and
                      applications using JavaScript and React.
                    </p>
                  </div>
                </div>

                <div className="mb-4 ml-2 flex phone:ml-0 phone:items-center xl:mb-0">
                  <div className="image flex w-20  items-center justify-center phone:w-10 lg:w-1/3 xl:w-1/3">
                    <img src={figmaIcon} alt="" />
                  </div>

                  <div className="ml-6 w-2/3 phone:ml-2 phone:w-fit xl:ml-4">
                    <h3 className="mb-1 text-sm font-bold sm:text-base phone:text-[0.7rem] xl:text-lg">
                      Figma Design
                    </h3>
                    <p className="text-xs sm:text-sm phone:hidden lg:block">
                      Build protortypes of web pages and applications from
                      scratch using figma and other design tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div>{' '}
    </div>
  );
};

export default About;
