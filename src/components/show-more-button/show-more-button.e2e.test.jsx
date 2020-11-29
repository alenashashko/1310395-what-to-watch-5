import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowMoreButton from './show-more-button';

configure({adapter: new Adapter()});

it(`should call onButtonClick on show more button`, () => {
  const onButtonClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        onButtonClick={onButtonClick}
      />
  );

  wrapper.find(`button`).simulate(`click`);

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
