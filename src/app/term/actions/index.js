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

export const fetch_terms = () => {
    return (dispatch) => {
        return request_api('term/index').then(response => {
            dispatch(get_terms(response.data.data));
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
            dispatch(add_term(response.data)); 
        });
    }
}

