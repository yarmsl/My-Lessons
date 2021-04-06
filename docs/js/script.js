"use strict";
// Консольное приложение
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних фильмов?',''),
//          b = prompt('на сколько оценитье его?', '');
         
//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b; 
//             console.log('everthng ok');
//          } else {
//             console.log('err');
//             i--;
//          }    
// }


// if (personalMovieDB.count < 10) {
//    console.log('Просмотрено очень мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы классический')
// } else if (personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
// } else {
//    console.log('Ошибка!')
// }

// console.log(personalMovieDB);

// Условия 
// if (4 == 8) {
//    console.log('ok');
// } else {
//    console.log('er');
// }

// const num = 50;

// if (num < 49) {
//    console.log('err');
// } else if (num > 100) {
//    console.log('too much')
// } else {
//    console.log('yes')
// };

// (num === 50) ? (console.log('ok')) : (console.log('err'));

// switch (num) {
//    case 49:
//       console.log('nope');
//       break;
//    case 100:
//       console.log('nope');
//       break;
//    case 50:
//       console.log('ye');
//       break;
//    default: 
//       console.log('dflt');
//       break;
// }

// Циклы
// let num = 50;

// while (num < 55) {
//    console.log(num);
//    num++;
// };

// do {
//    console.log(num);
//    num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//       // break;
//       continue;
//    }
//    console.log(i);
// }

// Функции

// let num = 20;

// function showFirstMessage(text) {
//    console.log(text);
//    let num = 10;
//    console.log(num);
// }

// showFirstMessage('JOPA!!!');
// console.log(num);

// function calc(a, b) {
//    return (a + b);
// }

// console.log(calc(4,8));
// console.log(calc(43,83));
// console.log(calc(45,86));

// function ret() {
//    let num = 50;
//    return num;
// }

// const logger = function() {
//   console.log('hello'); 
// };

// logger();

// const calc = (a, b) => {
//    return (a + b);
// };

// const arr = [
//    {id: 1, car: 'Toyota', model: 'Auris', owner: 'Yaroslav'},
//    {id: 2, car: 'Mitsubishi', model: 'Lancer', owner: 'Valeriya'},
//    {id: 3, car: 'Nissan', model: 'Almera', owner: 'Yaroslav'},
//    {id: 4, car: 'Volkswagen', model: 'Tiguan', owner: 'Yaroslav'}
// ];

// const list = arr.forEach(item => {
//    console.log(item.car);
// });

// console.log(arr);
// console.log(list);

// const grom = "Люблю грозу в начале мая";

// console.log(grom.indexOf('гроза'));

// const logg = "Hello world";

// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 2));

// const num = 12.2;
// console.log(Math.round(num));
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));