import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

/*======================================================================
| TERM LIST 
| =======================================================================
*/
export const get_terms = terms => {
    return {
      type: TYPE.FETCH_TERMS,
      terms
    }
}

export const fetch_terms = (data) => {
    return (dispatch) => {
        return request_api('term/index', data).then(response => {
            dispatch(get_terms(response.data.data));
        });
    }  
}

/*=======================================================================
| TERM QUICK VIEW 
| =======================================================================
*/
export const quick_view_terms = (terms) => {
    return {
        type : TYPE.FETCH_QUICK_VIEW_TERM,
        terms
    }
}

export const fetch_quick_view_terms = () => {
    return (dispatch) => {
        return request_api('term/quickview').then(response => {
            dispatch(quick_view_terms(response.data.data));
        });
    }  
}

/*======================================================================
| TERM ADD 
| =======================================================================
*/
export const add_term = term_add => {
    return {
        type : TYPE.ADD_TERM,
        term_add
    }
}

export const add_term_request = (term) => {
    return (dispatch) => {
        return request_api('term/form', term).then(function(response) {
            return dispatch(add_term(response.data)); 
        });
    }
}

/*======================================================================
| TERM DELETE 
| =======================================================================
*/
export const delete_term = term_delete => {
    return {
        type : TYPE.DELETE_TERM,
        term_delete
    }
}

export const delete_term_request = (term_id) => {
    return (dispatch) => {
        return request_api(`term/trash/${term_id}`, null, 'delete').then(function(response) {
            dispatch(delete_term(response.data)); 
        });
    }
}

/*======================================================================
| TERM PUBLISH 
| =======================================================================
*/
export const publish_term = term_publish => {
    return {
        type : TYPE.PUBLISH_TERM,
        term_publish
    }
}

export const publish_term_request = (term_id) => {
    return (dispatch) => {
        return request_api(`term/publish/${term_id}`, null, 'put').then(function(response) {
            dispatch(publish_term(response.data)); 
        });
    }
}

/*======================================================================
| TERM UNPUBLISH 
| =======================================================================
*/
export const unpublish_term = term_unpublish => {
    return {
        type : TYPE.UNPUBLISH_TERM,
        term_unpublish
    }
}

export const unpublish_term_request = (term_id) => {
    return (dispatch) => {
        return request_api(`term/unpublish/${term_id}`, null, 'put').then(function(response) {
            dispatch(unpublish_term(response.data)); 
        });
    }
}