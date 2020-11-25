export const adaptMovieToClient = (movie) => {
  const adaptedMovie = {
    id: String(movie.id),
    title: movie.name,
    picture: movie.preview_image,
    backgroundPicture: movie.background_image,
    backgroundColor: movie.background_color,
    poster: movie.poster_image,
    genre: movie.genre,
    year: movie.released,
    ratingScore: movie.rating,
    ratingCount: movie.scores_count,
    src: movie.video_link,
    previewSrc: movie.preview_video_link,
    duration: movie.run_time,
    description: movie.description,
    director: movie.director,
    starring: movie.starring,
    isFavorite: movie.is_favorite
  };

  return adaptedMovie;
};

export const adaptCommentToClient = (comment) => { // author.id ?
  const adaptedComment = {
    id: String(comment.id),
    author: comment.user.name,
    date: comment.date,
    rating: comment.rating,
    text: comment.comment
  };

  return adaptedComment;
};
