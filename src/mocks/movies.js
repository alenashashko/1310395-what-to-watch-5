import {nanoid} from 'nanoid';
import {getRandomInteger} from '../utils';

const MOVIES_INFO = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    picture: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    picture: `/img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    picture: `/img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    picture: `/img/aviator.jpg`
  },
  {
    title: `We need to talk about Kevin`,
    picture: `/img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    picture: `/img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Revenant`,
    picture: `/img/revenant.jpg`
  },
  {
    title: `Johnny English`,
    picture: `/img/johnny-english.jpg`
  },
  {
    title: `Shutter Island`,
    picture: `/img/shutter-island.jpg`
  },
  {
    title: `Pulp Fiction`,
    picture: `/img/pulp-fiction.jpg`
  },
  {
    title: `No Country for Old Men`,
    picture: `/img/no-country-for-old-men.jpg`
  },
  {
    title: `Snatch`,
    picture: `/img/snatch.jpg`
  },
  {
    title: `Moonrise Kingdom`,
    picture: `/img/moonrise-kingdom.jpg`
  },
  {
    title: `Seven Years in Tibet`,
    picture: `/img/seven-years-in-tibet.jpg`
  },
  {
    title: `Midnight Special`,
    picture: `/img/midnight-special.jpg`
  },
  {
    title: `War of the Worlds`,
    picture: `/img/war-of-the-worlds.jpg`
  },
  {
    title: `Dardjeeling Limited`,
    picture: `/img/dardjeeling-limited.jpg`
  },
  {
    title: `Orlando`,
    picture: `/img/orlando.jpg`
  },
  {
    title: `Mindhunter`,
    picture: `/img/mindhunter.jpg`
  }
];

const GENRES = [`Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const DESCRIPTION_PARTS = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const DIRECTORS = [`Wes Andreson`, `Christopher Nolan`, `Steven Spielberg`, `Quentin Tarantino`, `Martin Scorsese`,
  `David Fincher`, `Stanley Kubrick`, `Robert Zemeckis`, `Ridley Scott`, `Clint Eastwood`, `Frank Darabont`];

const ACTORS = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`,
  `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`,
  `Morgan Freeman`, `Jackie Chan`, `Bruce Willis`, `Will Smith`, `Michael J. Fox`, `Harrison Ford`,
  `Sandra Bullock`, `Betty White`, `Tom Hanks`, `Denzel Washington`];

const generateMovie = () => {
  const randomMovieIndex = getRandomInteger(0, MOVIES_INFO.length - 1);

  return {
    id: nanoid(),
    title: MOVIES_INFO[randomMovieIndex].title,
    picture: MOVIES_INFO[randomMovieIndex].picture,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    genre: GENRES[getRandomInteger(0, GENRES.length - 1)],
    year: getRandomInteger(1990, 2020),
    ratingScore: +(Math.random() * 10.05).toFixed(1),
    ratingCount: getRandomInteger(1, 1000),
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: `${getRandomInteger(1, 4)}h ${getRandomInteger(0, 59)}m`,
    description: DESCRIPTION_PARTS.slice(0, getRandomInteger(1, DESCRIPTION_PARTS.length)).join(` `),
    director: DIRECTORS[getRandomInteger(0, DIRECTORS.length - 1)],
    starring: ACTORS.slice(0, getRandomInteger(1, ACTORS.length))
  };
};

export const MOVIES = new Array(8).fill().map(generateMovie);

