import React from 'react';
import { render } from 'react-dom';

import {PageSection} from './components/pageSection/pageSection';
import {Season} from './components/season/season';

import './index.scss';

render(
  <PageSection heading="Season">
    <Season seasonKey="seas_e85496eb48df4225b9d9f3fde1010398" />
  </PageSection>,
  document.getElementById('root')
);
