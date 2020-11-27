import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {checkEmailValidity} from '../../utils';
import {login} from '../../store/api-actions';

const withAuthForm = (Component) => {
  class WithAuthForm extends PureComponent {
    constructor(props) {
      super(props);

      this._loginRef = createRef();
      this._passwordRef = createRef();

      this.state = {
        isValidEmail: true
      };

      this._handleEmailInput = this._handleEmailInput.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleEmailInput() {
      if (!checkEmailValidity(this._loginRef.current.value)) {
        this.setState({
          isValidEmail: false
        });
      } else {
        this.setState({
          isValidEmail: true
        });
      }
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
      return (
        <Component
          {...this.props}
          loginForwardRef={this._loginRef}
          passwordForwardRef={this._passwordRef}
          isValidEmail={this.state.isValidEmail}
          handleEmailInput={this._handleEmailInput}
          handleSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithAuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    },
  });

  return connect(null, mapDispatchToProps)(WithAuthForm);
};

export default withAuthForm;
