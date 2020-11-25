import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {TabType, TAB_NAMES} from '../../const';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

const Tabs = (props) => {
  const {activeTab, onTabClick, movie} = props;
  // id фильма

  const getComponentByTab = (tabName) => {
    switch (tabName) {
      case TabType.DETAILS:
        return <MovieDetails movie={movie} />;
      case TabType.REVIEWS:
        return <MovieReviews />;
      default:
        return <MovieOverview movie={movie} />;
    }
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TAB_NAMES.map((tab) =>
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
  movie: proptypes.movie
};

export {Tabs};
export default withActiveTab(Tabs);

