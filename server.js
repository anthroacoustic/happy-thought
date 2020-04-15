
//import express to create the server
var express = require('express');
var app = express();
//var server = app.listen('80');
//let heroku set the port
var server = process.env.PORT || 8080;

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

  //Recieves happy thought from client.
  function emitHappyThought(happyThought){
    io.sockets.emit('happyThoughtFrom', happyThought)
  }

  function mouseMsg(data){
    console.log(data);
    socket.broadcast.emit('mouse', data);
    //if you want to include the client that sent the data.
    //io.sockets.emit('mouse', 'data');
  }
}

//Node Mom makes it so you don't have to restart the server every time...
