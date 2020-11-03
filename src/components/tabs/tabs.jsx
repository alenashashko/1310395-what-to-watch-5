import React, {PureComponent} from 'react';

import proptypes from '../../type';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {TabTypes} from '../../const';
import {tabs} from '../../const';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabTypes.REVIEWS
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _getComponentByTab(tab) {
    const {movie, reviews} = this.props;
    // id фильма

    switch (tab) {
      case TabTypes.DETAILS:
        return <MovieDetails movie={movie} />;
      case TabTypes.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview movie={movie} />;
    }
  }

  _handleTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {activeTab} = this.state;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) =>
              <li
                key={tab}
                className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}>
                <a href="#" className="movie-nav__link"
                  onClick={() => this._handleTabClick(tab)}>
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
  movie: proptypes.movie,
  reviews: proptypes.reviews
};

export default Tabs;

// перерендер скачок
// содержимое вкладок хранится в табахБ а не в компоненте страницы

