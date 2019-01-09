import React from 'react';
import '../css/App.css';
import NavBar from './navBar';

function HeadingNavBar(props) {
  console.log(props);
  const heading = props.heading || 'WEBBOOK';
    return (
      <React.Fragment>
      <h1 id="heading">{heading}</h1>
      <NavBar />
      </React.Fragment>
    );
  }

export default HeadingNavBar;
