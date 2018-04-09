import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// LIBS
import * as _ from 'lodash';
import $ from "jquery";
import axios from 'axios'; 

// CONPONENTS
import TermFormFilter from './../components/TermFormFilter';
import TermList       from './../components/TermList';
import TermTool       from './../components/TermTool';

// ACTION
import { fetch_terms, 
         delete_term_request, 
         deletes_term_request,
         publish_term_request, 
         unpublish_term_request,
         publishs_term_request, 
         unpublishs_term_request
} from './../actions/index';

// HELPER
import notification from './../../../helper/message';

// DEFINE
const per_page      = 10;
const active_page   = 1;
const keyword       = '';
const term_name     = '';
const term_status   = '';
const term_type     = '';
const resize        = 1;
const resize_width  = 90;
const resize_height = 60;

class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active_page,
      term_name,
      term_status,
      term_type,
      resize,
      resize_width,
      resize_height
    };
    this.handlePagination     = this.handlePagination.bind(this);
    this.handleChangeEvent    = this.handleChangeEvent.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
    this.handleMultiSelected  = this.handleMultiSelected.bind(this);
    this.handlePublishs       = this.handlePublishs.bind(this);
    this.handleUnPublishs     = this.handleUnPublishs.bind(this);
    this.handleTrashs         = this.handleTrashs.bind(this);
  }

  // FETCH API
  componentDidMount() {
    this.setState(
      _.merge(
        { active_page: this.state.active_page }, 
        this.props.fetch_terms({
          per_page    : per_page,
          page        : 1,
          term_name: this.state.term_name, 
          term_type: this.state.term_type, 
          term_status: this.state.term_status, 
          resize : this.state.resize,
          resize_width: this.state.resize_width,
          resize_height: this.state.resize_height
        })
      ) 
    );

    $("#check-all").on('ifChanged ifClicked', function (e) {
      if (this.checked) {
        $(".is-checked").each(function() {
            this.checked=true;
        });
      } else {
        $(".is-checked").each(function() {
            this.checked=false;
        });
      }
    });
  }

  // DISPLAY NOTIFICATION
  componentWillReceiveProps(nextProps) {
    let message = nextProps.notification;

    if( _.isEmpty(message)) return false;
    notification(message);

    if(message.status === 1) { 
      this.setState(
        _.merge(
          { active_page: this.state.active_page }, 
          this.props.fetch_terms({
            per_page    : per_page,
            page        : this.state.active_page,
            term_name: this.state.term_name, 
            term_type: this.state.term_type, 
            term_status: this.state.term_status, 
            resize : this.state.resize,
            resize_width: this.state.resize_width,
            resize_height: this.state.resize_height
          })
        )
      );
    }
  }

  // PAGINATION
  handlePagination(page) {
    this.setState(
      _.merge(
        { active_page: page }, 
        this.props.fetch_terms({
          per_page    : per_page,
          page        : page,
          term_name: this.state.term_name, 
          term_type: this.state.term_type, 
          term_status: this.state.term_status, 
          resize : this.state.resize,
          resize_width: this.state.resize_width,
          resize_height: this.state.resize_height
        })
      ) 
    );
  } 

  // FILTER
  handleChangeEvent(event) {
    var target = event.target;
    var name   = target.name;
    var value  = target.value;
    this.setState({
        [name]: value
    });
  } 

  // SUBMIT FILTER
  handleSubmit(event) {
    event.preventDefault();

    let terms = this.props.fetch_terms({
      per_page : per_page,
      page : 1,
      term_name: this.state.term_name, 
      term_type: this.state.term_type, 
      term_status: this.state.term_status, 
      resize : this.state.resize,
      resize_width: this.state.resize_width,
      resize_height: this.state.resize_height
    });

    this.setState(
      _.merge(
          { active_page: active_page }, 
          terms
      ) 
    );
  }

  handleMultiSelected() {
    if( $('.term-id:checked').length > 0 ) {
      var term_ids = []; 
		  $('.term-id').each(function(){
		    if($(this).is(':checked')) { 
		      term_ids.push($(this).val());
		    }
      });
      return term_ids;
    }
  }

  handlePublishs() {
    let term_ids = this.handleMultiSelected();
    this.props.publishs_term(term_ids);
  }

  handleUnPublishs() {
    let term_ids = this.handleMultiSelected();
    this.props.unpublishs_term(term_ids);
  }

  handleTrashs() {
    let term_ids = this.handleMultiSelected();
    this.props.deletes_term(term_ids);
  }

  // RENDER
  render() {  
    let { items, delete_term, fetch_terms, publish_term, unpublish_term } = this.props;
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
              <TermTool handlePublishs={ this.handlePublishs } handleUnPublishs={ this.handleUnPublishs } handleTrashs={ this.handleTrashs }/>   
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
                onPublish={publish_term}
                onUnPublish={unpublish_term} 
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

    publish_term : term_id => {
      dispatch(publish_term_request(term_id));
    },

    unpublish_term : term_id => {
      dispatch(unpublish_term_request(term_id));
    },

    publishs_term : data => {
      dispatch(publishs_term_request(data));
    },

    unpublishs_term : data => {
      dispatch(unpublishs_term_request(data));
    },

    deletes_term : data => {
      dispatch(deletes_term_request(data));
    },

    fetch_terms : (data) => {
      dispatch(fetch_terms(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermIndexContainer);
