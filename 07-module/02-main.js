#!/usr/bin/node

/*const p = require('./02-export-var.js');console.dir(module);
console.log(p);*/

/*const circle =require('./02-export-function');
console.log('r=10,circle area:%d',circle(10).area());

console.log('r=10,circle circumference:%d',circle(10).circumference(10));

console.dir(module);*/

const circle = require('./02-export-object2.js');

console.log('\ndiameter:\t',circle.diameter(10));
console.log('\ncircumference:\t',circle.circumference(10));
console.log('\narea:\t\t',circle.area(10));
