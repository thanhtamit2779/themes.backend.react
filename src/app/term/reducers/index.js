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

        case TYPE.PUBLISH_TERM:
            console.log(action.term_unpublish);
            return Object.assign({}, state, {
                notification: action.term_publish,
                items       : [],
            });
            
        case TYPE.UNPUBLISH_TERM:
            console.log(action.term_unpublish);
            return Object.assign({}, state, {
                notification: action.term_unpublish,
                items       : [],
            }); 
      default:
        return state;
    }
}

export default term_index;