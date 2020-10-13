import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {PROMO_MOVIE} from './mocks/movies'; // separate request
import {MOVIES} from './mocks/movies';

const CINEMA_NAME = `WTW`;
const RATINGS = [1, 2, 3, 4, 5];

ReactDom.render(
    <App cinemaName={CINEMA_NAME} promoMovie={PROMO_MOVIE} movies={MOVIES} ratings={RATINGS}/>,
    document.querySelector(`#root`)
);
