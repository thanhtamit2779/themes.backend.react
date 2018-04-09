import React, { Component } from 'react';

/* LIBS */
import { NotificationContainer } from 'react-notifications';

/* INCLUDE */
import Header from './include/Header';
import SidebarLeft from './include/SidebarLeft';
import SidebarRight from './include/SidebarRight';
import Content from './include/Content';
import Footer from './include/Footer';

/* CSS */
import 'react-notifications/lib/notifications.css';
import './../../vendor/plugins/bootstrap/dist/css/bootstrap.min.css';
import './../../vendor/plugins/font-awesome/css/font-awesome.min.css';
import './../../vendor/plugins/Ionicons/css/ionicons.min.css';
import './../../vendor/dist/css/AdminLTE.min.css';
import './../../vendor/dist/css/skins/_all-skins.min.css';
import './../../vendor/plugins/iCheck/all.css';

/* JS */
import $ from 'jquery';
window.jQuery = $;
import './../../vendor/plugins/jquery-ui/jquery-ui.min.js';
import './../../vendor/plugins/jquery-sparkline/dist/jquery.sparkline.min.js';
import './../../vendor/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js';
import './../../vendor/plugins/jvectormap/jquery-jvectormap-world-mill-en.js';
import './../../vendor/plugins/jquery-knob/dist/jquery.knob.min.js';
import './../../vendor/plugins/jquery-slimscroll/jquery.slimscroll.min.js';
import './../../vendor/plugins/iCheck/icheck.min.js';
import './../../vendor/plugins/fastclick/lib/fastclick.js';
import './../../vendor/plugins/moment/moment.js';
import './../../vendor/dist/js/adminlte.min.js';
import './../../vendor/dist/js/pages/dashboard.js';
import './../../vendor/dist/js/demo.js';

class AdminBootstrap extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <SidebarLeft/>
        <Content/>
        <Footer/>
        <SidebarRight/>
        <div className="control-sidebar-bg"></div>
        <NotificationContainer/>
      </React.Fragment>
    )
  }
}

export default AdminBootstrap;
