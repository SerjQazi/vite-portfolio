import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  FaHome,
  BsFillPersonFill,
  VscFilePdf,
  CgCodeSlash,
  TiContacts,
} from 'react-icons/all';

const TopNavigation = () => {
  const activeLink =
    'py-2 flex items-center justify-center lg:portrait:py-3 w-full text-white';
  const normalLink =
    'py-2 flex items-center justify-center lg:portrait:py-3 w-full';

  return (
    <div className="bg-yellow-500">
      <ul className="flex w-full items-center justify-center text-center font-sans text-3xl font-medium uppercase tracking-[0.35em] text-slate-700 md:portrait:text-4xl lg:portrait:text-5xl">
        <li className="flex w-full items-center justify-center  border-r border-slate-900 border-opacity-25">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHome />
          </NavLink>
        </li>
        <li className="flex w-full items-center justify-center border-r border-slate-900 border-opacity-25">
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <BsFillPersonFill />
          </NavLink>
        </li>
        <li className="flex w-full items-center justify-center border-r border-slate-900 border-opacity-25">
          <NavLink
            to={'/resume'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <VscFilePdf />
          </NavLink>
        </li>
        <li className="flex w-full items-center justify-center border-r border-slate-900 border-opacity-25">
          <NavLink
            to={'/portfolio'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <CgCodeSlash />
          </NavLink>
        </li>
        <li className="flex w-full items-center justify-center">
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <TiContacts />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TopNavigation;
