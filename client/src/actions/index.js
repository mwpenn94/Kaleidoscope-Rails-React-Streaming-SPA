import scopes from '../apis/scopes';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SCOPE,
  FETCH_SCOPES,
  FETCH_SCOPE,
  DELETE_SCOPE,
  EDIT_SCOPE
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createScope = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await scopes.post('/scopes', { ...formValues, userId });

  dispatch({ type: CREATE_SCOPE, payload: response.data });
  history.push('/');
};

export const fetchScopes = () => async dispatch => {
  const response = await scopes.get('/scopes');

  dispatch({ type: FETCH_SCOPES, payload: response.data });
};

export const fetchScope = id => async dispatch => {
  const response = await scopes.get(`/scopes/${id}`);

  dispatch({ type: FETCH_SCOPE, payload: response.data });
};

export const editScope = (id, formValues) => async dispatch => {
  const response = await scopes.patch(`/scopes/${id}`, formValues);

  dispatch({ type: EDIT_SCOPE, payload: response.data });
  history.push('/');
};

export const deleteScope = id => async dispatch => {
  await scopes.delete(`/scopes/${id}`);

  dispatch({ type: DELETE_SCOPE, payload: id });
  history.push('/');
};