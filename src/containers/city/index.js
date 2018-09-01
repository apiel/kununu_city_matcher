import React from 'react';
import { connect } from 'react-redux';

import Row from './row';

const City = ({ cities, fetching, error }) => (
  <div>
    <h1>City</h1>
    { error && <div className='error'>
      <b>Something terrible happen:</b> {error}
    </div> }
    <div>
      { fetching ? 'Loading...' : cities.map(city => (<Row {...city} key={ city.id } />)) }
    </div>
  </div>
);

const mapStateToProps = ({ cities, autocomplete }) => ({
  cities: cities.data,
  fetching: cities.fetching,
  error: cities.error,
});

export default connect(
  mapStateToProps,
  {}
)(City);
