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
      <div className="font-thin text-slate-700">
        <div className="mt-4 mb-2 flex items-center justify-start text-2xl font-light leading-5 tracking-wide">
          <h2 className="mb-1">
            Feel <span className="font-black">free</span>
          </h2>
          <h2 className="ml-1 font-thin">to contact me!</h2>
        </div>
        <p className="ml-2 pr-1 text-base tracking-wide">
          It would be my pleasure to discuss any Frontend Development
          opportunities, I look forward to hearing from you. Thank you for your
          consideration.
        </p>
      </div>
      <div className="my-4 text-slate-700">
        <div className="icon mb-1 ml-10 flex items-center text-5xl">
          <GoMailRead />

          <div className="ml-4 cursor-pointer py-4 text-base duration-300 ease-in-out hover:scale-110">
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

        <div className="icon mb-1 ml-10 flex items-center text-5xl">
          <BsTelephone />
          <div className="ml-4 cursor-pointer py-4 text-base duration-300 ease-in-out hover:scale-110">
            <a href="tel:+12265015420">+1 226-501-5420</a>
          </div>
        </div>

        <div className="icon mb-1 ml-10 flex items-center text-5xl">
          <FaLinkedin />
          <div className="ml-4 cursor-pointer py-4 text-base duration-300 ease-in-out hover:scale-110">
            <Link to="https://www.linkedin.com/in/serjqazi/" target="_blank">
              linkedin.com/serjqazi
            </Link>
          </div>
        </div>
      </div>
      <ContactBox />
    </div>
  );
};

export default Contact;
