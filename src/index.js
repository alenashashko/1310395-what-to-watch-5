import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import {CINEMA_NAME, AuthorizationStatus} from './const';
import {movies} from './mocks/movies'; // delete
import {REVIEWS} from './mocks/reviews';
import rootReducer from './store/reducers/root-reducer';
import {createAPI} from './services/api';
import {changeAuthorizationStatus} from './store/action';
import {fetchMoviesList, fetchFavoriteMoviesList, fetchPromoMovie, checkAuth} from './store/api-actions';

const api = createAPI(() => store.dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH)));

const store = createStore( // delete movies prop
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchMoviesList());
store.dispatch(fetchFavoriteMoviesList()); // ?
store.dispatch(fetchPromoMovie()); // ?
store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App cinemaName={CINEMA_NAME} movies={movies} reviews={REVIEWS}/>
    </Provider>,
    document.querySelector(`#root`)
);
