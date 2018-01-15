import React, { Component } from 'react';

// CONFIG
import { TERM_TYPE } from './../configs/term_type';

// LIB
import * as _ from 'lodash';

class TermFormFilter extends Component {

  term_type = () => {
    let term_type    = '';

    if(_.isEmpty(TERM_TYPE) === false) {
      term_type = _.forIn(TERM_TYPE, function(type_val, type_key) {
        return (<option value={type_key}>{type_val}</option>);
      });
    }
    
    return (
      <React.Fragment>
          { term_type }
      </React.Fragment>
    );
  }

  render() {
    return (
      <form className="form-filter">
          {/* TEXT SEARCH */}
          <div className="col-sm-4 col-md-4 col-lg-4 col-xs-12">
              <div className="form-group">
                  <div className="form-line">
                      <input type="text" className="form-control text-search" id="text-search" placeholder="Nhập tên danh mục..." />
                  </div>
              </div>    
          </div>

          {/* TYPE */}
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-12">
            <div className="form-group">
              <div className="form-line">
                <select className="form-control show-tick" id="term-status" name="term_status">
                  <option value="">--- Tình trạng ---</option>
                  <option value="">Publish</option>
                  <option value="">Unpublish</option>
                </select>
              </div>
            </div> 
          </div>

          {/* STATUS */}
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-12">
            <div className="form-group">
              <div className="form-line">
                <select className="form-control show-tick" id="term-type" name="term_type">
                  <option value="">--- Kiểu ---</option>
                  <option value="theme_cat">Theme</option>
                  <option value="news_cat">News</option>
                </select>
              </div>
            </div>
          </div>

          {/* BUTTON SEARCH */}
          <div className="col-sm-2 col-md-2 col-lg-2 col-xs-12 text-right">
            <button type="button" className="btn bg-olive btn-flat" id="search">
                <i className="fa fa-search"></i>
                <span> TÌM KIẾM </span>
            </button>
          </div>
      </form> 
    )
  }
}

export default TermFormFilter;
