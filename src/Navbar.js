import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-item">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
      <div className="nav-item">
        <a href="https://www.linkedin.com/in/cecilia-chang/" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="nav-item">
        <a href="https://medium.com/@ceciliafchang" target="_blank">
          Blog
        </a>
      </div>
      <div className="nav-item">
        <a href="https://github.com/cacelii" target="_blank">
          Github
        </a>
      </div>
    </nav>
  );
}
