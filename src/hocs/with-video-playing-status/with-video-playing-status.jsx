import React, {PureComponent} from 'react';

const withVideoPlayingStatus = (Component) => {
  class WithVideoPlayingStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVideoPlaying: false
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      this.setState({
        isVideoPlaying: true
      });
    }

    _handleMouseLeave() {
      this.setState({
        isVideoPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }

  return WithVideoPlayingStatus;
};

export default withVideoPlayingStatus;
