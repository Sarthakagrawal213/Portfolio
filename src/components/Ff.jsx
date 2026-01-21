import React from 'react';
import { Link } from 'react-router-dom';
import "./Ff.scss";

const Ff = () => {
  return (
    <div id='footer'>
      <Link to="/github" className="icon">
        <img src="GitHub-Icon-White-Dark-Background-Logo.wine.svg" alt="Github" />
      </Link>
      <Link to="/note" className="icon">
        <img src="493153.webp" alt="Note" />
      </Link>
      <Link to="/pdf" className="icon">
        <img className='pdf' src="pdf.png" alt="PDF" />
      </Link>
      <a href="https://calendar.google.com/calendar/u/0/r?pli=1" target="_blank" className="icon">
        <img src="calendar.png" alt="Calendar" />
      </a>
      <Link to="/spotify" className="icon">
        <img src="spotify.png" alt="Spotify" />
      </Link>
      <a href="https://www.linkedin.com/in/sarthak-agrawal-830b33283/" target="_blank" className="icon">
        <img src="link.png" alt="Link" />
      </a>
      <a href="mailto:sarthakagrawal213@gmail.com" target="_blank" className="icon">
        <img className='mail' src="gmail.png" alt="Mail" />
      </a>
      <Link to="/cli" className="icon ">
        <img className='cli' src="command-line.png" alt="CLI" />
      </Link>
    </div>
  )
}

export default Ff;

