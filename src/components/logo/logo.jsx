import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute, CINEMA_NAME} from '../../const';

const Logo = (props) => {
  const {className} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={`logo__link ${className}`}>
        {CINEMA_NAME.split(``).map((character, index) => {
          return (
            <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
          );
        })}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
