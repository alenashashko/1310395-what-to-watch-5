import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {fetchCommentsListByID} from '../../store/api-actions';
import {getComments} from '../../store/selectors';

const MovieReviews = (props) => {
  const {comments} = props;

  return ( // date и dateTime исправ
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {comments.slice(0, Math.ceil(comments.length / 2)).map((review) => {
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

        {comments.slice(Math.ceil(comments.length / 2)).map((review) => {
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
    </div>
  );
};

MovieReviews.propTypes = {
  id: proptypes.id,
  comments: proptypes.comments,
  fetchCommentsListByIDAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsListByIDAction(id) {
    dispatch(fetchCommentsListByID(id));
  }
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(
    generateWithFetchedData(
        (state) => !!getComments(state),
        (props) => props.fetchCommentsListByIDAction(props.id)
    )(MovieReviews));
