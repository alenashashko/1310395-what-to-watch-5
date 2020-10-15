import React from 'react';

import {proptypes} from '../../type';

const ReviewForm = (props) => {
  const {ratings} = props;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((rating) => {
            return (
              <React.Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating.toString()} />
                <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  ratings: proptypes.ratings
};

export default ReviewForm;
