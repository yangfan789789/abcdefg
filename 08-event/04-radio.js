#!/usr/bin/node

const EventEmitter = require('events').EventEmitter,
function Radio(station){

  var self = this;

  for(var m in EventEmitter.prototype){
    self[m] = EventEmitter.prototype[m];
  }

  setTimeout(()=>{
    self.emit('open',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

module.exports = Radio;
