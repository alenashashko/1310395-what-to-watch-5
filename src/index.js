import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import {PROMO_MOVIE} from './mocks/movies'; // separate request
import {MOVIES} from './mocks/movies';
import {REVIEWS} from './mocks/reviews';

const CINEMA_NAME = `WTW`;

ReactDom.render(
    <App cinemaName={CINEMA_NAME} promoMovie={PROMO_MOVIE} movies={MOVIES} reviews={REVIEWS}/>,
    document.querySelector(`#root`)
);
