import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li><NavLink className="nav_link" to="/">Home</NavLink></li>
        <li><NavLink className="nav_link" to="/contact">Contact</NavLink></li>
        <li><NavLink className="nav_link" to="/projects">Projects</NavLink></li>
      </ul>
    </div>
  )
}
