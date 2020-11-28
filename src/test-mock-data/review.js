import {adaptCommentToClient} from '../services/adapters';

export const apiReviews = [
  {
    id: 1,
    user: {
      id: 11,
      name: `Jack`
    },
    rating: 2.4,
    comment: `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
    date: `2020-11-03T13:38:44.769Z`
  },
  {
    id: 2,
    user: {
      id: 12,
      name: `Isaac`
    },
    rating: 7.2,
    comment: `A movie that will take you to another world full of emotions.`,
    date: `2020-10-23T13:38:44.769Z`
  }
];

export const review = adaptCommentToClient(apiReviews[0]);

export const reviews = apiReviews.map(adaptCommentToClient);

