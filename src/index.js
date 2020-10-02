import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const GENRES = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`]; // from movies list

const PROMO_MOVIE = {
  title: `The Grand Budapest Hotel`,
  picture: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: 2014
};

const MOVIES = [ // add genre
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    picture: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    picture: `img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    picture: `img/aviator.jpg`
  },
  {
    title: `We need to talk about Kevin`,
    picture: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    picture: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Revenant`,
    picture: `img/revenant.jpg`
  },
  {
    title: `Johnny English`,
    picture: `img/johnny-english.jpg`
  },
  {
    title: `Shutter Island`,
    picture: `img/shutter-island.jpg`
  },
  {
    title: `Pulp Fiction`,
    picture: `img/pulp-fiction.jpg`
  },
  {
    title: `No Country for Old Men`,
    picture: `img/no-country-for-old-men.jpg`
  },
  {
    title: `Snatch`,
    picture: `img/snatch.jpg`
  },
  {
    title: `Moonrise Kingdom`,
    picture: `img/moonrise-kingdom.jpg`
  },
  {
    title: `Seven Years in Tibet`,
    picture: `img/seven-years-in-tibet.jpg`
  },
  {
    title: `Midnight Special`,
    picture: `img/midnight-special.jpg`
  },
  {
    title: `War of the Worlds`,
    picture: `img/war-of-the-worlds.jpg`
  },
  {
    title: `Dardjeeling Limited`,
    picture: `img/dardjeeling-limited.jpg`
  },
  {
    title: `Orlando`,
    picture: `img/orlando.jpg`
  },
  {
    title: `Mindhunter`,
    picture: `img/mindhunter.jpg`
  },
  {
    title: `Midnight Special`,
    picture: `img/midnight-special.jpg`
  }
];

const CINEMA_NAME = `WTW`;

ReactDom.render(
    <App cinemaName={CINEMA_NAME} promoMovie={PROMO_MOVIE} genres={GENRES} movies={MOVIES} />,
    document.querySelector(`#root`)
);
