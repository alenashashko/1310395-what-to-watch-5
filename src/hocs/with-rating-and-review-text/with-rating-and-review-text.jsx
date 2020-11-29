import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {sendCommentByID} from '../../store/api-actions';

const ONE_STAR_IN_RATING = 2;

const withRatingAndReviewText = (Component) => {
  class WithRatingAndReviewText extends PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: null,
        reviewText: ``
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleFormSubmit(evt) {
      const {onSubmit} = this.props;
      const {id} = this.props.match.params;
      const ratingValue = this.state.ratingValue;
      const reviewText = this.state.reviewText;

      evt.preventDefault();

      onSubmit(id, {
        rating: ratingValue * ONE_STAR_IN_RATING,
        comment: reviewText
      });
    }

    _handleTextChange(evt) {
      this.setState({
        reviewText: evt.target.value
      });
    }

    _handleRatingChange(value) {
      this.setState({
        ratingValue: value
      });
    }

    render() {
      const {ratingValue, reviewText} = this.state;

      return (
        <Component
          {...this.props}
          ratingValue={ratingValue}
          reviewText={reviewText}
          onFormSubmit={this._handleFormSubmit}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
        />
      );
    }
  }

  WithRatingAndReviewText.propTypes = {
    match: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, commentData) {
      dispatch(sendCommentByID(id, commentData));
    }
  });

  return connect(null, mapDispatchToProps)(withRouter(WithRatingAndReviewText));
};

export default withRatingAndReviewText;
