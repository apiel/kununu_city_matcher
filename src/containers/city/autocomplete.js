import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { getAutocomplete } from '../../modules/autocomplete';

class Autocomplete extends React.Component {

  state = {
    value: '',
  };

  requestTimer = null;

  onChange = (e, value) => {
      this.setState({ value }, () => {
        clearTimeout(this.requestTimer)
        this.requestTimer = setTimeout(() => this.props.getAutocomplete(value), 500);
      });
  };

  onSelect = (value) => this.setState({ value });
  getItemValue = (item) => item.name;

  render() {
    const { items } = this.props;  
    return (
        <ReactAutocomplete
            getItemValue={this.getItemValue}
            items={ items }
            renderItem={(item, isHighlighted) =>
                <div key={item.id} className={ classNames(isHighlighted && 'highlighted') }>
                    { item.name }
                </div>
            }
            value={this.state.value}
            onChange={ this.onChange }
            onSelect={ this.onSelect }  
        />
    );
  }
}

const mapStateToProps = ({ autocomplete }) => ({
    items: autocomplete.data,
  });
  
  export default connect(
    mapStateToProps,
    { getAutocomplete }
  )(Autocomplete);
