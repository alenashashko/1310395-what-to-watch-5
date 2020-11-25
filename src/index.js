import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import {CINEMA_NAME, AuthorizationStatus} from './const';
import rootReducer from './store/reducers/root-reducer';
import {createAPI} from './services/api';
import {changeAuthorizationStatus} from './store/actions';
import {fetchMoviesList, checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(() => store.dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(fetchMoviesList());
store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App cinemaName={CINEMA_NAME} />
    </Provider>,
    document.querySelector(`#root`)
);
