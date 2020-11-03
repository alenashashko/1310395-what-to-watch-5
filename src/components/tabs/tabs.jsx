import React, {PureComponent} from 'react';
import {tabs} from '../../const';

class Tabs extends PureComponent {
  constructor(props) { // ?
    super(props);

    this.state = {
      activeTab: tabs[0]
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {activeTab} = this.state;

    return (
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
    );
  }
}

export default Tabs;

