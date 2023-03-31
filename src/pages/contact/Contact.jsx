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
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 landscape:mx-36">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700">
          Contact
        </h1>
      </div>
      <div className="mx-2 landscape:mx-6">
        <div className="font-thin text-slate-700">
          <div className="mt-4 mb-2 flex items-center justify-start ">
            <h2 className="mb-1 text-lg">
              Feel <span className="font-black">free</span>
            </h2>
            <h2 className="ml-1 font-thin">to contact me!</h2>
          </div>
          <p className="ml-2 pr-1 text-xs leading-5 tracking-wider">
            It would be my pleasure to discuss any Frontend Development
            opportunities, I look forward to hearing from you. Thank you for
            your consideration.
          </p>
        </div>
        <div className="my-4 flex-wrap items-center justify-center text-slate-700 landscape:flex">
          <div className="icon mb-2 ml-10 flex items-center text-4xl landscape:ml-0">
            <GoMailRead />

            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110">
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

          <div className="icon mb-2 ml-10 flex items-center text-4xl">
            <BsTelephone />
            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110">
              <a href="tel:+12265015420">+1 226-501-5420</a>
            </div>
          </div>

          <div className="icon mb-2 ml-10 flex items-center text-4xl landscape:ml-0">
            <FaLinkedin />
            <div className="ml-4 cursor-pointer py-2 text-base duration-300 ease-in-out hover:scale-110">
              <Link to="https://www.linkedin.com/in/serjqazi/" target="_blank">
                linkedin.com/serjqazi
              </Link>
            </div>
          </div>
        </div>
        <ContactBox />
      </div>
    </div>
  );
};

export default Contact;
