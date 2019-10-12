const express = require('express');
const socket = require('socket.io');

// App setup.
const app = express();

// Set up a server.
const server = app.listen(4000, () => {
  console.log('listening to requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log('made a socket connection', socket.id);


  socket.on('test', (data) => {
    // io.sockets refers to all connected sockets
    io.sockets.emit('test', `Server received ${data}`);

    // socket.broadcast.emit() emits to all connections except the triggerer
  });

  socket.on('emit_method', (data) => {
    // io.sockets refers to all connected sockets
    io.sockets.emit('customEmit', `Server received ${data}`);

    // socket.broadcast.emit() emits to all connections except the triggerer
  });


  socket.on('travel', (data) => {
    // io.sockets refers to all connected sockets
    io.sockets.emit('travelHandle', `Someone with the id has traveled to ${data.location}`);

    // socket.broadcast.emit() emits to all connections except the triggerer
  });
});
