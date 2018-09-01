import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import Row from './row';
import '../../index.css';
import store from '../../store';

storiesOf('Row', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <Row id="123" name="Vienna" />
  ));
