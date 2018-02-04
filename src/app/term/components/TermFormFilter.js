import React, { Component } from 'react';

// CONFIG
import { TERM_TYPE } from './../configs/term_type';

// LIB
import * as _ from 'lodash';
import { Form, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
    let { handleSubmit, form, handleChangeEvent, terms }  = this.props;

    return (
      <Form>
          {/* TEXT SEARCH */}
          <Col sm={4} xs={12} md={4}>
              <FormGroup> 
                  <div className="form-line">
                      <input type="text" className="form-control text-search" id="term-name" placeholder="Nhập tên danh mục..." name="term_name" value={form.term_name} onChange={handleChangeEvent} />
                  </div>
              </FormGroup>    
          </Col>

          {/* TYPE */}
          <Col sm={3} xs={12} md={3}>
            <FormGroup>
              <div className="form-line">
                <FormControl componentClass="select" id="term-status" name="term_status" value={form.term_status} onChange={handleChangeEvent} bsClass="form-control show-tick">
                  <option value="">--- Tình trạng ---</option>
                  <option value="publish">Publish</option>
                  <option value="unpulish">Unpublish</option>
                </FormControl>
              </div>
            </FormGroup> 
          </Col>

          {/* STATUS */}
          <Col sm={3} xs={12} md={3}>
            <FormGroup>
              <div className="form-line">
                <FormControl componentClass="select" id="term-type" name="term_type" value={form.term_type} onChange={handleChangeEvent} bsClass="form-control show-tick">
                  <option value="">--- Kiểu ---</option>
                  <option value="theme_cat">Theme</option>
                  <option value="news_cat">News</option>
                </FormControl>
              </div>
            </FormGroup>
          </Col>

          {/* BUTTON SEARCH */}
          <Col sm={2} xs={12} md={2} bsClass="text-right">
            <button type="button" className="btn bg-olive btn-flat" id="search" onClick={handleSubmit}>
                <i className="fa fa-search"></i>
                <span> TÌM KIẾM </span>
            </button>
          </Col>
      </Form> 
    )
  }
}

export default TermFormFilter;
