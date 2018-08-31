import React from 'react';
import { connect } from 'react-redux';

import Row from './row';

const City = ({ cities, fetching }) => (
  <div>
    <h1>City</h1>
    <div>
      { fetching ? 'Loading...' : cities.map(city => (<Row {...city} key={ city.id } />)) }
    </div>
  </div>
);

const mapStateToProps = ({ cities }) => ({
  cities: cities.data,
  fetching: cities.fetching,
  // need to handle error
});

export default connect(
  mapStateToProps,
  {}
)(City);
