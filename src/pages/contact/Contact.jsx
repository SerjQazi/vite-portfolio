import { React } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoMailRead, FaLinkedin, BsTelephone } from 'react-icons/all';
import ContactBox from './ContactBox';

const Contact = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
        {props.children}
      </a>
    );
  }

  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 lg:portrait:py-6 landscape:py-4 2xl:landscape:py-6">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 lg:portrait:mx-48 lg:portrait:mb-6 landscape:mx-36 smallTab:landscape:mx-44 lg:landscape:mb-6 xl:landscape:mx-64 xl:landscape:mb-4 2xl:landscape:mx-[24rem] 2xl:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl smallTab:text-4xl xl:py-4 lg:portrait:py-4 lg:portrait:text-5xl phone:landscape:text-xl lg:landscape:text-3xl xl:landscape:py-2 2xl:landscape:text-4xl">
          Contact
        </h1>
      </div>
      <div className="mx-2 md:mx-6 landscape:mx-6">
        <div className="font-thin text-slate-700 xl:landscape:mb-4">
          <div className=" mb-2 flex items-center justify-start text-base md:text-2xl smallTab:mb-4 smallTab:text-3xl lg:portrait:text-4xl xl:landscape:text-xl 2xl:landscape:text-2xl">
            <h2 className="flex items-center justify-center">
              Feel <span className="ml-1 font-black"> free</span>
            </h2>
            <h2 className="ml-1 font-thin">to contact me!</h2>
          </div>
          <p className="ml-2 pr-1 text-xs leading-5 tracking-wider md:text-base smallTab:text-lg lg:portrait:text-xl xl:landscape:text-base 2xl:landscape:text-lg">
            It would be my pleasure to discuss any Frontend Development
            opportunities, I look forward to hearing from you. Thank you for
            your consideration.
          </p>
        </div>
        <div className="flex-row-reverse xl:landscape:flex">
          <div className="my-4 mx-5 flex-wrap items-center justify-evenly text-slate-700 md:my-5 md:flex smallTab:my-6 lg:portrait:my-10 landscape:flex lg:landscape:mx-20 xl:landscape:mx-0 xl:landscape:my-0 xl:landscape:ml-6 xl:landscape:w-1/2 xl:landscape:flex-col xl:landscape:flex-nowrap xl:landscape:items-start xl:landscape:justify-start xl:landscape:px-20 xl:landscape:py-0 xl:landscape:pt-8 2xl:landscape:pt-14">
            <div className="icon mb-2 ml-10 flex items-center text-4xl md:ml-0 md:text-5xl smallTab:text-6xl lg:portrait:mb-4 lg:portrait:text-7xl landscape:ml-0 xl:landscape:mb-6 xl:landscape:text-5xl">
              <GoMailRead />

              <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg smallTab:text-xl lg:portrait:text-2xl xl:landscape:text-lg">
                <Mailto
                  email="sirajum.qazi@gmail.com"
                  subject="Development Opportunity"
                  body="Hi Serj,"
                  target="_blank"
                >
                  sirajum.qazi@gmail.com
                </Mailto>
              </div>
            </div>

            <div className="icon mb-2 ml-10 flex items-center text-4xl md:text-5xl smallTab:text-6xl lg:portrait:mb-4 lg:portrait:text-7xl landscape:ml-0 xl:landscape:mb-6 xl:landscape:text-5xl">
              <BsTelephone />
              <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg smallTab:text-xl lg:portrait:text-2xl xl:landscape:text-lg">
                <a href="tel:+12265015420">+1 226-501-5420</a>
              </div>
            </div>

            <div className="icon mb-2 ml-10 flex items-center text-4xl md:ml-0 md:text-5xl smallTab:text-6xl lg:portrait:text-7xl landscape:ml-0 xl:landscape:text-5xl">
              <FaLinkedin />
              <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg smallTab:text-xl lg:portrait:text-2xl xl:landscape:text-lg">
                <Link
                  to="https://www.linkedin.com/in/serjqazi/"
                  target="_blank"
                >
                  linkedin.com/serjqazi
                </Link>
              </div>
            </div>
          </div>
          <div className="md:mx-14 xl:landscape:mx-0 xl:landscape:ml-2 xl:landscape:w-1/2 2xl:landscape:w-9/12">
            <ContactBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
