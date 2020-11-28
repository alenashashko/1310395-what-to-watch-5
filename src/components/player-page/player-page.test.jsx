import React from 'react';
import renderer from 'react-test-renderer';
import browserHistory from '../../browser-history';

import {PlayerPage} from './player-page';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};
const SEC_IN_MIN = 60;

describe(`Should PlayerPage render correctly`, () => {
  it(`With playing video status`, () => {
    const tree = renderer
      .create(
          <PlayerPage
            id={`1`}
            movie={movie}
            history={browserHistory}
            containerForwardRef={React.createRef()}
            videoForwardRef={React.createRef()}
            duration={movie.duration * SEC_IN_MIN}
            playbackTime={0.20}
            isPlaying={true}
            onFullScreenButtonClick={noop}
            onPlayButtonClick={noop}
            onPauseButtonClick={noop}
            onTimeUpdate={noop}
            onProgressBarClick={noop}
            onCanPlayThrough={noop}
            onVideoEnded={noop}
            destroy={noop}
            fetchMovieByIDAction={noop}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With paused video status`, () => {
    const tree = renderer
      .create(
          <PlayerPage
            id={`1`}
            movie={movie}
            history={browserHistory}
            containerForwardRef={React.createRef()}
            videoForwardRef={React.createRef()}
            duration={movie.duration * SEC_IN_MIN}
            playbackTime={0.20}
            isPlaying={false}
            onFullScreenButtonClick={noop}
            onPlayButtonClick={noop}
            onPauseButtonClick={noop}
            onTimeUpdate={noop}
            onProgressBarClick={noop}
            onCanPlayThrough={noop}
            onVideoEnded={noop}
            destroy={noop}
            fetchMovieByIDAction={noop}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
