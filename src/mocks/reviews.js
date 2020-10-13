import {nanoid} from 'nanoid';
import {getRandomInteger} from '../utils';

const TEXT_PARTS = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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

const generateReview = () => {
  return {
    id: nanoid(),
    author: `Kate Muir`,
    date: new Date(),
    rating: +(Math.random() * 10.05).toFixed(1),
    text: TEXT_PARTS.slice(0, getRandomInteger(1, TEXT_PARTS.length)).join(` `)
  };
};

export const REVIEWS = new Array(getRandomInteger(0, 10)).fill().map(generateReview);
