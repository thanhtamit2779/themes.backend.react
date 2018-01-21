import React, { Component } from 'react';

import { NavLink } from 'react-router-dom' ;

import { Button } from 'react-bootstrap';

class TermTool extends Component {
    render() {
        return ( 
            <div className="box-tools">
                <div className="col-sm-12 text-right">
                    { /* THÊM */ }                   
                    <NavLink to='/term/add' className="btn btn-primary btn-flat" id="add">
                        <i className="fa fa-plus"></i><span> THÊM </span>
                    </NavLink>
                    
                    { /* XÓA */ }
                    <Button bsClass="btn bg-maroon btn-flat" id="delete" ><i className="fa fa-trash-o"></i><span> XÓA </span></Button> 

                    { /* CẬP NHẬT */ } 
                    <Button bsClass="btn bg-olive btn-flat" id="update" >
                        <i className="fa fa-check"></i><span > CẬP NHẬT </span> 
                    </Button>
                </div>
            </div>
        )
    }
}

export default TermTool;