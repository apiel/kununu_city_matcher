import axios from 'axios';
import escapeStringRegexp from 'escape-string-regexp';

import { api } from '../config';

export const AUTOCOMPLETE_REQUEST = 'AUTOCOMPLETE_REQUEST';
export const AUTOCOMPLETE_FAILED = 'AUTOCOMPLETE_FAILED';
export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';
export const AUTOCOMPLETE_RESET = 'AUTOCOMPLETE_RESET';

const initialState = {
  fetching: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTOCOMPLETE_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case AUTOCOMPLETE_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    case AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };

    case AUTOCOMPLETE_RESET:
      return {
        ...initialState
      };

    default:
      return state
  }
}

export const resetAutocomplete = () => (dispatch) => {
  dispatch({ type: AUTOCOMPLETE_RESET });
}

export const getAutocomplete = (query) => async (dispatch) => {
  try {
    dispatch({ type: AUTOCOMPLETE_REQUEST });
    const escapedQuery = escapeStringRegexp(query);
    const { data } = await axios.get(`${api.autocomplete}${escapedQuery}`);
    dispatch({ type: AUTOCOMPLETE_SUCCESS, data });
  } catch (error) {
    dispatch({ type: AUTOCOMPLETE_FAILED, error });
  }
};
