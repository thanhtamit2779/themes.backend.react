import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ROUTER from './../config/router';

class Content extends Component {

  showContent = router => {
    if(router.length === 0) return false;
    return router.map((item,key) => {
        return (<Route key={key} path={item.path} component={item.component} />);
    })
  } 
  
  render() {
    return ( 
      <div className="content-wrapper">
        <section className="content">
          <Switch>
            { this.showContent(ROUTER) }
          </Switch>  
        </section>
      </div>
    );
  }
}

export default Content;
