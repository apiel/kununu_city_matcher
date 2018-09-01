import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import Autocomplete from './autocomplete';
import '../../index.css';
import store from '../../store';

storiesOf('Autocomplete', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <Autocomplete />
  ));
