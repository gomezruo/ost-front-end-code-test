import React from 'react';
import { render } from 'react-dom';

import styles from './index.scss';

import './index.global.scss';

render(
  <div className={styles['example-class']}>
    Ostmodern Front-end Code Test
  </div>,
  document.getElementById('root')
);
