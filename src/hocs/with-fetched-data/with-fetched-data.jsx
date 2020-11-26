import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const generateWithFetchedData = (getCanBeRendered, fetchData) => (Component) => {
  class WithFetchedData extends React.Component {
    componentDidMount() {
      if (fetchData) {
        fetchData(this.props);
      }
    }

    render() {
      const {canBeRendered} = this.props;

      return canBeRendered ? (
        <Component {...this.props} />
      ) : null;
    }
  }

  WithFetchedData.propTypes = {
    canBeRendered: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state, props) => ({
    canBeRendered: getCanBeRendered(state, props)
  });

  return connect(mapStateToProps)(WithFetchedData);
};
