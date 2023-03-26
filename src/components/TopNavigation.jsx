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
  const activeLink = 'text-white';
  const normalLink = '';

  return (
    <div className="bg-yellow-500">
      <ul className="flex items-center justify-center text-center font-sans text-3xl font-medium uppercase tracking-[0.35em] text-slate-700">
        <li className="border-r border-slate-900 border-opacity-25 py-2 px-6 sm:px-11 md:px-[3.8rem]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHome />
          </NavLink>
        </li>
        <li className="border-r border-slate-900 border-opacity-25 py-2 px-6 sm:px-11 md:px-[3.8rem]">
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <BsFillPersonFill />
          </NavLink>
        </li>
        <li className="border-r border-slate-900 border-opacity-25 py-2 px-6 sm:px-11 md:px-[3.8rem]">
          <NavLink
            to={'/resume'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <VscFilePdf />
          </NavLink>
        </li>
        <li className="border-r border-slate-900 border-opacity-25 py-2 px-6 sm:px-11 md:px-[3.8rem]">
          <NavLink
            to={'/portfolio'}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <CgCodeSlash />
          </NavLink>
        </li>
        <li className="py-2 px-6 sm:px-11 md:px-[3.8rem]">
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
