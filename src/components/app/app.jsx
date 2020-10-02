import React from 'react';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {cinemaName, genres, movies} = props;

  return (
    <MainPage cinemaName={cinemaName} genres={genres} movies={movies}/>
  );
};

export default App;
