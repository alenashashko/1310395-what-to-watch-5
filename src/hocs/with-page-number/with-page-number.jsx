import React, {PureComponent} from 'react';

const withPageNumber = (Component) => {
  class WithPageNumber extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        pageNumber: 1
      };

      this._handleButtonClick = this._handleButtonClick.bind(this);
    }

    _handleButtonClick() {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber + 1
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          pageNumber={this.state.pageNumber}
          onButtonClick={this._handleButtonClick}
        />
      );
    }
  }

  return WithPageNumber;
};

export default withPageNumber;
