import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { resume } from '../assets';

import {
  AiOutlineLinkedin,
  RxTwitterLogo,
  TbBrandGithub,
  BsFileEarmarkPdf,
} from 'react-icons/all';

const Social = () => {
  return (
    <div className="ml-2 mr-1 h-full w-full">
      <ul className="my-10 flex h-5/6 w-full flex-col items-center justify-center rounded-lg bg-yellow-500">
        <li className="flex h-full w-full cursor-pointer items-center justify-center rounded-tr-lg rounded-tl-lg border-b-2 border-dashed border-slate-700 px-1 text-slate-600  duration-300 hover:bg-slate-700 hover:text-yellow-500">
          <Link
            className="flex h-full w-full items-center justify-center py-1 text-3xl duration-300 hover:scale-105 focus:rounded-bl-lg focus:rounded-tl-lg focus:bg-slate-700 focus:text-yellow-500 focus:outline-none"
            to="https://www.linkedin.com/in/serjqazi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </Link>
        </li>

        <li className="flex h-full w-full cursor-pointer items-center justify-center border-b-2 border-dashed border-slate-700 px-1 text-slate-600 duration-300 hover:bg-slate-700 hover:text-yellow-500">
          <Link
            className="flex h-full w-full items-center justify-center py-1 text-3xl duration-300 hover:scale-105 focus:bg-slate-700 focus:text-yellow-500 focus:outline-none"
            to="https://github.com/SerjQazi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub />
          </Link>
        </li>

        <li className="flex h-full w-full cursor-pointer items-center justify-center border-b-2 border-dashed border-slate-700 px-1 text-slate-600 duration-300 hover:bg-slate-700 hover:text-yellow-500">
          <Link
            className="flex h-full w-full items-center justify-center py-1 text-3xl duration-300 hover:scale-105 focus:bg-slate-700 focus:text-yellow-500 focus:outline-none"
            to="https://twitter.com/qazi_serj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxTwitterLogo />
          </Link>
        </li>

        <li className="flex h-full w-full cursor-pointer items-center justify-center rounded-br-lg rounded-bl-lg px-1 text-slate-600  duration-300 hover:bg-slate-700 hover:text-yellow-500">
          <Link
            className="flex h-full w-full items-center justify-center py-1 text-3xl duration-300 hover:scale-105 focus:rounded-br-lg focus:rounded-bl-lg focus:bg-slate-700 focus:text-yellow-500 focus:outline-none"
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFileEarmarkPdf />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
