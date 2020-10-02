import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const GENRES = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const MOVIES = [
  {
    name: `The Grand Budapest Hotel`,
    picture: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    year: 2014
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    name: `Bohemian Rhapsody`,
    picture: `img/bohemian-rhapsody.jpg`
  },
  {
    name: `Macbeth`,
    picture: `img/macbeth.jpg`
  },
  {
    name: `Aviator`,
    picture: `img/aviator.jpg`
  },
  {
    name: `We need to talk about Kevin`,
    picture: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    name: `What We Do in the Shadows`,
    picture: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    name: `Revenant`,
    picture: `img/revenant.jpg`
  },
  {
    name: `Johnny English`,
    picture: `img/johnny-english.jpg`
  },
  {
    name: `Shutter Island`,
    picture: `img/shutter-island.jpg`
  },
  {
    name: `Pulp Fiction`,
    picture: `img/pulp-fiction.jpg`
  },
  {
    name: `No Country for Old Men`,
    picture: `img/no-country-for-old-men.jpg`
  },
  {
    name: `Snatch`,
    picture: `img/snatch.jpg`
  },
  {
    name: `Moonrise Kingdom`,
    picture: `img/moonrise-kingdom.jpg`
  },
  {
    name: `Seven Years in Tibet`,
    picture: `img/seven-years-in-tibet.jpg`
  },
  {
    name: `Midnight Special`,
    picture: `img/midnight-special.jpg`
  },
  {
    name: `War of the Worlds`,
    picture: `img/war-of-the-worlds.jpg`
  },
  {
    name: `Dardjeeling Limited`,
    picture: `img/dardjeeling-limited.jpg`
  },
  {
    name: `Orlando`,
    picture: `img/orlando.jpg`
  },
  {
    name: `Mindhunter`,
    picture: `img/mindhunter.jpg`
  },
  {
    name: `Midnight Special`,
    picture: `img/midnight-special.jpg`
  }
];

const CINEMA_NAME = `WTW`;

ReactDom.render(
    <App cinemaName={CINEMA_NAME} genres={GENRES} movies={MOVIES} />,
    document.querySelector(`#root`)
);
