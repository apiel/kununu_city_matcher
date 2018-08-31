import React from 'react';

import AutocompleteContainer from './autocompleteContainer';

class Autocomplete extends React.Component {

  state = {
    value: '',
    active: false,
  };

  requestTimer = null;

  onChange = (value, callback) => {
      this.setState({ value }, callback);
  };

  onSelect = (value) => this.setState({ value });
  onFocus = () => this.setState({ active: true });
  onBlur = () => this.setState({ active: false });

  render() {
    return this.state.active ? (<AutocompleteContainer 
            value={ this.state.value }
            onChange={ this.onChange }
            onSelect={ this.onSelect }
            onBlur={ this.onBlur }
        />) : (<input 
            onFocus={ this.onFocus }
            value={ this.state.value }
            onChange={() => {}}
            style={{background: '#eee'}}
        />);
  }
}

export default Autocomplete;
