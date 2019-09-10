#!/usr/bin/node

var msg = ['name','email','mobile'];
var usr={},i=0;
console.log(msg[0]+':');
process.stdin.on('data',function(data){
  usr[msg[i]] = data.slice(0,data.legth-1).toString('utf8');
  console.log(msg[i++]+':');
});

process.stdin.on('end')
