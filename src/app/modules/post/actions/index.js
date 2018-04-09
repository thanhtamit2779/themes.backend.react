import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

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

/*======================================================================
| POST FEATURED ON 
| =======================================================================
*/
export const featured_on_post = post_featured_on => {
    return {
        type : TYPE.FEATURED_ON_POST,
        post_featured_on
    }
}

export const featured_on_post_request = (post_id) => {
    return (dispatch) => {
        return request_api(`post/featured_on/${post_id}`, {}, 'put').then(function(response) {
            dispatch(featured_on_post(response.data)); 
        });
    }
}

/*======================================================================
| POST FEATURED OFF
| =======================================================================
*/
export const featured_off_post = post_featured_off => {
    return {
        type : TYPE.FEATURED_OFF_POST,
        post_featured_off
    }
}

export const featured_off_post_request = (post_id) => {
    return (dispatch) => {
        return request_api(`post/featured_off/${post_id}`, {}, 'put').then(function(response) {
            dispatch(featured_off_post(response.data)); 
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