import React from 'react';

import proptypes from '../../type';
import {formatCommentRating} from '../../utils';

const MovieReview = (props) => {
  const {review} = props;

  return (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{review.date.toString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatCommentRating(review.rating)}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: proptypes.comment
};

export default MovieReview;
