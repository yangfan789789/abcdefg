#!/usr/bin/node

const pi = Math.PI;

var circle = {
  'area': function(radius){
    return Math.PI*radius*radius;
  },
  'circumference':function(radius){
    return 2*Math.PI*radius;
  }
  'diameter':function(radius){
    return 2*radius;
  }
};

console.dir(module);
