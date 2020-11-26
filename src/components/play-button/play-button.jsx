import React from 'react';
import {withRouter} from 'react-router';

import proptypes from '../../type';

const PlayButton = (props) => {
  const {id, history} = props;

  return (
    <button
      onClick={() => history.push(`/player/${id}`)}
      className="btn btn--play movie-card__button"
      type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayButton.propTypes = {
  id: proptypes.id,
  history: proptypes.history,
};

export default withRouter(PlayButton);
