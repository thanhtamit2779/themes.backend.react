import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// CONPONENTS
import TermFormFilter from './../components/TermFormFilter';
import TermList       from './../components/TermList';
import TermTool       from './../components/TermTool';

// ACTION
import { fetch_terms } from './../actions/index';

class TermIndexContainer extends Component {

  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(fetch_terms());
  }

  render() {  
    let { terms } = this.props;
        
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
              <TermList terms={terms} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    terms: state.terms
  }
}

export default connect(mapStateToProps)(TermIndexContainer);
