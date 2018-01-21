import * as TYPE from './../contants/action_type';
import * as _ from 'lodash';

const terms = (state = [], action) => {
    switch (action.type) {
      case TYPE.FETCH_TERMS:
        return _.assign({ 'index': action.terms }, state);
      
      case TYPE.FETCH_QUICK_VIEW_TERM:
        return _.assign({ 'quick_terms': action.terms }, state);

      case TYPE.ADD_TERM:
        let term = action.term_add.data
        let quick_terms = state.quick_terms;
        quick_terms.push(term);
        return _.assign({ 'notification': action.term_add }, state);
        
      case TYPE.DELETE_TERM:
        return _.assign({ 'notification': action.term_delete }, state);
        
      default:
        return state;
    }
}

export default terms;