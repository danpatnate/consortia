import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/ActionTypes';

export const getUsers = () => {
  return function(dispatch) {
    dispatch({
      type: GET_USERS_REQUEST
    });
    return fetch('http://localhost:3001/users')
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: GET_USERS_FAILURE,
            error: body.error
          });
        } else {
          return {
            type: GET_USERS_SUCCESS,
            payload: body
          };
        }
      });
  }
}
