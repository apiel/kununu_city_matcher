import axios from 'axios';

import { api } from '../config';

export const CITIES_REQUEST = 'CITIES_REQUEST';
export const CITIES_FAILED = 'CITIES_FAILED';
export const CITIES_SUCCESS = 'CITIES_SUCCESS';

export const initialState = {
  fetching: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CITIES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CITIES_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    case CITIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };

    default:
      return state
  }
}

export const getCities = () => async (dispatch) => {
  try {
    dispatch({ type: CITIES_REQUEST });
    const { data } = await axios.get(api.cities);
    dispatch({ type: CITIES_SUCCESS, data });
  } catch (err) {
    const error = err.message || 'unknown error';
    dispatch({ type: CITIES_FAILED, error });
  }
};
