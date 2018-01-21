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

class TermIndexContainer extends Component {

  componentDidMount() {
    this.props.fetch_terms();
  }

  render() {  
    let { data, delete_term} = this.props;
    
    let index        = data.index;
    let page         = _.get(index, 'page');
    let total        = _.get(index, 'total');
    let total_page   = _.get(index, 'total_page');
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
              <TermFormFilter />        
              <TermList terms={terms} handleClick={delete_term}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.terms
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    delete_term : term_id => {
        dispatch(delete_term_request(term_id));
    },
    fetch_terms : () => {
      dispatch(fetch_terms());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermIndexContainer);
