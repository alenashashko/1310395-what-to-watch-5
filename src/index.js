import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';
import {PROMO_MOVIE} from './mocks/movies'; // separate request
import {MOVIES} from './mocks/movies';
import {REVIEWS} from './mocks/reviews';
import {reducer} from './store/reducer';

const CINEMA_NAME = `WTW`;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App cinemaName={CINEMA_NAME} promoMovie={PROMO_MOVIE} movies={MOVIES} reviews={REVIEWS}/>
    </Provider>,
    document.querySelector(`#root`)
);
