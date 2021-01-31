export const getMovieGenres = (allGenres, genre_ids) => (
  allGenres.filter((genre) => genre_ids.includes(genre.id))
);
