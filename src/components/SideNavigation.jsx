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
        <ul className="text-center font-sans text-[0.5rem] font-bold uppercase tracking-[0.35em] phone:landscape:text-[0.53rem]">
          <li className="mb-0 border-b border-slate-900 border-opacity-25 p-[0.77rem] phone:landscape:p-[0.87rem]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
          <li className="mb-0 border-b border-slate-900 border-opacity-25 p-[0.77rem] phone:landscape:p-[0.87rem]">
            <NavLink
              to={'/about'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About Me
            </NavLink>
          </li>
          <li className="mb-0 border-b border-slate-900 border-opacity-25 p-[0.77rem] phone:landscape:p-[0.87rem]">
            <NavLink
              to={'/resume'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Resume
            </NavLink>
          </li>
          <li className="mb-0 border-b border-slate-900 border-opacity-25 p-[0.77rem] phone:landscape:p-[0.87rem]">
            <NavLink
              to={'/portfolio'}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="mb-0 p-[0.77rem] phone:landscape:p-[0.87rem]">
            <NavLink
              to={'/contact'}
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
