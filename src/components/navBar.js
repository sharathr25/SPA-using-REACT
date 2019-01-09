import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar navbar-default" id="nav">
      <ul className="nav navbar-nav">
        <li><Link to="/books">BOOKS</Link></li>
        <li><Link to="/authors">AUTHORS</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;