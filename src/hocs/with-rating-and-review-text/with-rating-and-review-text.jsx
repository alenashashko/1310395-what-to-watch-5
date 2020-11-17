import React, {PureComponent} from 'react';

const withRatingAndReviewText = (Component) => {
  class WithRatingAndReviewText extends PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: 5,
        reviewText: ``
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleFormSubmit(evt) {
      // clear form ?
      evt.preventDefault();
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
          ratingValue={ratingValue}
          reviewText={reviewText}
          onFormSubmit={this._handleFormSubmit}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
        />
      );
    }
  }

  return WithRatingAndReviewText;
};

export default withRatingAndReviewText;
