import React, {PureComponent} from 'react';
import {tabNames} from '../../const';

class Tabs extends PureComponent {
  constructor(props) { // ?
    super(props);

    this.state = {
      activeTab: tabNames[0]
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(tabName) {
    this.setState({
      activeTab: tabName
    });
  }

  render() {
    const {activeTab} = this.state;

    return (
      <ul className="movie-nav__list">
        {tabNames.map((tabName) =>
          <li
            key={tabName}
            className={`movie-nav__item ${activeTab === tabName ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link"
              onClick={() => this._handleTabClick(tabName)}>
              {tabName}
            </a>
          </li>)}
      </ul>
    );
  }
}

export default Tabs;

