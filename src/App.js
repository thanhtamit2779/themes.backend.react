import React, { Component } from 'react';

/* INCLUDE */
import Header from './include/Header';
import SidebarLeft from './include/SidebarLeft';
import SidebarRight from './include/SidebarRight';
import Content from './include/Content';
import Footer from './include/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <SidebarLeft/>
        <Content/>
        <Footer/>
        <SidebarRight/>
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;
