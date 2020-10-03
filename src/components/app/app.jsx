import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {promoMovie, cinemaName, genres, movies} = props;

  return (
    <MainPage cinemaName={cinemaName} promoMovie={promoMovie} genres={genres} movies={movies}/>
  );
};

App.propTypes = {
  cinemaName: PropTypes.string.isRequired,
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
