import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="background flex min-h-screen items-center justify-center overflow-auto bg-gradient-to-tr from-slate-300 to-sky-50">
        {/* DON'T MAKE ANY CHANGE WITH MD */}

        <div className="card h-auto w-[95%] max-w-screen-3xl bg-slate-100 portrait:shadow-none md:portrait:w-[80%] landscape:shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)]">
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
