import * as TYPE from './../contants/action_type';

const terms = (state = [], action) => {
    switch (action.type) {
      case TYPE.FETCH_TERMS:
        return action.terms;
      case TYPE.ADD_TERM:
        state.push(action.term_add);
        return [...state];
      default:
        return state;
    }
}

export default terms;