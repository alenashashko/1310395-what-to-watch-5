import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {getAuthorizationStatus, getAvatarURL} from '../../store/selectors';
import {AuthorizationStatus, AppRoute} from '../../const';

const UserBlock = (props) => {
  const {history, authorizationStatus, avatarUrl} = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <div onClick={() => history.push(AppRoute.MY_LIST)} className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
        : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  history: proptypes.history,
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  avatarUrl: getAvatarURL(state)
});

export {UserBlock};
export default connect(mapStateToProps)(withRouter(UserBlock));
