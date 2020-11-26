import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {TabType, TAB_NAMES} from '../../const';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

class Tabs extends PureComponent {
  _getComponentByTab(tabName) {
    const {movie} = this.props;
    const {id} = this.props.movie;

    switch (tabName) {
      case TabType.DETAILS:
        return <MovieDetails movie={movie} />;
      case TabType.REVIEWS:
        return <MovieReviews id={id}/>;
      default:
        return <MovieOverview movie={movie} />;
    }
  }

  render() {
    const {activeTab, onTabClick} = this.props;

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

        {this._getComponentByTab(activeTab)}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  movie: proptypes.movie
};

export {Tabs};
export default withActiveTab(Tabs);

