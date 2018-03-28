
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import router from './../config/router';

class Content extends Component {

  showContent(router) {
    if(router.length === 0) return false;
    return router.map((item,key) => {
        return (<Route key={key} path={item.path} component={item.component} />);
    })
  } 
  
  render() {
    return ( 
      <React.Fragment>
          <Switch>
            { this.showContent(router) }
          </Switch>  
      </React.Fragment>
    );
  }
}

export default Content;
