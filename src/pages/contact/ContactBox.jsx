import { React, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  GoMailRead,
  FaLinkedin,
  FiPhone,
  IoMdPaperPlane,
} from 'react-icons/all';

const ContactBox = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  const xlBreakpoint = 1280;
  const iPadPro = 1366;
  const xxlBreakpoint = 1536;
  const xxxlBreakpoint = 1550;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-slate-700">
      <form className="flex w-full flex-col items-center justify-center">
        <label htmlFor="name" className="sr-only">
          enter your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="mb-0 w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />

        <label htmlFor="email" className="sr-only">
          enter your email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          className="mt-2 mb-0 w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm invalid:border-2 invalid:border-red-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />

        {width < breakpoint ? (
          <>
            <label htmlFor="message" className="sr-only">
              enter your message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="message"
              cols="30"
              rows="8"
              className="mt-2 w-full resize-none rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </>
        ) : width == xlBreakpoint ||
          width == xxlBreakpoint ||
          width == iPadPro ||
          width >= xxxlBreakpoint ? (
          <>
            <label htmlFor="message" className="sr-only">
              enter your message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="message"
              cols="30"
              rows="6"
              className="mt-2 w-full resize-none rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </>
        ) : (
          <>
            <label htmlFor="message" className="sr-only">
              enter your message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="message"
              cols="30"
              rows="4"
              className="mt-2 w-full resize-none rounded-md border border-slate-500 bg-slate-100 px-3 py-1 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </>
        )}

        <button
          className="mt-4 flex items-center justify-center rounded-md bg-yellow-500 px-5 py-1 text-base font-bold uppercase tracking-widest"
          type="submit"
        >
          Send
          <IoMdPaperPlane className="ml-1 text-base" />{' '}
        </button>
      </form>
    </div>
  );
};

export default ContactBox;
