import { combineReducers } from 'redux';
import counter from './counter';
import cities from './cities';
import autocomplete from './autocomplete';

export default combineReducers({
  counter,
  cities,
  autocomplete,
});
