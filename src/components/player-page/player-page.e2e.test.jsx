import React from 'react';

import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {movie} from '../../test-mock-data/movie';
import browserHistory from '../../browser-history';

import {PlayerPage} from './player-page';

configure({adapter: new Adapter()});

it(`should call onFullScreenButtonClick when clicked on fullscreen button`, () => {
  const onFullScreenButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayerPage
        id="1"
        movie={movie}
        history={browserHistory}
        containerForwardRef={React.createRef()}
        videoForwardRef={React.createRef()}
        duration={10000}
        playbackTime={2000}
        isPlaying={false}
        onFullScreenButtonClick={onFullScreenButtonClick}
        onPlayButtonClick={jest.fn()}
        onPauseButtonClick={jest.fn()}
        onTimeUpdate={jest.fn()}
        onProgressBarClick={jest.fn()}
        onCanPlayThrough={jest.fn()}
        onVideoEnded={jest.fn()}
        destroy={jest.fn()}
      />
  );

  wrapper.find(`button.player__full-screen`).simulate(`click`);

  expect(onFullScreenButtonClick).toHaveBeenCalledTimes(1);
});

it(`should call onPlayButtonClick when clicked on play button`, () => {
  const onPlayButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayerPage
        id="1"
        movie={movie}
        history={browserHistory}
        containerForwardRef={React.createRef()}
        videoForwardRef={React.createRef()}
        duration={10000}
        playbackTime={2000}
        isPlaying={false}
        onFullScreenButtonClick={jest.fn()}
        onPlayButtonClick={onPlayButtonClick}
        onPauseButtonClick={jest.fn()}
        onTimeUpdate={jest.fn()}
        onProgressBarClick={jest.fn()}
        onCanPlayThrough={jest.fn()}
        onVideoEnded={jest.fn()}
        destroy={jest.fn()}
      />
  );

  wrapper.find(`button.player__play`).simulate(`click`);

  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});

it(`should call onPauseButtonClick when clicked on pause button`, () => {
  const onPauseButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayerPage
        id="1"
        movie={movie}
        history={browserHistory}
        containerForwardRef={React.createRef()}
        videoForwardRef={React.createRef()}
        duration={10000}
        playbackTime={2000}
        isPlaying={true}
        onFullScreenButtonClick={jest.fn()}
        onPlayButtonClick={jest.fn()}
        onPauseButtonClick={onPauseButtonClick}
        onTimeUpdate={jest.fn()}
        onProgressBarClick={jest.fn()}
        onCanPlayThrough={jest.fn()}
        onVideoEnded={jest.fn()}
        destroy={jest.fn()}
      />
  );

  wrapper.find(`button.player__pause`).simulate(`click`);

  expect(onPauseButtonClick).toHaveBeenCalledTimes(1);
});

it(`should call onProgressBarClick when clicked on progress bar`, () => {
  const onProgressBarClick = jest.fn();

  const wrapper = shallow(
      <PlayerPage
        id="1"
        movie={movie}
        history={browserHistory}
        containerForwardRef={React.createRef()}
        videoForwardRef={React.createRef()}
        duration={10000}
        playbackTime={2000}
        isPlaying={true}
        onFullScreenButtonClick={jest.fn()}
        onPlayButtonClick={jest.fn()}
        onPauseButtonClick={jest.fn()}
        onTimeUpdate={jest.fn()}
        onProgressBarClick={onProgressBarClick}
        onCanPlayThrough={jest.fn()}
        onVideoEnded={jest.fn()}
        destroy={jest.fn()}
      />
  );

  wrapper.find(`.player__progress`).simulate(`click`);

  expect(onProgressBarClick).toHaveBeenCalledTimes(1);
});
