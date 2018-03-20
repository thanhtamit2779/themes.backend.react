import * as TYPE from './../contants/action_type';

const post_index = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_POSTS:
            return Object.assign({}, state, {
                items          : action.posts,
                notification   : {}
            });
      
        case TYPE.DELETE_POST:
            return Object.assign({}, state, {
                notification: action.post_delete,
                items       : [],
            });

        case TYPE.DELETES_POST:
            return Object.assign({}, state, {
                notification: action.post_deletes,
                items       : [],
            });    

        case TYPE.PUBLISH_POST:
            return Object.assign({}, state, {
                notification: action.post_publish,
                items       : [],
            });
            
        case TYPE.UNPUBLISH_POST:
            return Object.assign({}, state, {
                notification: action.post_unpublish,
                items       : [],
            }); 

        case TYPE.PUBLISHS_POST:
            return Object.assign({}, state, {
                notification: action.post_publishs,
                items       : [],
            });
            
        case TYPE.UNPUBLISHS_POST:
            return Object.assign({}, state, {
                notification: action.post_unpublishs,
                items       : [],
            });     
      default:
        return state;
    }
}

export default post_index;