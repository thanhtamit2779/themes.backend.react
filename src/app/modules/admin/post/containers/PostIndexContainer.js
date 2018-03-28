import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

// LIBS
import * as _ from 'lodash';
import $ from "jquery";
import axios from 'axios'; 

// CONPONENTS
import PostFormFilter from './../components/PostFormFilter';
import PostList       from './../components/PostList';
import PostTool       from './../components/PostTool';

// ACTION
import { fetch_posts, 
         delete_post_request, 
         deletes_post_request,
         publish_post_request, 
         unpublish_post_request,
         publishs_post_request, 
         unpublishs_post_request,
         featured_on_post_request,
         featured_off_post_request
} from './../actions/index';

// HELPER
import notification from './../../../../helper/message';

// DEFINE
const per_page      = 25;
const active_page   = 1;
const keyword       = '';
const post_title    = '';
const post_status   = '';
const post_type     = 'theme_post';
const resize        = 1;
const resize_width  = 90;
const resize_height = 60;

class PostIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active_page,
      post_title,
      post_status,
      post_type,
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
        this.props.fetch_posts({
          total_record    : per_page,
          page            : 1,
          post_title      : this.state.post_title, 
          post_type       : this.state.post_type, 
          post_status     : this.state.post_status, 
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

    $('.flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass   : 'iradio_flat-green'
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
          this.props.fetch_posts({
            total_record    : per_page,
            page            : this.state.active_page,
            post_title      : this.state.post_title, 
            post_type       : this.state.post_type, 
            post_status     : this.state.post_status, 
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
        this.props.fetch_posts({
          total_record    : per_page,
          page            : page,
          post_title      : this.state.post_title, 
          post_type       : this.state.post_type, 
          post_status     : this.state.post_status, 
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

    let posts = this.props.fetch_posts({
      total_record : per_page,
      page : 1,
      post_title: this.state.post_title, 
      post_type: this.state.post_type, 
      post_status: this.state.post_status, 
      resize : this.state.resize,
      resize_width: this.state.resize_width,
      resize_height: this.state.resize_height
    });

    this.setState(
      _.merge(
          { active_page: active_page }, 
          posts
      ) 
    );
  }

  handleMultiSelected() {
    if( $('.post-id:checked').length > 0 ) {
      var post_ids = []; 
		  $('.post-id').each(function(){
		    if($(this).is(':checked')) { 
		      post_ids.push($(this).val());
		    }
      });
      return post_ids;
    }
  }

  handlePublishs() {
    let post_ids = this.handleMultiSelected();
    this.props.publishs_post(post_ids);
  }

  handleUnPublishs() {
    let post_ids = this.handleMultiSelected();
    this.props.unpublishs_post(post_ids);
  }

  handleTrashs() {
    let post_ids = this.handleMultiSelected();
    this.props.deletes_post(post_ids);
  }

  // RENDER
  render() { 
    let { items, delete_post, fetch_posts, publish_post, unpublish_post, featured_on_post, featured_off_post } = this.props;
    let { active_page } = this.state;
    let form            = this.state;

    let index        = items;
    let total        = _.get(index, 'total');
    let total_page   = _.get(index, 'total_page');
    let posts        = _.get(index, 'posts');
    
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="box box-success">
            <div className="box-header">
              <h3 className="box-title">SẢN PHẨM</h3>
              <PostTool handlePublishs={ this.handlePublishs } handleUnPublishs={ this.handleUnPublishs } handleTrashs={ this.handleTrashs }/>   
            </div>
            <br/>
            <div className="box-body table-responsive no-padding">      
              <PostFormFilter 
                handleSubmit={ this.handleSubmit } 
                form={ form } 
                handleChangeEvent={ this.handleChangeEvent } /> 

              <PostList 
                posts={posts} 
                onDelete={delete_post} 
                onPublish={publish_post}
                onUnPublish={unpublish_post} 
                onFeaturedOn={featured_on_post}
                onFeaturedOff={featured_off_post} 
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
    items         : state.post_index.items,
    notification  : state.post_index.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    delete_post : post_id => {
      dispatch(delete_post_request(post_id));
    },

    publish_post : post_id => {
      dispatch(publish_post_request(post_id));
    },

    unpublish_post : post_id => {
      dispatch(unpublish_post_request(post_id));
    },

    featured_on_post : post_id => {
      dispatch(featured_on_post_request(post_id));
    },

    featured_off_post : post_id => {
      dispatch(featured_off_post_request(post_id));
    },

    publishs_post : data => {
      dispatch(publishs_post_request(data));
    },

    unpublishs_post : data => {
      dispatch(unpublishs_post_request(data));
    },

    deletes_post : data => {
      dispatch(deletes_post_request(data));
    },

    fetch_posts : (data) => {
      dispatch(fetch_posts(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexContainer);
