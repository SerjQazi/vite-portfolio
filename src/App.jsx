import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/TopNavigation';
import SideNavigation from './components/SideNavigation';

import Home from './home/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="background flex min-h-screen items-center justify-center bg-gradient-to-tr from-slate-300 to-sky-50">
        <div className="card h-[95vh] w-[95%] max-w-screen-3xl overflow-auto border-2 border-red-500 bg-slate-100 shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)] xl:flex ipadHorizontal:max-h-[34.68rem] ipadXL:max-h-[43rem] ipadXL:w-[90%] 3xl:max-h-[50rem] portrait:max-h-[95vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
