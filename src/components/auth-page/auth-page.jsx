import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../logo/logo';
import Footer from '../footer/footer';
import withAuthForm from '../../hocs/with-auth-form/with-auth-form';
import {redirectToRoute} from '../../store/actions';
import {getAuthorizationStatus} from '../../store/selectors';
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
      loginForwardRef,
      passwordForwardRef,
      isValidEmail,
      handleEmailInput,
      handleSubmit
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
          <form onSubmit={handleSubmit} action="#" className="sign-in__form">
            {isValidEmail
              ? null
              : <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  style={isValidEmail ? {} : {border: `2px solid #a8421e`}}
                  onInput={handleEmailInput}
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
  loginForwardRef: PropTypes.object.isRequired,
  passwordForwardRef: PropTypes.object.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  handleEmailInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToMainPage() {
    dispatch(redirectToRoute(AppRoute.ROOT));
  }
});

export {AuthPage};
export default connect(mapStateToProps, mapDispatchToProps)(withAuthForm(AuthPage));
