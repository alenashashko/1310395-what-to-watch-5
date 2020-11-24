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
        ratingValue: 5,
        reviewText: ``
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleFormSubmit(evt) {
      const {id} = this.props.match.params;
      const ratingValue = this.state.ratingValue;
      const reviewText = this.state.reviewText;

      evt.preventDefault();

      onsubmit(id, {
        rating: ratingValue * ONE_STAR_IN_RATING,
        comment: reviewText
      });
      // clear form ?
    }

    handleTextChange(evt) {
      this.setState({
        reviewText: evt.target.value
      });
    }

    handleRatingChange(value) {
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
          onFormSubmit={this.handleFormSubmit}
          onTextChange={this.handleTextChange}
          onRatingChange={this.handleRatingChange}
        />
      );
    }
  }

  WithRatingAndReviewText.propTypes = {
    match: PropTypes.object.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onsubmit(id, commentData) {
      dispatch(sendCommentByID(id, commentData));
    }
  });

  return connect(null, mapDispatchToProps)(withRouter(WithRatingAndReviewText));
};

export default withRatingAndReviewText;
