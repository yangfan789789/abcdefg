#!/usr/bin/node
const log = console.log;

log('CPU:', process.arch);
log('OS:',process.pidlatform);
log('PID:',process.pid);
log('execPath:',process.execPath);
log('node.js ver:',process.version);
log('uid:',process.uid);
log('gid:',process.gid);
/*
process.studin.on('data',function(data){
  log(data);
})*/
 

