import React, { Component } from 'react';

// CONFIG
import { post_TYPE } from './../configs/post_type';

// LIB
import * as _ from 'lodash';
import { Form, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class PostFormFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { handleSubmit, form, handleChangeEvent, posts }  = this.props;

    return (
      <Form>
          {/* TEXT SEARCH */}
          <Col sm={4} xs={12} md={4}>
              <FormGroup> 
                  <div className="form-line">
                      <input type="text" className="form-control text-search" id="post-title" placeholder="Nhập tên sản phẩm..." name="post_title" value={form.post_title} onChange={handleChangeEvent} />
                  </div>
              </FormGroup>    
          </Col>

          {/* STATUS */}
          <Col sm={3} xs={12} md={3}>
            <FormGroup>
              <div className="form-line">
                <FormControl componentClass="select" id="post-status" name="post_status" value={form.post_status} onChange={handleChangeEvent} bsClass="form-control show-tick">
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
                <FormControl componentClass="select" id="post-type" name="post_type" value={form.post_type} onChange={handleChangeEvent} bsClass="form-control show-tick">
                  <option value="">--- Kiểu ---</option>
                  <option value="theme_post">Theme</option>
                  {/*<option value="news_cat">News</option>*/}
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
