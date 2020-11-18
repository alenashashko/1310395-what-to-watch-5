import React, {PureComponent} from 'react';

const withVideoPlayingStatus = (Component) => {
  class WithVideoPlayingStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVideoPlaying: false
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this.setState({
        isVideoPlaying: true
      });
    }

    handleMouseLeave() {
      this.setState({
        isVideoPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  return WithVideoPlayingStatus;
};

export default withVideoPlayingStatus;
