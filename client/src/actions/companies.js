import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILURE,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAILURE,
  UPDATE_COMPANY_REQUEST,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAILURE,
} from '../constants/ActionTypes';
import { getRandomIntInclusive } from '../utils/helpers';

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getCompaniesRequest = () => ({
  type: GET_COMPANIES_REQUEST
});

export const getCompaniesSuccess = companies => ({
  type: GET_COMPANIES_SUCCESS,
  payload: { companies }
});

export const getCompaniesFailure = error => ({
  type: GET_COMPANIES_FAILURE,
  payload: { error }
});

export const getCompanies = () => {
  return dispatch => {
    dispatch(getCompaniesRequest());
    return fetch('http://localhost:3001/companiesdata')
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(getCompaniesSuccess(data));
        return data;
      })
      .catch(error => dispatch(getCompaniesFailure(error)));
  };
}

export const deleteCompany = id => {
  return {
      type: DELETE_COMPANY_REQUEST,
      id: id
  }
}

export const addCompanyRequest = company => ({
  type: ADD_COMPANY_REQUEST
});

export const addCompanySuccess = company => ({
  type: ADD_COMPANY_SUCCESS,
  payload: { company }
});

export const addCompanyFailure = error => ({
  type: ADD_COMPANY_FAILURE,
  payload: { error }
});

export const addCompany = data => {
  return function(dispatch) {
    const uniqueDataEntry = Object.assign({}, data, { key: getRandomIntInclusive(1, 100), status: 'Pending approval' })
    dispatch({
      type: ADD_COMPANY_REQUEST
    });
    return fetch('http://localhost:3001/companiesdata', {
        method: 'POST',
        body: JSON.stringify(uniqueDataEntry),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: ADD_COMPANY_FAILURE,
            error: body.error
          });
        } else {
          dispatch({
            type: ADD_COMPANY_SUCCESS,
            payload: body
          });
        }
      });
  }
}

export const updateCompanyRequest = company => ({
  type: UPDATE_COMPANY_REQUEST
});

export const updateCompanySuccess = company => ({
  type: UPDATE_COMPANY_SUCCESS,
  payload: { company }
});

export const updateCompanyFailure = error => ({
  type: UPDATE_COMPANY_FAILURE,
  payload: { error }
});

export const updateCompany = data => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_COMPANY_REQUEST
    });
    return fetch(`http://localhost:3001/companiesdata`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: UPDATE_COMPANY_FAILURE,
            error: body.error
          });
        } else {
          dispatch({
            type: UPDATE_COMPANY_SUCCESS,
            payload: body
          });
        }
      });
  }
}
