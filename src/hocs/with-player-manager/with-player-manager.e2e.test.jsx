import React from "react";
import PropTypes from 'prop-types';
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withPlayerManager from "./with-player-manager";

configure({adapter: new Adapter()});

jest.mock(`../../utils`, () => {
  return {
    __esModule: true,
    exitFullscreen: () => {},
    launchIntoFullscreen: () => {},
  };
});

const MockComponent = ({videoForwardRef}) => <video ref={videoForwardRef} />;

MockComponent.propTypes = {
  videoForwardRef: PropTypes.object.isRequired,
};

const MockComponentWrapped = withPlayerManager(MockComponent);

it(`should set isFullscreenMode to true on first onFullScreenButtonClick call`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onFullScreenButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().isFullscreenMode).toBe(true);
});

it(`should set isFullscreenMode to false on second onFullScreenButtonClick call`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onFullScreenButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().isFullscreenMode).toBe(true);

  getWrappedComponentProps().onFullScreenButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().isFullscreenMode).toBe(false);
});

it(`should set isPlaying to true when onPlayButtonClick called`, () => {
  // https://github.com/jsdom/jsdom/issues/2155
  window.HTMLMediaElement.prototype.play = () => {};

  const wrapper = mount(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onPlayButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().isPlaying).toBe(true);
});

it(`should set isPlaying to false when onPauseButtonClick called`, () => {
  window.HTMLMediaElement.prototype.pause = () => {};

  const wrapper = mount(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onPauseButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().isPlaying).toBe(false);
});

it(`should set playbackTime when onProgressBarClick called`, () => {
  const wrapper = mount(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onCanPlayThrough({
    target: {
      duration: 1000,
    },
  });

  getWrappedComponentProps().onProgressBarClick({
    target: {
      getBoundingClientRect() {
        return {
          width: 100,
          left: 10,
        };
      }
    },
    clientX: 80,
  });

  wrapper.update();

  expect(getWrappedComponentProps().playbackTime).toBe(700);
});
