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

// CONFIG
import { TERM_TYPE_DEFAULT } from './../configs/term_type';

// HELPER
import notification from './../../../helper/message';

class TermAddContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        term_name        : '' ,
        term_description : '' ,
        term_parent      : 0 ,
        term_status      : 'publish',
        term_type        : TERM_TYPE_DEFAULT,
    };
  }

  componentDidMount = () => {
    this.props.fetch_quick_view_terms();
  }

  componentWillReceiveProps(nextProps) {
    let message = nextProps.notification;
    if( _.isEmpty(message)) return false;
    notification(message);
  }

  handleChangeEvent = event => {
    var target = event.target;
    var name   = target.name;
    var value  = target.value;
    this.setState({
        [name]: value
    });
  } 

  handleSubmit = event => {
    event.preventDefault();
    
    let term = { 
        term_name: this.state.term_name, 
        term_parent: this.state.term_parent, 
        term_type: this.state.term_type, 
        term_status: this.state.term_status, 
        term_description : this.state.term_description
    };
    this.props.add_term(term);
  }
  
  render() {  
    let { items }       = this.props;
    let form            = this.state;
    return (
      <TermAdd terms={ items } handleSubmit={ this.handleSubmit } form={ form } handleChangeEvent={ this.handleChangeEvent } />
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
