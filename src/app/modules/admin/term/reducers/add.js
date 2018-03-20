import * as TYPE from './../contants/action_type';

const term_add = (state = {
  items           : [],
  notification    : {}
}, action) => {
    switch (action.type) {
      case TYPE.FETCH_QUICK_VIEW_TERM:
        return Object.assign({}, state, {
          items: action.terms
        });

      case TYPE.ADD_TERM:
        return Object.assign({}, state, {
          notification: action.term_add
        });
      
      default:
        return state;
    }
}

export default term_add;