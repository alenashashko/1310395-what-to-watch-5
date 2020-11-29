import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {movies} from '../../test-mock-data/movie';

import withPageNumber from "./with-page-number";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPageNumber(MockComponent);

it(`should increment page number`, () => {
  const wrapper = shallow(<MockComponentWrapped movies={movies} />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().pageNumber).toBe(2);

  getWrappedComponentProps().onButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().pageNumber).toBe(3);
});

it(`should reset page number`, () => {
  const wrapper = shallow(<MockComponentWrapped movies={movies} />);

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().pageNumber).toBe(2);

  getWrappedComponentProps().onButtonClick();

  wrapper.update();

  expect(getWrappedComponentProps().pageNumber).toBe(3);

  getWrappedComponentProps().resetPageNumber();

  wrapper.update();

  expect(getWrappedComponentProps().pageNumber).toBe(1);
});
