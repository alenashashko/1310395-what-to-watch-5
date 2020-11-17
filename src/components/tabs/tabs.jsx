import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {TabTypes, tabs} from '../../const';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

const Tabs = (props) => {
  const {activeTab, onTabClick, movie, reviews} = props;
  // id фильма

  const getComponentByTab = (tab) => {
    switch (tab) {
      case TabTypes.DETAILS:
        return <MovieDetails movie={movie} />;
      case TabTypes.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview movie={movie} />;
    }
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab) =>
            <li
              key={tab}
              className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabClick(tab);
                }}>
                {tab}
              </a>
            </li>)}
        </ul>
      </nav>
      {getComponentByTab(activeTab)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  movie: proptypes.movie,
  reviews: proptypes.reviews
};

export default withActiveTab(Tabs);

