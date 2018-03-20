import React, { Component } from 'react';

// CONFIG
import { TERM_TYPE } from './../configs/post_type';

// LIB
import * as _ from 'lodash';
import { Form, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class PostFormFilter extends Component {

  constructor(props) {
    super(props);
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
                  <option value="publish">Hiển thị</option>
                  <option value="unpublish">Ẩn</option>
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

export default PostFormFilter;
