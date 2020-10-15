import React from 'react';
import {Link} from 'react-router-dom';

import {proptypes} from '../../type';

const AuthPage = (props) => {
  const {cinemaName} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            {cinemaName.split(``).map((character, index) => {
              return (
                <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
              );
            })}
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email"
                placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            {cinemaName.split(``).map((character, index) => {
              return (
                <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
              );
            })}
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

AuthPage.propTypes = {
  cinemaName: proptypes.cinemaName
};

export default AuthPage;
