import React from 'react';
import Buttons from './buttons';

function NavBar(props) {
  return (
    <nav className="navbar navbar-default" id="nav">
      <ul className="nav navbar-nav">
        <li><a onClick={props.click} href="books">BOOKS</a></li>
        <li><a onClick={props.click} href="authors">AUTHORS</a></li>
      </ul>
      <Buttons name="addbook" value="ADD BOOK" classname="btn btn-success" id="add-book" />
    </nav>
  );
}

export default NavBar;