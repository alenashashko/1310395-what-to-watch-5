import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../logo/logo';
import Footer from '../footer/footer';
import withAuthForm from '../../hocs/with-auth-form/with-auth-form';
import {redirectToRoute} from '../../store/actions';
import {getAuthorizationStatus, getIsAuthError} from '../../store/selectors';
import {AuthorizationStatus, AppRoute} from '../../const';

class AuthPage extends PureComponent {
  componentDidMount() {
    const {authorizationStatus, redirectToMainPage} = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      redirectToMainPage();
    }
  }

  render() {
    const {
      authorizationStatus,
      isAuthError,
      loginForwardRef,
      passwordForwardRef,
      isValidEmail,
      onEmailInput,
      onSubmit
    } = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return null;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={onSubmit} action="#" className="sign-in__form">
            {isValidEmail
              ? null
              : <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>
            }
            {isAuthError
              ? <div className="sign-in__message">
                <p>We can’t recognize this email
                  <br/> and password combination. Please try again
                </p>
              </div>
              : null
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  style={isValidEmail ? {} : {border: `2px solid #a8421e`}}
                  onInput={onEmailInput}
                  ref={loginForwardRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email" />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email">
                  Email addres
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordForwardRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password" />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password">
                    Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

AuthPage.propTypes = {
  redirectToMainPage: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isAuthError: PropTypes.bool,
  loginForwardRef: PropTypes.object.isRequired,
  passwordForwardRef: PropTypes.object.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  onEmailInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isAuthError: getIsAuthError(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToMainPage() {
    dispatch(redirectToRoute(AppRoute.ROOT));
  }
});

export {AuthPage};
export default connect(mapStateToProps, mapDispatchToProps)(withAuthForm(AuthPage));
