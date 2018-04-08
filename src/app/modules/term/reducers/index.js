import * as TYPE from './../contants/action_type';

const term_index = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_TERMS:
            return Object.assign({}, state, {
                items          : action.terms,
                notification   : {}
            });
      
        case TYPE.DELETE_TERM:
            return Object.assign({}, state, {
                notification: action.term_delete,
                items       : [],
            });

        case TYPE.DELETES_TERM:
            return Object.assign({}, state, {
                notification: action.term_deletes,
                items       : [],
            });    

        case TYPE.PUBLISH_TERM:
            return Object.assign({}, state, {
                notification: action.term_publish,
                items       : [],
            });
            
        case TYPE.UNPUBLISH_TERM:
            return Object.assign({}, state, {
                notification: action.term_unpublish,
                items       : [],
            }); 

        case TYPE.PUBLISHS_TERM:
            return Object.assign({}, state, {
                notification: action.term_publishs,
                items       : [],
            });
            
        case TYPE.UNPUBLISHS_TERM:
            return Object.assign({}, state, {
                notification: action.term_unpublishs,
                items       : [],
            });     
      default:
        return state;
    }
}

export default term_index;