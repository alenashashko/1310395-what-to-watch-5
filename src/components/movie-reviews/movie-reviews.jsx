import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = (props) => {
  const {reviews} = props;

  return ( // date и dateTime исправ
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => {
          return (
            <div key={review.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date.toString()}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}

      </div>
      <div className="movie-card__reviews-col">

        {reviews.slice(Math.ceil(reviews.length / 2)).map((review) => {
          return (
            <div key={review.text} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date.toString()}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MovieReviews;
