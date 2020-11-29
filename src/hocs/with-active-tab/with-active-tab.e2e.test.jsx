import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {TabType} from '../../const';

import withActiveTab from "./with-active-tab";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should change active tab`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  expect(getWrappedComponentProps().activeTab).toEqual(TabType.OVERVIEW);

  getWrappedComponentProps().onTabClick(TabType.REVIEWS);

  wrapper.update();

  expect(getWrappedComponentProps().activeTab).toEqual(TabType.REVIEWS);
});
