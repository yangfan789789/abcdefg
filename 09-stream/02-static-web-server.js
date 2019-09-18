#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  var filename = __dirname + req.url;
  console.log(filename);
  fs.createReadStream(filename).pipe(res);
  //fs.readFile(filename,function(data){})
  //res.end(fs.readFileSync(filename).toString('utf8'));
}).listen(8080);

