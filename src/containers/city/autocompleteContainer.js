import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { getAutocomplete } from '../../modules/autocomplete';

class AutocompleteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    this.myRef.current.focus();
    this.getAutocomplete();
  }

  requestTimer = null;

  getAutocomplete = () => {
    clearTimeout(this.requestTimer);
    if (this.props.value) {
        this.requestTimer = setTimeout(
            () => this.props.getAutocomplete(this.props.value),
            500
        );
    }
  }

  onChange = (e, value) => {
      this.props.onChange(value, this.getAutocomplete);
  };

  getItemValue = (item) => item.name;
  getItems = () => this.props.value ? this.props.items : [];

  render() {
    const { value, onSelect, onBlur } = this.props;  
    return (
        <ReactAutocomplete
            getItemValue={this.getItemValue}
            items={ this.getItems() }
            ref={this.myRef}
            renderItem={(item, isHighlighted) =>
                <div key={item.id} className={ classNames(isHighlighted && 'highlighted') }>
                    { item.name }
                </div>
            }
            value={ value }
            onChange={ this.onChange }
            onSelect={ onSelect }
            inputProps={{ onBlur }}
        />
    );
  }
}

const mapStateToProps = ({ autocomplete }) => ({
    items: autocomplete.data,
});

export default connect(
    mapStateToProps,
    {
        getAutocomplete,
    },
)(AutocompleteContainer);
