import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.scss";
import Ff from './components/ff';
import Nav from './components/Nav';
import Macwindow from './components/windows/Macwindow';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Pdf from './components/windows/Pdf';
import Spotify from './components/windows/Spotify';
import Cli from './components/windows/Cli';


function App() {
  return (
    <Router>
      <div id='dd'>
        <Nav/>
        <Ff/>

        {/* Define routes for each component */}
        <Routes>
          <Route path="/github" element={<Github />} />
          <Route path="/note" element={<Note />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/calendar" element={<div>Calendar Page</div>} />
          <Route path="/link" element={<div>Link Page</div>} />
          <Route path="/mail" element={<div>Mail Page</div>} />
          <Route path="/cli" element={<Cli/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
