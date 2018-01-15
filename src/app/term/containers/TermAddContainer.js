import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import TermAdd from './../components/TermAdd';

// ACTION
import { add_term_request, fetch_terms } from './../actions/index';

// CONFIG
import { TERM_TYPE_DEFAULT } from './../configs/term_type';

class TermAddContainer extends Component {

  constructor(props) {
    super(props);
    this.props.fetch_terms();
    this.state = {
        term_name        : '' ,
        term_description : '' ,
        term_parent      : 0 ,
        term_status      : 'publish',
        term_type        : TERM_TYPE_DEFAULT,
    };
  }

  handleChange = event => {
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
    let { terms } = this.props;
    let form      = this.state;

    return (
      <TermAdd terms={ terms } handleSubmit={ this.handleSubmit } form={ form } handleChange={ this.handleChange } />
    )
  }
}

const mapStateToProps = state => {
  return {
    terms: state.terms
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      fetch_terms : terms => {
        dispatch(fetch_terms());
      },
      add_term    : term => {
        dispatch(add_term_request(term));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermAddContainer);
