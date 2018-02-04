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

class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active_page,
      keyword
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
    return this.setState(
      _.merge({active_page: page}, this.props.fetch_terms({
        per_page,
        page
      })) 
    );
  } 

  // SEARCH KEYWORD
  handle

  // RENDER
  render() {  
    let { items, delete_term, fetch_terms } = this.props;
    let { active_page } = this.state;

    let index        = items;
    let total        = _.get(index, 'total');
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
              <TermFormFilter/>        
              <TermList 
                terms={terms} 
                onDelete={delete_term} 
                active_page={active_page} 
                total={total} 
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
