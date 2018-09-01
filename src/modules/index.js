import { combineReducers } from 'redux';
import cities from './cities';
import autocomplete from './autocomplete';

export default combineReducers({
  cities,
  autocomplete,
});
