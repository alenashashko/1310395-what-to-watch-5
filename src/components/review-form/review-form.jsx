import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import withRatingAndReviewText from '../../hocs/with-rating-and-review-text/with-rating-and-review-text';
import {getErrorText, getIsCommentLoadingStatus} from '../../store/selectors';

const ReviewForm = (props) => {
  const {
    ratingValue,
    reviewText,
    onFormSubmit,
    onTextChange,
    onRatingChange,
    saveErrorText,
    isLoading
  } = props;
  const ratings = new Array(5).fill(null);

  return (
    <form onSubmit={onFormSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingValue === null ? (
            <input
              id={`star-hidden`}
              name="rating"
              className={`rating__input visually-hidden`}
              type="radio"
              defaultChecked={true}
            />
          ) : null}

          {ratings.map((it, index) => {
            const isChecked = ratingValue ? ratingValue === index + 1 : false;

            return (
              <React.Fragment key={index}>
                <input
                  id={`star-${index + 1}`}
                  className="rating__input"
                  type="radio"
                  value={index + 1}
                  name="rating"
                  checked={isChecked}
                  onChange={() => onRatingChange(index + 1)}
                />
                <label
                  className="rating__label" htmlFor={`star-${index + 1}`}>{`Rating ${index + 1}`}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={onTextChange}
          value={reviewText}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength="50"
          maxLength="400"
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isLoading || ratingValue === null || reviewText.length < 50}
          >
            Post
          </button>
        </div>

      </div>
      {saveErrorText
        ? <div style={{
          color: `#ed8d8d`,
          textAlign: `center`,
          paddingTop: `20px`
        }}>{saveErrorText}</div> : null}
    </form>
  );
};

ReviewForm.propTypes = {
  ratingValue: PropTypes.number,
  reviewText: proptypes.reviewText,
  onFormSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  saveErrorText: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  saveErrorText: getErrorText(state),
  isLoading: getIsCommentLoadingStatus(state)
});

export {ReviewForm};
export default connect(mapStateToProps)(withRatingAndReviewText(ReviewForm));
