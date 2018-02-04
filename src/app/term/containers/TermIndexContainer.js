import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// LIBS
import * as _ from 'lodash';

// CONPONENTS
import TermFormFilter from './../components/TermFormFilter';
import TermList       from './../components/TermList';
import TermTool       from './../components/TermTool';

// ACTION
import { fetch_terms, delete_term_request } from './../actions/index';

// HELPER
import notification from './../../../helper/message';

// CODE
const per_page      = 5;
const active_page   = 1;
const keyword       = '';
const term_name     = '';
const term_status   = '';
const term_type     = '';

class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active_page,
      term_name,
      term_status,
      term_type
    };
  }

  // FETCH API
  componentDidMount() {
    this.setState(this.props.fetch_terms({
      per_page
    })) ;
  }

  // DISPLAY NOTIFICATION
  componentWillReceiveProps(nextProps) {
    let message = nextProps.notification;

    if( _.isEmpty(message)) return false;
    notification(message);

    if(message.status === 1) { 
      this.setState(this.props.fetch_terms({
        per_page
      })) ;
    }
    return false;
  }

  // PAGINATION
  handlePagination = (page) => {
    this.setState(
      _.merge(
        {active_page: page}, 
        this.props.fetch_terms({
          per_page,
          page
        })
      ) 
    );
  } 

  // FILTER
  handleChangeEvent = event => {
    var target = event.target;
    var name   = target.name;
    var value  = target.value;
    this.setState({
        [name]: value
    });
  } 

  // SUBMIT FILTER
  handleSubmit = event => {
    event.preventDefault();

    let terms = this.props.fetch_terms({
      per_page,
      page : 1,
      term_name: this.state.term_name, 
      term_type: this.state.term_type, 
      term_status: this.state.term_status, 
    });

    this.setState(
      _.merge(
          { active_page: 1 }, 
          terms
      ) 
    );
  }

  // RENDER
  render() {  
    let { items, delete_term, fetch_terms } = this.props;
    let { active_page } = this.state;
    let form            = this.state;

    let index        = items;
    let total        = _.get(index, 'total');
    let total_page   = _.get(index, 'total_page');
    let terms        = _.get(index, 'terms');
    
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="box box-success">
            <div className="box-header">
              <h3 className="box-title">DANH MỤC SẢN PHẨM</h3>
              <TermTool />   
            </div>
            <br/>
            <div className="box-body table-responsive no-padding">      
              <TermFormFilter 
                handleSubmit={ this.handleSubmit } 
                form={ form } 
                handleChangeEvent={ this.handleChangeEvent } /> 

              <TermList 
                terms={terms} 
                onDelete={delete_term} 
                active_page={active_page} 
                total={total} 
                total_page={total_page}
                per_page={per_page} 
                onPagination={ this.handlePagination } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.term_index.items,
    notification  : state.term_index.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    delete_term : term_id => {
        dispatch(delete_term_request(term_id));
    },
    fetch_terms : (data) => {
      dispatch(fetch_terms(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermIndexContainer);
