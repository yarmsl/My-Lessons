// "use strict";
// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//    }
// }

// // start();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних фильмов?',''),
//             b = prompt('на сколько оценитье его?', '');
            
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                personalMovieDB.movies[a] = b; 
//                console.log('everthng ok');
//             } else {
//                console.log('err');
//                i--;
//             }    
//    }
// }
// // rememberMyFilms();

// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log('Просмотрено очень мало фильмов');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический');
//    } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//    } else {
//       console.log('Ошибка!');
//    }
// }
// // detectPersonalLevel();

// function showMyDB(hidden) {
//    if (!hidden) {
//       console.log(personalMovieDB);
//    }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//    for(let i = 1; i <=3; i++) {
//       const genre = prompt(`Ваш любимый жанр под номером ${i}?`);
//       personalMovieDB.genres[i - 1] = genre;
//    }
// }
// writeYourGenres();

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


// callback функции

// function first() {
//    setTimeout(function() {
//       console.log(1);
//    }, 500)
// }

// function second() {
//    console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// }

// function done() {
//    console.log('passed');
// }

// learnJS('kaka', done);

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    color: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function() {
//       console.log("test");
//    }
// };
// options.makeTest();

// const {border, bg} = options.color;

// console.log(bg)

// console.log(options.color.border);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`свойства ${i}, имеет значение ${options[key][i]}`);
//          counter++;
//       }
//    }else {
//    console.log(`свойства ${key}, имеет значение ${options[key]}`);
//    counter++;
//    }
// }

// console.log(counter);

// console.log(Object.keys(options).length);

// const arr = [13, 12, 3, 733, 9];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//    return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();

// console.log(arr);

// arr.push(122);
// arr.push(55);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (let value of arr) {
//    console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

//Передача по ссылке или по значению

// let a = 5,
//    b = a;

//    b = b + 5;

//    console.log(b, a);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj; //передаётся ссылка на объект

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.c.x = 10;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
//    d: 19,
//    e: 22
// };

// const assign = Object.assign({}, add);
// assign.d = 500;
// console.log(add);
// console.log(assign);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'dfdfgreg'
// console.log(newArr);
// console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'LJ', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'Fb'];

      console.log(internet);

      function log(a, b, c) {
         console.log(a);
         console.log(b);
         console.log(c);
      }
      const num = [2, 5, 7];

      log(...num);

const array = ['a', 'b'];

const array2 = [...array];

