import _ from 'lodash';
import {
  FETCH_SCOPE,
  FETCH_SCOPES,
  CREATE_SCOPE,
  EDIT_SCOPE,
  DELETE_SCOPE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SCOPES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_SCOPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SCOPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SCOPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SCOPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};