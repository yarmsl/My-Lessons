"use strict";

// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//    start: function() {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
//       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//          personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
//       }
//    },
//    rememberMyFilms: function() {
//       for (let i = 0; i < 2; i++) {
//          const a = prompt('Один из последних фильмов?',''),
//                b = prompt('на сколько оценитье его?', '');
//                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                   personalMovieDB.movies[a] = b; 
//                   console.log('everthng ok');
//                } else {
//                   console.log('err');
//                   i--;
//                }    
//       }
//    },
//    detectPersonalLevel: function() {
//       if (personalMovieDB.count < 10) {
//          console.log('Просмотрено очень мало фильмов');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          console.log('Вы классический');
//       } else if (personalMovieDB.count >= 30) {
//          console.log('Вы киноман');
//       } else {
//          console.log('Ошибка!');
//       }
//    },
//    showMyDB: function (hidden) {
//       if (!hidden) {
//          console.log(personalMovieDB);
//       }
//    },
//    toggleVisibleMyDB: function() {
//       if (personalMovieDB.privat) {
//          personalMovieDB.privat = false;
//       } else {
//          personalMovieDB.privat = true;
//       }
//    },
//    writeYourGenres: function() {
//       for(let i = 1; i <=3; i++) {
//          let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
//          if (genre === '' || genre == null) {
//             console.log('Вы ввели некорректные данные или не ввели их вообще');
//             i--;
//          } else {
//             personalMovieDB.genres[i - 1] = genre;
//       }
//          personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//          });
//       }
//    }
// };

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

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'LJ', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'Fb'];

//       console.log(internet);

//       function log(a, b, c) {
//          console.log(a);
//          console.log(b);
//          console.log(c);
//       }
//       const num = [2, 5, 7];

//       log(...num);

// const array = ['a', 'b'];

// const array2 = [...array];

// Основы ООП, прототипно-ориентированное наследование

// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//       health: 400,
//       armor: 100,
//       sayHello: function() {
//             console.log('Hi');
//       }
// };

// const joe = {
//       health: 100
// };

// joe.__proto__ = soldier;

// const joe = Object.create(soldier);

// Object.setPrototypeOf(joe, soldier);

// joe.sayHello();

// Динамическая типизация

// console.log([ ] + false - null + true); //NaN
// console.log(typeof([ ] + false + null + true)); //String

// let y = 1;
// let x = y = 2;
// console.log(x);

// console.log("Ёжик" < "Яблоко");

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() { 
//       console.log(`hello ${this.name}`);
//    };
// }

// User.prototype.exit = function() {
//    console.log(`Пользователь ${this.name} ушёл`);
// };

// const ivan = new User('Ivan', 22);

// const hector = new User('Hector', 33);

// console.log(ivan);
// console.log(hector);

// ivan.exit();
// hector.hello();

// function showThis(a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a + b
//    }
//    console.log(sum());
// }
// showThis(9,45);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//       function shout() {
//          console.log(this);
//       }
//       shout()
//    }
// };
// obj.sum();

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//       this.hello = function() { 
//       console.log(`hello ${this.name}`);
//    };
// }

// const ivan = new User('Ivan', 22);

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: 'John'
// };

// sayName.call(user, 'Constantine');
// sayName.apply(user, ['Wick']);

// function count(num) {
//    return this*num;
// }

// const double = count.bind(2);

// console.log(double(223));
// console.log(double(22322));

// class Rectangle {
//    constructor(h, w) {
//       this.height = h;
//       this.width = w;
//    }
//    calcArea() {
//       return this.width * this.height;
//    }
// }

// class ColoredRectangleWithText extends Rectangle {
//    constructor (h, w, text, bgColor) {
//       super(h, w);
//       this.text = text;
//       this.bgColor = bgColor;
//    }
//    showMyProps() {
//       console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//    }
// }

// const square = new Rectangle(10, 50);

// const shape = new ColoredRectangleWithText(12, 20, 'Я сферка', '#000000');

// console.log(square.calcArea());

// shape.showMyProps();
// console.log(shape.calcArea());

// const log = function(a,b, ...rest) {
//    console.log(a, b, rest);
// };

// log('front', 'end', 3443, 'hook');

// function calcOrDouble(number, basis = 2) {
//    console.log(number * basis);
// }

// calcOrDouble(4);

// const persone = {
//    name: 'Alex',
//    tel: '+43453453',
//    parents: {
//       mom: 'Olufta',
//       dad: 'Mikel'
//    }
// };
// console.log(persone);
// console.log(JSON.stringify(persone));
// const clone = JSON.parse(JSON.stringify(persone));

// console.log('Запрос данных....');

// const req = new Promise(function(resolve, reject) {
//    setTimeout(() => {
//       console.log('Подготовка данных....');

//       const product = {
//          name: 'TV',
//          price: 3234,
//       };
      
//       resolve(product);

//    }, 2000);
// });

// req.then((product) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          product.status = 'order';
//          resolve(product);
//       }, 2000);
//    }).then(data => {
//       data.modify = true;
//       return data;
//    }).then(data => {
//       console.log(data);
//    }).catch(() => {
//       console.error('произошла ошибка');
//    }).finally(() => {
//       console.log('finally');
//    });
// });


// const test = time => {
//    return new Promise(resolve => {
//       setTimeout(() => resolve(), time*1000);
//    });
// };

// test(1).then(() => {
//    console.log('1sec');
// });
// test(2).then(() => {
//    console.log('2sec');
// });

// Promise.all([test(1), test(2)]).then(() => {
//    console.log('All');
// });

// Promise.race([test(1), test(2)]).then(() => {
//    console.log('All2');
// });

//Перебор массивов

// const names = ['Alex', 'Alexa', 'Volan', 'Voldemort', 'Ass', 'Buka', 'Rubibden'];

// const namesFiltered = names.filter((name) => {
//    return name.length > 6;
// });

// console.log(namesFiltered);

// let answers = ['PrtRo', 'AFFONya', 'Eblomet'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// const some = ['4', 'qwerty', 'hhu'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'string'));

// const arr = [4, 3, 5, 1, 12, 6];

// const res = arr.reduce((sum, current) => sum + current, 5);

// console.log(res);

// const arr = ['beer', 'vodka', 'wine'];

// const res = arr.reduce((sum, current) => {
//    return (`${sum}, ${current}`);
// });

// console.log(res);

// const obj = {
//    ivan: 'persone',
//    ann: 'persone',
//    dog: 'animal',
//    cat: 'animal',
//    shark: 'fish'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

// localStorage.setItem('number', '556');
// console.log(localStorage.getItem('number'));

// new RegExp('pattern', 'flags');
// /pattern/f

// const pass = prompt('Enter your password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

// const ans = prompt('enter digit'),
// reg = /\d/ig;

// console.log(reg.test(ans));

// const str = 'my name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// const persone = {
//    name: 'Ivan',
//    age: 30,

//    get userAge() {
//       return this.age;
//    },

//    set userAge(num) {
//       this.age = num;
//    }
// };

// console.log(persone.userAge = 819); //819
// console.log(persone.userAge); //819
// console.log(persone.age); //819

// class User {
//    constructor(name, age) {
//       this.name = name;
//       this._age = age;
//    }

//    #surname = 'Durak';

//    say = () => {
//       console.log(`Имя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
//    }

//    get age() {
//       return this._age;
//    }

//    set age(age) {
//       if (typeof(age) === 'number' && age > 18 && age < 99) {
//          this._age = age;
//       } else {
//          console.error('Недопустимое значение возраста');
//       }
//    }
// }

// const Ivan = new User('Ivan' , 33);
// Ivan.surname = 'ggt'
// Ivan.say();

// try {
//    console.log('ok');
//    console.log(tt); //ошибка
//    console.log('ok');
// } catch(error) {
//    console.error(error.message);
// } finally {
// //выполняется в любом случае
// }
// console.log('script works ok'); //выполнится