import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});

describe(`check review form elements`, () => {
  it(`click by input label calls onRatingChange`, () => {
    const onRatingChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          movieBackgroundColor="red"
          ratingValue={3}
          reviewText="comment"
          onFormSubmit={jest.fn()}
          onTextChange={jest.fn()}
          onRatingChange={onRatingChange}
        />
    );

    const starInput = wrapper.find(`.rating__input`);

    starInput.at(2).simulate(`change`);

    expect(onRatingChange).toHaveBeenCalledTimes(1);
    expect(onRatingChange).toHaveBeenNthCalledWith(1, 3);
  });

  it(`change on textarea calls onTextChange`, () => {
    const onTextChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          movieBackgroundColor="red"
          ratingValue={3}
          reviewText="comment"
          onFormSubmit={jest.fn()}
          onTextChange={onTextChange}
          onRatingChange={jest.fn()}
        />
    );

    const reviewTextarea = wrapper.find(`#review-text`);

    const changeEvent = {target: {value: `cool`}};

    reviewTextarea.simulate(`change`, changeEvent);

    expect(onTextChange).toHaveBeenCalledTimes(1);
    expect(onTextChange).toHaveBeenNthCalledWith(1, changeEvent);
  });

  it(`submit on form calls onFormSubmit`, () => {
    const onFormSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          movieBackgroundColor="red"
          ratingValue={3}
          reviewText="comment"
          onFormSubmit={onFormSubmit}
          onTextChange={jest.fn()}
          onRatingChange={jest.fn()}
        />
    );

    const reviewTextarea = wrapper.find(`form.add-review__form`);

    reviewTextarea.simulate(`submit`);

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
