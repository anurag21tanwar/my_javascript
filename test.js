'use strict';

console.log('Hi');

let firstName = 'ang';
const lastName = 'tang';
console.log(firstName + lastName);

let ourPlanetName;
const currentUserName = '';
console.log(ourPlanetName, currentUserName);

let x = 123,
y = Infinity,
z = NaN;
const bigInt = 1234567890123456789012345678901234567890n;
console.log(x, y, z, bigInt);

let m = "Hello";
let n = 'World';
let o = `${m} ${n}`;
console.log(m, n, o);

let a = true;
let b = false;
console.log(a, b);

let c = null;
let d = undefined;
console.log(c, d);
console.log(typeof undefined,
typeof 0,
typeof 10n,
typeof true,
typeof "foo",
typeof Math,
typeof null,
typeof console.log);