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
const per_page = 5;

class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

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
  }

  render() {  
    let { items, delete_term } = this.props;

    let index        = items;
    let page         = _.get(index, 'page');
    let total        = _.get(index, 'total');
    let terms        = _.get(index, 'items');
    
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
              <TermList terms={terms} onDelete={delete_term} page={page} total={total} per_page={per_page} />
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
    fetch_terms : (data = null) => {
      dispatch(fetch_terms(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermIndexContainer);
