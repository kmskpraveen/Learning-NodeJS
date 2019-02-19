// Run this code in Terminal through command: node 2_app.js
// ============================================================================
// Code for videos 11,12
// ============================================================================

// Demo for Object Factory
var adam = require('./2_adam');
var richards = require('./2_richard');

// Demo for Core Modules, which are modules that are built-in to NodeJS
// fs is a file system module which have the ability to read,write, delete files
var fs = require('fs');
// Note: for custom modules import requires './',
// but for core modules it is no need.

// creates a text file named sample
fs.writeFileSync("sample.txt","Hello world, This is a sample text");

// reades a text file named sample
console.log(fs.readFileSync("sample.txt").toString());

// path module is good when we are working with file paths
var path = require('path')

var webSite1 = "Desktop/adam//abc/index.html";
var webSite2 = "Desktop/richards/abc/index.html";

// normalizes slashes depending on the OS
console.log(path.normalize(webSite1));

// code for directory, base, and extension for a file path
console.log("file path: "+webSite2);
console.log("dirname: "+path.dirname(webSite2));
console.log("basename: "+path.basename(webSite2));
console.log("extname: "+path.extname(webSite2));

// SetInterval runs repeatedly but setTimeout runs once.
// prints "Hello world!" for every 2 seconds
// setInterval(function(){
//     console.log("Hello world!");
// },2000);

// prints directory of the current file
console.log("dirname: "+__dirname);
// prints path of the current file
console.log("filename: "+__filename);