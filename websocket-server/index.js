const express = require('express');
const socket = require('socket.io');
const Player = require('./player.js');

console.log();

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

// Color constants for teams
const TEAMS = ['red', 'blue'];

// Max players
const MAX_PLAYERS = 2;

// Current player team assignment index... will always be 0 or 1
// which can be mapped to the two teams we have.
function teamToUse() {
  console.log(Object.keys(players).length);
  return TEAMS[Object.keys(players).length % TEAMS.length];
}


io.on('connection', (socket) => {
  // Create the player

  if (Object.keys(players).length < MAX_PLAYERS) { // how we limit the players
    const player = new Player('john', 'Spain', teamToUse());
    players[socket.id] = player;
    console.log('this ran');
  }

  if (Object.keys(players).length === MAX_PLAYERS) {
    io.sockets.emit('client_handle_full_lobby',
      'Server said that game should begin shortly!');
  }

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
