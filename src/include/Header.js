import React, { Component } from 'react';

// COMPONENT
import NavBar from './NavBar';

class Header extends Component {

  render() {
    return ( 
      <header className="main-header">
        {/* LOGO */}
        <a href="index2.html" className="logo">
           {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>R</b>JS</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>Admin </b>ReactJS</span>
        </a>
        <NavBar/>
      </header>      
    );
  }
}

export default Header;
