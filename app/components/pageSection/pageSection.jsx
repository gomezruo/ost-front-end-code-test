import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './pageSection.scss';

class PageSection extends Component {
  constructor() {
    super();
  }

  render() {
    const {children, heading} = this.props;

    return (
      <div className="page-section">
        <h2 className="page-section__heading">{ heading }</h2>
        <div className="page-section__content">{ children }</div>
      </div>
    );
  }
};

PageSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export {PageSection};
