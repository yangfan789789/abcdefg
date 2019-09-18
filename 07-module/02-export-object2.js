#!/usr/bin/node

module.exports.diameter = (radius) => 2*radius;
module.exports.circumference = (radius) => Math.PI*2*radius;
module.exports.area= (radius) => Math.PI*radius*radius;

console.dir(module);
