import React, { Component } from 'react'   ;

import { NavLink } from 'react-router-dom' ;

// LIB
import * as _ from 'lodash';
import { Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";

// CONFIG
import { TERM_TYPE } from './../configs/term_type';

class TermList extends Component {

  // DELETE
  onDelete = term_id => {
    this.props.onDelete(term_id);
  }

  // PUBLISH
  onPublish = term_id => {
    this.props.onPublish(term_id);
  }

  // UNPUBLISH
  onUnPublish = term_id => {
    this.props.onUnPublish(term_id);
  }

  loadTableHead = () => {
    return (
        <thead>
            <tr>
                <th style={ {width: '50px'} }>STT</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>ACTION</th>
                <th style={ {width: '50px'} }><input type="checkbox" className="flat-red" /></th>
            </tr>
        </thead>
    )
  }

  loadTableFoot = () => {
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

  loadTableBody = (terms) => {
    if(_.isEmpty(terms)) return false;

    var result = [];
    var stt    = 1;
    result = terms.map( (term, key) => {
        if(term.term_status === 'unpublish') {
            var link_update_status = (<Button id="term-status" bsSize="xsmall" bsStyle="link" onClick={ () => this.onPublish(term.term_id) }><small className="label bg-red">{ term.term_status }</small></Button>); 
        }
        else if(term.term_status === 'publish') {
            var link_update_status = (<Button id="term-status" bsSize="xsmall" bsStyle="link" onClick={ () => this.onUnPublish(term.term_id) }><small className="label bg-green">{ term.term_status }</small></Button>); 
        }

        let link_edit          = `/term/edit/${term.term_id}`;
        let item_id            = `item-${term.term_id}`;
        let item_name          = `items[${term.term_id}]`;
        let term_type          = '';

        if(_.isEmpty(TERM_TYPE) === false) {
            _.forIn(TERM_TYPE, function(type_val, type_key) {
                if(type_key === term.term_type) {
                    term_type = type_val;
                }
            });
        }
        return (
            <tr key={key}>
                <td>{ stt++ }</td>
                <td>{ term.term_name }</td>
                <td>
                    { term_type }
                </td>
                <td>
                    { link_update_status }
                </td>
                <td>
                    <NavLink to={ link_edit } className="mar-5">
                        <small className="label bg-green"><i className="fa fa-edit"></i></small>
                    </NavLink>
                    <Button id="delete" bsSize="xsmall" bsStyle="link" onClick={ () => this.onDelete(term.term_id) }>
                        <small className="label bg-red"><i className="fa fa-trash-o"></i></small> 
                    </Button>
                </td>
                <td><input type="checkbox" className="flat-red" name={item_name} value={term.term_id} id={item_id} /></td>
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
                { this.loadTableBody(this.props.terms) }
            </table>
            { this.loadTableFoot() }
        </React.Fragment>
    )
  }
}

export default TermList;
