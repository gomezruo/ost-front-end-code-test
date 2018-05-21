import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getEpisode} from '../../utils/contents';

import styles from './episode.scss';

class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image: '',
      year: '',
    };

    this.getEpisodeInfo(this.props.url);
  }

  getEpisodeInfo(url) {
    getEpisode(url).then(response => {
      if (!response) return;

      this.setState({
        title: response.title,
        image: response.image_urls[0],
        year: response.year,
      });
    });
  }

  render() {
    const {title} = this.state;

    return (
      <div className={styles.episode}>
        <h4 className={styles.episodeTitle}>{title}</h4>
      </div>
    );
  }
};

Episode.propTypes = {
  url: PropTypes.string.isRequired,
};

export {Episode};
