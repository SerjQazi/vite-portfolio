import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="background flex min-h-screen items-center justify-center bg-gradient-to-tr from-slate-300 to-sky-50">
        {/* DON'T MAKE ANY CHANGE WITH MD */}

        <div className="card h-[94.8vh] w-[95%] max-w-screen-3xl overflow-auto bg-slate-100 shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)] landscape:h-[94.5vh]">
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
