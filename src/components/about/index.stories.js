import React from 'react';
import { storiesOf } from '@storybook/react';

import About from './index';

storiesOf('About', module)
  .add('default', () => (
    <About />
  ));
