import React from 'react';

import AutocompleteContainer from './autocompleteContainer';

class Autocomplete extends React.Component {

  state = {
    value: '',
    active: false,
    selectedId: null,
  };

  requestTimer = null;

  onChange = (value, callback) => {
      this.setState({ value }, callback);
  };

  onSelect = (value, item) => this.setState({ value, selectedId: item.id });
  onFocus = () => this.setState({ active: true });
  onBlur = () => this.setState({ active: false });

  getInput = () =>
        this.state.active ? (<AutocompleteContainer
            value={ this.state.value }
            onChange={ this.onChange }
            onSelect={ this.onSelect }
            onBlur={ this.onBlur }
        />) : (<input
            onFocus={ this.onFocus }
            value={ this.state.value }
            onChange={() => {}}
        />);

  getId = () => this.state.selectedId && `(${this.state.selectedId})`;

  render() {
    return (<div>
        { this.getInput() } { this.getId() }
    </div>);
  }
}

export default Autocomplete;
