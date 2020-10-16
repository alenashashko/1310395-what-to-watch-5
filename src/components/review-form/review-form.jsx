import React, {PureComponent} from 'react';

const RATINGS = new Array(5).fill(null);

class ReviewForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      "ratingValue": 5,
      "reviewText": ``
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
      "reviewText": evt.target.value
    });
  }

  _handleRatingChange(value) {
    this.setState({
      "ratingValue": value
    });
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RATINGS.map((it, index) => {
              return (
                <React.Fragment key={index}>
                  <input className="rating__input" id={`star-${index + 1}`} type="radio"
                    name="rating" value={index + 1} defaultChecked={this.state.ratingValue > index}/>
                  <label onClick={() => this._handleRatingChange(index + 1)}
                    className="rating__label" htmlFor={`star-${index + 1}`}>{`Rating ${index + 1}`}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={this._handleTextChange} value={this.state.reviewText} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default ReviewForm;
