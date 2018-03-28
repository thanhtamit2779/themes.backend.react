import React, { Component } from 'react';

/* INCLUDE */
import Header from './include/Header';
import Content from './include/Content';
import Footer from './include/Footer';

/* CSS */
import './../../../vendor/modules/frontend/vendor/bootstrap/css/bootstrap.min.css';
import './../../../vendor/modules/frontend/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './../../../vendor/modules/frontend/fonts/themify/themify-icons.css';
import './../../../vendor/modules/frontend/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './../../../vendor/modules/frontend/fonts/elegant-font/html-css/style.css';
import './../../../vendor/modules/frontend/vendor/animate/animate.css';
import './../../../vendor/modules/frontend/vendor/css-hamburgers/hamburgers.min.css';
import './../../../vendor/modules/frontend/vendor/animsition/css/animsition.min.css';
import './../../../vendor/modules/frontend/vendor/select2/select2.min.css';
import './../../../vendor/modules/frontend/vendor/daterangepicker/daterangepicker.css';
import './../../../vendor/modules/frontend/vendor/slick/slick.css';
import './../../../vendor/modules/frontend/vendor/lightbox2/css/lightbox.min.css';
import './../../../vendor/modules/frontend/css/util.css';
import './../../../vendor/modules/frontend/css/main.css';

/* JS */
import $ from 'jquery';
window.jQuery = $;

class FrontendBootstrap extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default FrontendBootstrap;