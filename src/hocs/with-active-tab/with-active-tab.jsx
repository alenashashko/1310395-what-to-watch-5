import React, {PureComponent} from 'react';

import {TabTypes} from '../../const';

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabTypes.OVERVIEW
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabClick={this.handleTabClick}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
