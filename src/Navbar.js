import React from 'react';
import { NavLink } from 'react-router-dom';
import Medium from 'react-icons/lib/fa/medium';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Envelope from 'react-icons/lib/fa/envelope-square';

export default function Navbar() {
  return (
    <nav>
      <div className="top-right">
        <div className="nav-item">
          <a href="https://medium.com/@ceciliafchang" target="_blank">
            <Medium />
          </a>
        </div>
        <div className="nav-item">
          <a
            href="http://www.github.com/cacelii"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </a>
        </div>
        <div className="nav-item">
          <a href="http://www.linkedin.com/in/cecilia-chang" target="_blank">
            <LinkedIn />
          </a>
        </div>
        <div className="nav-item">
          <a href="mailto:ceciliafchang@gmail.com">
            <Envelope />
          </a>
        </div>
      </div>
      <div className="nav-center">
        <h1 className="App-title">Cecilia Chang</h1>
      </div>
      <div className="nav-center">
        <div className="nav-item">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink
            to="/skills"
            activeStyle={{
              fontWeight: 'bold',
              color: 'lightskyblue'
            }}
          >
            Skills
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink
            to="/portfolio"
            activeStyle={{
              fontWeight: 'bold',
              color: 'lightskyblue'
            }}
          >
            Portfolio
          </NavLink>
        </div>
        <div className="nav-item">
          <a href="/CeciliaChang.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
