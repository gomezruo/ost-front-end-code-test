import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getSeason} from '../../utils/contents';

import {Episode} from '../episode/episode';

import './season.scss';

class Season extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image: '',
      episodes: [],
    };

    this.getSeasonInfo(this.props.seasonKey);
  }

  getSeasonInfo(seasonKey) {
    getSeason(seasonKey).then(response => {
      if (response) return response.json();
    })
    .then(body => {
      this.setState({
        title: body.title,
        image: body.image_urls[0],
        year: body.year,
        episodes: body.items,
      });
    });
  }

  render() {
    const {title, image, year, episodes} = this.state;

    return (
      <div className="season">
        <h3 className="season__title">{title} <span>{year}</span></h3>
        { episodes.map((item, i) => <Episode url={item} key={i} />) }
      </div>
    );
  }
};

Season.propTypes = {
  seasonKey: PropTypes.string.isRequired,
};

export {Season};
