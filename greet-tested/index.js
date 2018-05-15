'use strict';

// Pull in our 'hello' module
const greet = require('./lib/greet.js');
const basicMath = require('./lib/arithmetic.js');

// Do something simple using its interface
console.log( greet.sayHello('Ben') );
console.log( basicMath.add(1,2) );