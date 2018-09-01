import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import { City } from './index';
import '../../index.css';
import store from '../../store';

storiesOf('City', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <City cities={[
      { id: 123, name: 'Vienna' },
      { id: 456, name: 'Bordeaux' },
    ]} />
  )).add('fetching', () => (
    <City cities={[]} fetching={true} />
  )).add('error', () => (
    <City cities={[]} error="Oh my god!" />
  ));
