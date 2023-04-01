import { React, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  GoMailRead,
  FaLinkedin,
  BsTelephone,
  IoMdPaperPlane,
} from 'react-icons/all';
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
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 landscape:min-h-[94.4vh] landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 landscape:mx-36 lg:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl">
          Contact
        </h1>
      </div>
      <div className="mx-2 md:mx-6 landscape:mx-6">
        <div className="font-thin text-slate-700">
          <div className="mb-2 flex items-center justify-start text-base md:text-2xl">
            <h2 className="flex items-center justify-center">
              Feel <span className="ml-1 font-black"> free</span>
            </h2>
            <h2 className="ml-1 font-thin">to contact me!</h2>
          </div>
          <p className="ml-2 pr-1 text-xs leading-5 tracking-wider md:text-base">
            It would be my pleasure to discuss any Frontend Development
            opportunities, I look forward to hearing from you. Thank you for
            your consideration.
          </p>
        </div>
        <div className="my-4 mx-5 flex-wrap items-center justify-evenly text-slate-700 md:my-5 md:flex landscape:flex lg:landscape:mx-20">
          <div className="icon mb-2 ml-10 flex items-center text-4xl md:ml-0 md:text-5xl landscape:ml-0">
            <GoMailRead />

            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg">
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

          <div className="icon mb-2 ml-10 flex items-center text-4xl md:text-5xl landscape:ml-0">
            <BsTelephone />
            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg">
              <a href="tel:+12265015420">+1 226-501-5420</a>
            </div>
          </div>

          <div className="icon mb-2 ml-10 flex items-center text-4xl md:ml-0 md:text-5xl landscape:ml-0">
            <FaLinkedin />
            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110 md:text-lg">
              <Link to="https://www.linkedin.com/in/serjqazi/" target="_blank">
                linkedin.com/serjqazi
              </Link>
            </div>
          </div>
        </div>
        <div className="md:mx-14">
          <ContactBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
