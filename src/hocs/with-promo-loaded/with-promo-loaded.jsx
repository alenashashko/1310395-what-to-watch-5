import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {fetchPromoMovie} from '../../store/api-actions';
import {getMovie} from '../../store/selectors';

const withPromoLoaded = (Component) => {
  class WithPromoLoaded extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        wasPromoLoaded: false
      };
    }

    componentDidMount() {
      this.props.fetchPromoMovieAction();
    }

    componentDidUpdate(prevProps) {
      const {wasPromoLoaded} = this.state;
      const {promoMovie} = this.props;

      if (wasPromoLoaded === false && prevProps.promoMovie !== promoMovie) {
        this.setState({wasPromoLoaded: true});
      }
    }

    render() {
      const {wasPromoLoaded} = this.state;
      const {promoMovie} = this.props;

      return (
        <Component
          wasPromoLoaded={wasPromoLoaded}
          promoMovie={promoMovie}
        />
      );
    }
  }

  WithPromoLoaded.propTypes = {
    promoMovie: proptypes.movieNotRequired,
    fetchPromoMovieAction: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    promoMovie: getMovie(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchPromoMovieAction() {
      dispatch(fetchPromoMovie());
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithPromoLoaded);
};

export default withPromoLoaded;
