import axios from 'axios';

import { api } from '../config';

export const AUTOCOMPLETE_REQUEST = 'AUTOCOMPLETE_REQUEST';
export const AUTOCOMPLETE_FAILED = 'AUTOCOMPLETE_FAILED';
export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';

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

    default:
      return state
  }
}

export const getAutocomplete = (query) => async (dispatch) => {
  try {
    dispatch({ type: AUTOCOMPLETE_REQUEST });
    const { data } = await axios.get(`${api.autocomplete}${query}`);
    dispatch({ type: AUTOCOMPLETE_SUCCESS, data });
  } catch (error) {
    dispatch({ type: AUTOCOMPLETE_FAILED, error });
  }
};
