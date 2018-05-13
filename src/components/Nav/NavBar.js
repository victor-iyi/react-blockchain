import React from 'react';
import NavItem from './NavItem';

const navs = [
  { title: 'Hash', link: '' },
  { title: 'Block', link: '' },
  { title: 'Blockchain', link: '' },
  { title: 'Distributed', link: '' },
  { title: 'Tokens', link: '' },
];

const _renderNavs = () =>
  <ul className="navbar-nav">
    {navs.map((value, index) => <NavItem key={index} {...value} />)}
  </ul>;


const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="">React Blockchain</a>
      <button className="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav bar links. */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {_renderNavs()}
      </div>
    </nav>
  );
};

export default NavBar;
