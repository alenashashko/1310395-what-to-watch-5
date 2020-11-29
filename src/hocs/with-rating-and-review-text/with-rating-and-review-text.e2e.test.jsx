import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withRatingAndReviewText from "./with-rating-and-review-text";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter, Route} from "react-router-dom";

configure({adapter: new Adapter()});

jest.mock(`../../store/api-actions`, () => {
  return {
    __esModule: true,
    sendCommentByID: (id, commentData) => ({
      type: `sendCommentByID`,
      payload: {id, commentData}
    }),
  };
});

const MockComponent = () => <div />;
const MockComponentWrapped = withRatingAndReviewText(MockComponent);

it(`should change ratingValue when onRatingChange called`, () => {
  const wrapper = mount(
      <BrowserRouter>
        <Provider store={createStore((state = {}) => state)}>
          <MockComponentWrapped />
        </Provider>
      </BrowserRouter>
  );

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onRatingChange(4);

  wrapper.update();

  expect(getWrappedComponentProps().ratingValue).toBe(4);
});

it(`should change reviewText when onTextChange called`, () => {
  const wrapper = mount(
      <BrowserRouter>
        <Provider store={createStore((state = {}) => state)}>
          <MockComponentWrapped />
        </Provider>
      </BrowserRouter>
  );

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onTextChange({target: {value: `cool`}});

  wrapper.update();

  expect(getWrappedComponentProps().reviewText).toBe(`cool`);
});

it(`should call onSubmit with correct params when onFormSubmit called`, () => {
  window.history.pushState({}, null, `/films/4/review`);

  const store = createStore((state = {}) => state);

  store.dispatch = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Route
            path="/films/:id/review"
            exact={true}
            render={(routeProps) => (
              <MockComponentWrapped {...routeProps} />
            )}
          />
        </Provider>
      </BrowserRouter>
  );

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  getWrappedComponentProps().onRatingChange(3);
  getWrappedComponentProps().onTextChange({target: {value: `cool`}});
  getWrappedComponentProps().onFormSubmit({preventDefault: () => { }});

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenNthCalledWith(1, {
    type: `sendCommentByID`,
    payload: {
      id: `4`,
      commentData: {
        comment: `cool`,
        rating: 6,
      }
    }
  });
});
