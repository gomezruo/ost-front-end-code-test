import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './pageSection.scss';

class PageSection extends Component {
  constructor() {
    super();
  }

  render() {
    const {children, heading} = this.props;

    return (
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>{ heading }</h2>
        <div className={styles.sectionContent}>{ children }</div>
      </div>
    );
  }
};

PageSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export {PageSection};
