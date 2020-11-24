import React, {PureComponent} from 'react';

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
      // clear form ?
      evt.preventDefault();
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

  return WithRatingAndReviewText;
};

export default withRatingAndReviewText;
