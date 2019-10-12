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

const players = {};

io.on('connection', (socket) => {
  players[socket.id] = socket.id;

  // Some debugging
  console.log();
  // console.log('made a socket connection', socket.id);
  console.log(players);
  console.log();


  // Remove disconnected player from players.
  socket.on('disconnect', () => {
    delete players[socket.id];
  });

  socket.on('server_travel_event', (data) => {
    // io.sockets refers to all connected sockets
    io.sockets.emit('client_handle_travel_event',
      `Server said: Someone with the id has traveled to ${data.location}`);

    // socket.broadcast.emit() emits to all connections except the triggerer
  });
});
