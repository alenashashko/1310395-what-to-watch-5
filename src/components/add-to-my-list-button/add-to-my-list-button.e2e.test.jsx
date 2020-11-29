import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AddToMyListButton} from './add-to-my-list-button';
import {AuthorizationStatus} from '../../const';

configure({adapter: new Adapter()});

it(`should call redirectToAuthPage on button click when not authorized`, () => {
  const redirectToAuthPage = jest.fn();

  const wrapper = shallow(
      <AddToMyListButton
        id="2"
        isMovieFavorite={false}
        changeFavoriteMovieByIDAction={jest.fn()}
        redirectToAuthPage={redirectToAuthPage}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />
  );

  const button = wrapper.find(`button`);

  button.simulate(`click`);

  expect(redirectToAuthPage).toHaveBeenCalledTimes(1);
});

it(`should not call changeFavoriteMovieByIDAction on button click when not authorized`, () => {
  const changeFavoriteMovieByIDAction = jest.fn();

  const wrapper = shallow(
      <AddToMyListButton
        id="2"
        isMovieFavorite={false}
        changeFavoriteMovieByIDAction={changeFavoriteMovieByIDAction}
        redirectToAuthPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />
  );

  const button = wrapper.find(`button`);

  button.simulate(`click`);

  expect(changeFavoriteMovieByIDAction).toHaveBeenCalledTimes(0);
});

it(`should call changeFavoriteMovieByIDAction on button click when authorized`, () => {
  const changeFavoriteMovieByIDAction = jest.fn();

  const wrapper = shallow(
      <AddToMyListButton
        id="2"
        isMovieFavorite={false}
        changeFavoriteMovieByIDAction={changeFavoriteMovieByIDAction}
        redirectToAuthPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  const button = wrapper.find(`button`);

  button.simulate(`click`);

  expect(changeFavoriteMovieByIDAction).toHaveBeenCalledTimes(1);
});

