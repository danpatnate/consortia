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

const initialState = {
  companies: JSON.parse(localStorage.getItem('companies')) || [],
  loading: false,
  error: null
};

export default function companyReducer(state = initialState, action){
 switch (action.type) {
  case GET_COMPANIES_REQUEST:
   return {
     ...state,
     loading: true,
     error: null
   };
  case GET_COMPANIES_SUCCESS:
   return {
     ...state,
     loading: false,
     companies: action.payload.companies
   };
  case GET_COMPANIES_FAILURE:
   return {
     ...state,
     loading: false,
     error: action.payload.error,
     companies: []
   };
  case ADD_COMPANY_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    };
  case ADD_COMPANY_SUCCESS:
    return {
      ...state,
      companies: [...state.companies, action.payload]
    };
  case ADD_COMPANY_FAILURE:
    return action.payload;
  // delete company
  case DELETE_COMPANY_REQUEST:
    const companies = state.companies.filter(({ key }) => key !== action.id);
    return {
      ...state,
      companies: companies
    };
  case UPDATE_COMPANY_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    };
  case UPDATE_COMPANY_SUCCESS:
    const updatedData = state.companies.map( (company) => {
      if(company.key !== action.payload.key) {
        return company;
      }

      return { ...action.payload };
    });
    debugger;
    return {
      ...state,
      companies: updatedData
    };
  case UPDATE_COMPANY_FAILURE:
    return action.payload;
  default:
   return state
 }
}
