#!/usr/bin/node


function.Bomb(){
  this.message='Bomb';
}
Bomb.prototype.explode = function(){
  console.log(this.message);
};
