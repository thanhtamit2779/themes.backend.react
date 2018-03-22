import React, { Component } from 'react'   ;

import { NavLink } from 'react-router-dom' ;

// LIB
import * as _ from 'lodash';
import { Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";

// CONFIG
import { POST_TYPE } from './../configs/post_type';
import API from './../../../../config/api';
const themes_admin  = API.admin_url;
class PostList extends Component {

    constructor(props) {
        super(props);
        this.onPublish           = this.onPublish.bind(this);
        this.onUnPublish         = this.onUnPublish.bind(this);
        this.onDelete            = this.onDelete.bind(this);
        this.loadTableHead       = this.loadTableHead.bind(this);
        this.loadTableBody       = this.loadTableBody.bind(this);
        this.loadTableFoot       = this.loadTableFoot.bind(this);
    }

    // DELETE
    onDelete(post_id) {
        this.props.onDelete(post_id);
    }

    // PUBLISH
    onPublish(post_id) {
        this.props.onPublish(post_id);
    }

    // UNPUBLISH
    onUnPublish(post_id) {
        this.props.onUnPublish(post_id);
    }

    // FEATURED : 1
    onFeaturedOn(post_id) {
        this.props.onFeaturedOn(post_id);
    }

    // FEATURED : 0
    onFeaturedOff(post_id) {
        this.props.onFeaturedOff(post_id);
    }

    loadTableHead() {
        return (
            <thead>
                <tr>
                    <th style={ {width: '50px'} }>STT</th>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th>NGÀY TẠO</th>
                    <th>NGƯỜI TẠO</th>
                    <th>TYPE</th>
                    <th>LƯỢT XEM</th>
                    <th>NỔI BẬT</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                    <th style={ {width: '50px'} }><input type="checkbox" className="flat-red" id="check-all"/></th>
                </tr>
            </thead>
        )
    }

    loadTableFoot() {
        let { active_page, total, per_page, total_page, onPagination } = this.props;

        if(total_page === 1) return false;
        //if(_.isEmpty(total_page)) return false;

        return (
            <div className="row-pagination">
                <div className="col-sm-12">
                    <Pagination
                        activePage={active_page}
                        itemsCountPerPage={per_page}
                        totalItemsCount={total}
                        pageRangeDisplayed={5} 
                        onChange={ onPagination }
                        activeClass="active"
                        activeLinkClass="active"
                    />
                </div>    
            </div>
        )
    }

    loadTableBody(posts) {
        if(_.isEmpty(posts)) return false;

        var result = [];
        var stt    = 1;
        result = posts.map( (post, key) => {
            if(post.post_status === 'unpublish') {
                var link_update_status = (<Button id="post-status" bsSize="xsmall" bsStyle="link" onClick={ () => this.onPublish(post.post_id) }><small className="label bg-red">{ post.post_status }</small></Button>); 
            }
            else if(post.post_status === 'publish') {
                var link_update_status = (<Button id="post-status" bsSize="xsmall" bsStyle="link" onClick={ () => this.onUnPublish(post.post_id) }><small className="label bg-green">{ post.post_status }</small></Button>); 
            }

            if(post.post_featured == 0) {
                var link_update_post_featured = (<Button id="post-featured" bsSize="xsmall" bsStyle="link" onClick={ () => this.onFeaturedOn(post.post_id) }><i className="fa fa-fw fa-star-o"/></Button>); 
            }
            else if(post.post_featured == 1) {
                var link_update_post_featured = (<Button id="post-featured" bsSize="xsmall" bsStyle="link" onClick={ () => this.onFeaturedOff(post.post_id) }><i className="fa fa-fw fa-star"/></Button>); 
            }

            let link_edit          = `${themes_admin}theme/edit/${post.post_id}`;
            let item_id            = `item-${post.post_id}`;
            let item_name          = `items[${post.post_id}]`;
            let term_type          = '';

            if(_.isEmpty(POST_TYPE) === false) {
                _.forIn(POST_TYPE, function(type_val, type_key) {
                    if(type_key === post.post_type) {
                        term_type = type_val;
                    }
                });
            }
            return (
                <tr key={key}>
                    <td>{ stt++ }</td>
                    <td><img src={ post.post_thumb } className="img-responsive" width="90" height="60"/></td>
                    <td>{ post.post_title }</td>
                    <td>{ post.created_on }</td>
                    <td>{ post.post_author }</td>
                    <td>
                        { term_type }
                    </td>
                    <td>{post.post_viewed}</td>
                    <td>{ link_update_post_featured }</td>
                    <td>
                        { link_update_status }
                    </td>
                    <td>
                        <NavLink to={ link_edit } className="mar-5" target="_blank">
                            <small className="label bg-green"><i className="fa fa-edit"></i></small>
                        </NavLink>
                        <Button id="delete" bsSize="xsmall" bsStyle="link" onClick={ () => this.onDelete(post.post_id) }>
                            <small className="label bg-red"><i className="fa fa-trash-o"></i></small> 
                        </Button>
                    </td>
                    <td><input type="checkbox" className="flat-red post-id is-checked" ref="post_ids" name="post_id" value={post.post_id} id={item_id} /></td>
                </tr>
            )
        })
        
        return (
            <tbody>
                { result }
            </tbody>
        ) 
    }

    render() {
        return (
            <React.Fragment>
                <table id="mainTable" className="table table-striped js-basic-example dataTable">
                    { this.loadTableHead() }
                    { this.loadTableBody(this.props.posts) }
                </table>
                { this.loadTableFoot() }
            </React.Fragment>
        )
    }
}

export default PostList;
