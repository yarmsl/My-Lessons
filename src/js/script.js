"use strict";
// Консольное приложение
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних фильмов?',''),
      b = prompt('на сколько оценитье его?', ''),
      c = prompt('Один из последних фильмов?',''),
      d = prompt('на сколько оценитье его?', '');

personalMovieDB.movies[a] = b; // запись через квадратные скобки вместо точки работает корректенее
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);