import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {login} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/selectors';
import {AuthorizationStatus, AppRoute} from '../../const';

class AuthPage extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this._loginRef.current.value,
      password: this._passwordRef.current.value,
    });
  }

  render() {
    const {cinemaName, authorizationStatus} = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Redirect to={AppRoute.ROOT} />
      );
    }

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
          <form onSubmit={this._handleSubmit} action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={this._loginRef} className="sign-in__input" type="email"
                  placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this._passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
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
  }
}

AuthPage.propTypes = {
  cinemaName: proptypes.cinemaName,
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthPage};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
