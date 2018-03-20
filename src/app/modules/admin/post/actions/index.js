import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../../helper/api';

/*======================================================================
| POST LIST 
| =======================================================================
*/
export const get_posts = posts => {
    return {
      type: TYPE.FETCH_POSTS,
      posts
    }
}

export const fetch_posts = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_posts(response.data.data));
        });
    }  
}

/*=======================================================================
| POST QUICK VIEW 
| =======================================================================
*/
// export const quick_view_terms = (posts) => {
//     return {
//         type : TYPE.FETCH_QUICK_VIEW_POST,
//         posts
//     }
// }

// export const fetch_quick_view_terms = () => {
//     return (dispatch) => {
//         return request_api('post/quickview').then(response => {
//             dispatch(quick_view_terms(response.data.data));
//         });
//     }  
// }

/*======================================================================
| POST ADD 
| =======================================================================
*/
// export const add_term = term_add => {
//     return {
//         type : TYPE.ADD_TERM,
//         term_add
//     }
// }

// export const add_term_request = (term) => {
//     return (dispatch) => {
//         return request_api('post/form', term).then(function(response) {
//             return dispatch(add_term(response.data)); 
//         });
//     }
// }

/*======================================================================
| POST DELETE 
| =======================================================================
*/
export const delete_post = post_delete => {
    return {
        type : TYPE.DELETE_POST,
        post_delete
    }
}

export const delete_post_request = (post_id) => {
    return (dispatch) => {
        return request_api(`post/trash/${post_id}`, null, 'delete').then(function(response) {
            dispatch(delete_post(response.data)); 
        });
    }
}

/*======================================================================
| POST DELETES 
| =======================================================================
*/
export const deletes_post = post_deletes => {
    return {
        type : TYPE.DELETES_POST,
        post_deletes
    }
}

export const deletes_post_request = (data) => {
    return (dispatch) => {
        return request_api(`post/deletes`, data).then(function(response) {
            dispatch(deletes_post(response.data)); 
        });
    }
}

/*======================================================================
| POST PUBLISH 
| =======================================================================
*/
export const publish_post = post_publish => {
    return {
        type : TYPE.PUBLISH_POST,
        post_publish
    }
}

export const publish_post_request = (post_id) => {
    return (dispatch) => {
        return request_api(`post/publish/${post_id}`, {}, 'put').then(function(response) {
            dispatch(publish_post(response.data)); 
        });
    }
}

/*======================================================================
| POST UNPUBLISH 
| =======================================================================
*/
export const unpublish_post = post_unpublish => {
    return {
        type : TYPE.UNPUBLISH_POST,
        post_unpublish
    }
}

export const unpublish_post_request = (post_id) => {
    return (dispatch) => {
        return request_api(`post/unpublish/${post_id}`, {}, 'put').then(function(response) {
            dispatch(unpublish_post(response.data)); 
        });
    }
}

/*======================================================================
| POST PUBLISHS 
| =======================================================================
*/
export const publishs_post = post_publishs => {
    return {
        type : TYPE.PUBLISHS_POST,
        post_publishs
    }
}

export const publishs_post_request = (data) => {
    return (dispatch) => {
        return request_api(`post/publishs`, data).then(function(response) {
            dispatch(publishs_post(response.data)); 
        });
    }
}

/*======================================================================
| POST UNPUBLISHS 
| =======================================================================
*/
export const unpublishs_post = post_unpublishs => {
    return {
        type : TYPE.UNPUBLISHS_POST,
        post_unpublishs
    }
}

export const unpublishs_post_request = (data) => {
    return (dispatch) => {
        return request_api(`post/unpublishs`, data).then(function(response) {
            dispatch(unpublishs_post(response.data)); 
        });
    }
}