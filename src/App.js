import React, { Component } from 'react';

/* CSS */
import 'react-notifications/lib/notifications.css';

/* LIBS */
import { NotificationContainer } from 'react-notifications';

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
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
