import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
    <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button */}
    <a href="#abc" className="sidebar-toggle" data-toggle="push-menu" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>

    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        {/* Messages: style can be found in dropdown.less */}
        <li className="dropdown messages-menu">
          <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope-o"/>
            <span className="label label-success">4</span>
          </a>
        </li>
        {/* Notifications: style can be found in dropdown.less */}
        <li className="dropdown notifications-menu">
          <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o"/>
            <span className="label label-warning">10</span>
          </a>
        </li>
        {/* Tasks: style can be found in dropdown.less */}
        <li className="dropdown tasks-menu">
          <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-flag-o"/>
            <span className="label label-danger">9</span>
          </a>
        </li>
        {/* User Account: style can be found in dropdown.less */}
        <li className="dropdown user user-menu">
          <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
            {/* <img src="/public/dist/img/user2-160x160.jpg" className="user-image"/> */}
            <span className="hidden-xs">Thanh Tâm</span>
          </a>
          <ul className="dropdown-menu">
            {/* User image */}
            <li className="user-header">
              <img src="/public/dist/img/user2-160x160.jpg" className="img-circle" />
              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            {/* Menu Body */}
            <li className="user-body">
              <div className="row">
                <div className="col-xs-4 text-center">
                  <a href="#abc">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#abc">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#abc">Friends</a>
                </div>
              </div>
              {/* /.row */}
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <div className="pull-left">
                <a href="#abc" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href="#abc" className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        {/* Control Sidebar Toggle Button */}
        <li>
          <a href="#abc" data-toggle="control-sidebar"><i className="fa fa-gears"/></a>
        </li>
      </ul>
    </div>
  </nav>
    );
  }
}

export default NavBar;