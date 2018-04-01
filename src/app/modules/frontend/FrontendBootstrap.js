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
import './../../../vendor/modules/frontend/vendor/animsition/css/animsition.min.css';
import './../../../vendor/modules/frontend/css/util.css';
import './../../../vendor/modules/frontend/vendor/own-carousel/assets/owl.carousel.min.css';
import './../../../vendor/modules/frontend/vendor/own-carousel/assets/owl.theme.default.min.css';
import './../../../vendor/modules/frontend/css/main.css';

/* JS */
import './../../../vendor/modules/frontend/vendor/bootstrap/js/bootstrap.min.js';
import './../../../vendor/modules/frontend/vendor/animsition/js/animsition.min.js';
import './../../../vendor/modules/frontend/vendor/own-carousel/owl.carousel.min.js';
import './../../../vendor/modules/frontend/js/main.js';

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