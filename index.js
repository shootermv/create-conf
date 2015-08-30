#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var myData = {
  "current":{
    "host": "localhost",
    "port": "8000"
  },
  "qa":{
    "host": "some.com",
    "port": "8083"
  },
  "local":{
    "host": "localhost",
    "port": "80"
  },
  "mocks":{
    "host": "localhost",
    "port": "8000"
  }
}

var program = require('commander');

var outputFilename = 'config.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 