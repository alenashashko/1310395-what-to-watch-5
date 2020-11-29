import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withVideoPlayingStatus from "./with-video-playing-status";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withVideoPlayingStatus(MockComponent);

it(`should change isVideoPlaying status field to true on mouse enter`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onMouseEnter();

  wrapper.update();

  expect(getWrappedComponentProps().isVideoPlaying).toBe(true);
});

it(`should change isVideoPlaying status field to false on mouse enter`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onMouseLeave();

  wrapper.update();

  expect(getWrappedComponentProps().isVideoPlaying).toBe(false);
});
