//import pfjs
var pjs = require('./public/libraries/p5');


//import express to create the server
var express = require('express');
var app = express();

//let heroku set the port
var port = process.env.PORT || 8080;
var server = app.listen(port);
let n = 1;


//create CloudPos

let cloudsPosMap = [];

function CloudPos(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.floatingOffset = Math.floor(Math.random() * 1000);
}


//tell the server to serve everything that is in the public folder
app.use(express.static('public'));
console.log("my socket server is running")

//import socket.io to create the socket 'io'
var socket = require('socket.io');
var io = socket(server);

//io listens for events and performs functions when it hears them
// when the 'connection' event happens, I want it perform 'newConnection
io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);

  socket.on('happyThought', emitHappyThought);
  
  socket.on('cloudUpdate', addCloudPosition);

  //Recieves happy thought from client.
  function emitHappyThought(happyThought){
    io.sockets.emit('happyThoughtFrom', happyThought)
  }
  
  function addCloudPosition(cloudId){
    cloudsPosMap.push(new CloudPos(cloudId, 100, 100));
    console.log(cloudsPosMap);
    
  }

  function mouseMsg(data){
    console.log(data);
    socket.broadcast.emit('mouse', data);
    //if you want to include the client that sent the data.
    //io.sockets.emit('mouse', 'data');
  }
}

setInterval(drawing, 30);

function moveClouds(){
  
  for (cloud of cloudsPosMap){
    var floating = map(noise(this.floatingOffset), 0,1, -.5, .5);
    cloud.x += .5;
    cloud.y += floating;
    cloud.floatingOffset += .001;
  }
    
  
}


function drawing(){
 
}



//Node Mom makes it so you don't have to restart the server every time...
