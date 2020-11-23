import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';
import {promoMovie} from './mocks/movies'; // separate request
import {movies} from './mocks/movies'; // delete
import {REVIEWS} from './mocks/reviews';
import rootReducer from './store/reducers/root-reducer';

const CINEMA_NAME = `WTW`;

const store = createStore( // delete movies prop
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App cinemaName={CINEMA_NAME} promoMovie={promoMovie} movies={movies} reviews={REVIEWS}/>
    </Provider>,
    document.querySelector(`#root`)
);
