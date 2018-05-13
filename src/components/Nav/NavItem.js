import React from 'react';


/**
 * Navigation item.
 * 
 * @param {object} props:  Component properties.
 */
const NavItem = ({ title, link, active = false }) =>
  <li className={`nav-item ${active ? "active" : ""}`}>
    <a className="nav-link" href={link}>
      {title}
      {active && <span className="sr-only">(current)</span>}
    </a>
  </li>;


export default NavItem;
