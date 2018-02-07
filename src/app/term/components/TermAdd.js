import React, { Component } from 'react'   ;

// LIB
import * as _ from 'lodash';
import { Form, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

// CONFIG
import { ARRAY_TERM_TYPE } from './../configs/term_type';

class TermAdd extends Component {

    constructor(props) {
        super(props);
        this.getTerms         = this.getTerms.bind(this);
        this.getTermType      = this.getTermType.bind(this);
    }

    getTerms(terms) {
        if( _.isEmpty(terms) === true ) return false;        
        return terms.map( (term, key) => {
            // LẤY DANH SÁCH TERM => KHÔNG LẤY THÔNG BÁO TRẢ VỀ KHI THÊM XÓA SỬA
            if(_.isEmpty(term.term_id) === false) {            
                return (
                    <option key={key} value={ term.term_id }>{ term.term_name }</option>
                );
            }
        });
    }

    getTermType() {
        if(_.isEmpty(ARRAY_TERM_TYPE)) return false;
    
        var result = [];
            
        result = ARRAY_TERM_TYPE.map( (type, key) => {
            return (
                <option key={key} value={ type.id }>{ type.name }</option>
            )
        });
        
        return result;
    }
    
    render() {
        let { handleSubmit, form, handleChangeEvent, terms }  = this.props;
    
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="box box-succcess">
                        <div className="box-header with-border">
                            <h3 className="box-title">Thêm danh mục</h3>
                        </div>
                        <Form horizontal>
                            <div className="box-body">
                                {/* TÊN DANH MỤC */}
                                <FormGroup controlId="term-name">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Tên danh mục
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" placeholder="Nhập tên danh mục..." value={form.term_name} onChange={handleChangeEvent} name="term_name"/>
                                    </Col>
                                </FormGroup>
                                
                                {/* MÔ TẢ */}
                                <FormGroup controlId="term-description">
                                    <Col componentClass={ControlLabel} sm={2}>Mô tả</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="textarea" bsClass="textarea" placeholder="Nhập mô tả..." value={form.term_description} onChange={handleChangeEvent} name="term_description" />
                                    </Col>
                                </FormGroup>

                                {/* LOẠI */}
                                <FormGroup controlId="term-type" >
                                    <Col componentClass={ControlLabel} sm={2}>Loại</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="select" name="term_type" value={form.term_type} onChange={handleChangeEvent} >
                                            {this.getTermType()}
                                        </FormControl>
                                    </Col>
                                </FormGroup>

                                {/* DANH MỤC CHA */}
                                <FormGroup controlId="term-parent" >
                                    <Col componentClass={ControlLabel} sm={2}>Danh mục cha</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="select" name="term_parent" value={form.term_parent} onChange={handleChangeEvent} >
                                            <option value={0}>--- Không ---</option>
                                            {this.getTerms(terms)}
                                        </FormControl>
                                    </Col>
                                </FormGroup>

                                {/* TRẠNG THÁI HIỂN THỊ */}
                                <FormGroup controlId="term-status" >
                                    <Col componentClass={ControlLabel} sm={2}>Trạng thái</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="select" name="term_status" value={form.term_status} onChange={handleChangeEvent} >
                                            <option value="publish">Hiển thị</option>
                                            <option value="unpublish">Tắt</option>
                                        </FormControl>
                                    </Col>
                                </FormGroup>        
                            </div>
                            <div className="box-footer">
                                <Button bsStyle="danger">Cancel</Button>
                                <Button bsStyle="success" bsClass="pull-right btn-success btn" onClick={handleSubmit}>Save</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>  
        );
    }
}

export default TermAdd;
