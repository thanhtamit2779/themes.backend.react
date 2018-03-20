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
import './../../../vendor/modules/admin/plugins/bootstrap/dist/css/bootstrap.min.css';
import './../../../vendor/modules/admin/plugins/font-awesome/css/font-awesome.min.css';
import './../../../vendor/modules/admin/plugins/Ionicons/css/ionicons.min.css';
import './../../../vendor/modules/admin/dist/css/AdminLTE.min.css';
import './../../../vendor/modules/admin/dist/css/skins/_all-skins.min.css';
import './../../../vendor/modules/admin/plugins/morris.js/morris.css';
import './../../../vendor/modules/admin/plugins/jvectormap/jquery-jvectormap.css';
import './../../../vendor/modules/admin/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import './../../../vendor/modules/admin/plugins/bootstrap-daterangepicker/daterangepicker.css';
import './../../../vendor/modules/admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
import './../../../vendor/modules/admin/plugins/iCheck/all.css';

/* JS */
import $ from 'jquery';
window.jQuery = $;
import './../../../vendor/modules/admin/plugins/jquery-ui/jquery-ui.min.js';
//import './../../../vendor/modules/admin/plugins/bootstrap/js/bootstrap.min.js';
import './../../../vendor/modules/admin/plugins/raphael/raphael.min.js';
import './../../../vendor/modules/admin/plugins/morris.js/morris.min.js';
import './../../../vendor/modules/admin/plugins/jquery-sparkline/dist/jquery.sparkline.min.js';
import './../../../vendor/modules/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js';
import './../../../vendor/modules/admin/plugins/jvectormap/jquery-jvectormap-world-mill-en.js';
import './../../../vendor/modules/admin/plugins/jquery-knob/dist/jquery.knob.min.js';
import './../../../vendor/modules/admin/plugins/jquery-slimscroll/jquery.slimscroll.min.js';
import './../../../vendor/modules/admin/plugins/iCheck/icheck.min.js';
import './../../../vendor/modules/admin/plugins/fastclick/lib/fastclick.js';
import './../../../vendor/modules/admin/plugins/moment/moment.js';
import './../../../vendor/modules/admin/dist/js/adminlte.min.js';
import './../../../vendor/modules/admin/dist/js/pages/dashboard.js';
import './../../../vendor/modules/admin/dist/js/demo.js';

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
