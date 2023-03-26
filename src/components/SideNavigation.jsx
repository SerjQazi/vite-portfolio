import React from 'react';
import { NavLink } from 'react-router-dom';

import selfPortrait from '../assets/self-portrait.png';

const SideNavigation = () => {
  const activeLink = 'text-white';
  const normalLink = '';

  return (
    <div>
      <div className="imgContainer">
        <img src={selfPortrait} alt="Self Portrait" />
      </div>
      <div className="navContainer flex items-center justify-center bg-yellow-500">
        <ul className="text-center font-sans text-[0.5rem] font-bold uppercase tracking-[0.35em] lg:text-sm xl:text-base 2xl:text-lg">
          <li className="phone:p-[0.9rem] mb-0 border-b border-slate-900 border-opacity-25 p-4 lg:p-[1.29rem] xl:p-5 2xl:p-6">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
          <li className="phone:p-[0.9rem] mb-0 border-b border-slate-900 border-opacity-25 p-4 lg:p-[1.29rem] xl:p-5 2xl:p-6">
            <NavLink
              to={'/profile/about'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About Me
            </NavLink>
          </li>
          <li className="phone:p-[0.9rem] mb-0 border-b border-slate-900 border-opacity-25 p-4 lg:p-[1.29rem] xl:p-5 2xl:p-6">
            <NavLink
              to={'/profile/resume'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Resume
            </NavLink>
          </li>
          <li className="phone:p-[0.9rem] mb-0 border-b border-slate-900 border-opacity-25 p-4 lg:p-[1.29rem] xl:p-5 2xl:p-6">
            <NavLink
              to={'/profile/portfolio'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="phone:p-[0.9rem] mb-0 p-4 lg:p-[1.29rem] xl:p-5 2xl:p-6">
            <NavLink
              to={'/profile/contacts'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
