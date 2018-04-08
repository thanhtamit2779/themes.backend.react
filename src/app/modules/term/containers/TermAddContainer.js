import React, { Component } from 'react';

import {
  Redirect,
} from 'react-router-dom' ;

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import TermAdd from './../components/TermAdd';

// ACTION
import { add_term_request, fetch_quick_view_terms } from './../actions/index';

// LIB
import * as _ from 'lodash';
import axios from 'axios';
import qs from 'qs'; 
import $ from "jquery";
import Dropzone from 'react-dropzone'
//import request_api from './../../../helper/api';

// CONFIG
import { TERM_TYPE_DEFAULT } from './../configs/term_type';

// HELPER
import notification from './../../../helper/message';

class TermAddContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        term_name               : '' ,
        term_description        : '' ,
        term_parent             : 0 ,
        term_status             : 'publish',
        term_type               : TERM_TYPE_DEFAULT,
        term_thumbnail          : ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
    this.handleChangeFile  = this.handleChangeFile.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentDidMount(){
    this.props.fetch_quick_view_terms();
  }

  componentWillReceiveProps(nextProps) {
    let message = nextProps.notification;
    if( _.isEmpty(message)) return false;
    notification(message);
  }

  handleChangeEvent(event) {
    let target = event.target;
    let name   = target.name;
    let value  = target.value;

    this.setState({
        [name]: value
    });
  }
  
  handleClick(event) {
    //console.log($('#add-term').serialize());
    // $("#add-term").submit(function(e) {
    //   e.preventDefault();    
    //   var formData = new FormData(this);
    //   console.log(formData);
    // });
  }

  handleChangeFile(event) {
    var files = {
        'name' : event.target.files[0].name,
        'lastModifiedDate' : event.target.files[0].lastModifiedDate,
        'size' : event.target.files[0].size,
        'type' : event.target.files[0].type,
        'webkitRelativePath' : event.target.files[0].webkitRelativePath
    };

    this.setState({
      term_thumbnail          : files
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let term = { 
        term_name        : this.state.term_name, 
        term_parent      : this.state.term_parent, 
        term_type        : this.state.term_type, 
        term_status      : this.state.term_status, 
        term_description : this.state.term_description,
        term_thumbnail   : this.state.term_thumbnail
    };

    // $.ajax({
    //   method : 'post',
    //   url : 'http://localhost/webdoctor.vn/themes/api/term/form',
    //   dataType : 'json',
    //   data : term
    // });

    // axios({ 
    //   method: 'post', 
    //   url: 'term/form', 
    //   data: formData,
    //   baseURL: 'http://localhost/webdoctor.vn/themes/api/',
    //   proxy: {
    //       host: 'localhost',
    //       port: 80,
    //   }, 
    //   responseType: 'json',
    //   headers: {
    //     'Authorization' : `Bearer mytokenasjdfkjsadlkfjsadlkfjslakdjf`,
    //     'x-apikey': '59a7ad19f5a9fa0808f11931',
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     'Accept': 'application/json; charset=UTF-8',
    //     'Content-Type': 'multipart/form-data',
    //   }
    // });
    //this.props.add_term(formData);
  }
  
  render() {  
    let { items }       = this.props;
    let form            = this.state;
    return (
      <TermAdd terms={ items } handleSubmit={ this.handleSubmit } form={ form } handleChangeEvent={ this.handleChangeEvent } handleChangeFile={ this.handleChangeFile } handleClick={ this.handleClick }/>
    )
  }
}

const mapStateToProps = state => {
  return {
    items         : state.term_add.items,
    notification  : state.term_add.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_quick_view_terms : () => {
      dispatch(fetch_quick_view_terms());
    },
    add_term    : term => {
      dispatch(add_term_request(term));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermAddContainer);
