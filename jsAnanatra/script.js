
const numberOfFilms =  +prompt ( 'Скільки фільмів ви уже переглянули?', ' ' );
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt ('Один із останніх переглянутих фільмів?'),
      b=prompt ('На скільки оціните його?'),
      c = prompt ('Один із останніх переглянутих фільмів?'),
      d = prompt ('На скільки оціните його?');

  personalMovieDb.movies[a]=b;
  personalMovieDb.movies[c]=d;

console.log( personalMovieDb);
