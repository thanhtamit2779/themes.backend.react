import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom' ;

import SIDE_BAR from './../config/sidebar';

class SidebarLeft extends Component {  

  get_sidebar(sidebar) {
      if(sidebar.length === 0) return false;
      return sidebar.map( (item, key) => { 
         return (<React.Fragment key={key}>
          { this.get_group(item.group) }
          { this.get_children(item.children) }
         </React.Fragment>)
      });
  }

  get_group(name) {
    if(name.length === 0) return false;
    return <li className="header">{name}</li>  
  } 
  
  get_children(items) {
    if(items.length === 0) return false;

    return items.map( (item, key) => {
      return (
        <Route key={key} path={item.path} children={({ match }) => (
          <li className={match ? 'active' : 'item' }>
            <NavLink to={item.path}>
              <i className={item.icon} />
              <span>{item.name}</span>
            </NavLink>
          </li>
        )}/> 
      );
    });
  }

  render() {
    return (    
        <aside className="main-sidebar">
            <section className="sidebar">                
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..."/>
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"/>
                            </button>
                            </span>
                    </div>
                </form>
                {/*  /.search form */}
                
                {/* Menu */}
                <ul className="sidebar-menu" data-widget="tree">
                    {this.get_sidebar(SIDE_BAR)}
                </ul>
                {/* #Menu */}
            </section>    
        </aside>
    );
  }
}
export default SidebarLeft;