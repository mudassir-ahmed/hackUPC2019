# HackUPC2019
The Dinos' luggages have been misplaced. Each family has lost their luggage, join one of the families and travel the world to help them find their precious possessions.
This is an online multiplayer game which was created to compete in HackUPC 2019 in Barcelona, Spain. The game was created to compete in a challenge offered by Vueling: "to build a boarding queue entertainment system which must multiplayer and co-operative" and in a challenge offered by Skyscanner which let us use their API to build an innovative application. The objective of the game is to, in teams, search for the Dinos' lost luggage accross the planet. The first family to find their luggae will be victorious. The players start off with an initial budget and can travel from country to country by taking one of two reccomended flights from the country they are currently in. The flight information and pricing is retreived from the Skyscanner API, so this app uses live flight data. If none of the families have found their luggage within a minute and a half it will be lost forever, and all players lose.

## What challenges did we run into?
With no experience with sockets and building multiplayer games, we had issues with understanding the design of a multiplayer game and various issues that were resolved with sockets.

## What did we learn?
We had various levels of experience with the technology we used. But none of us had worked with sockets (and socket.io) or making a multiplayer game. It was a challenge right from the start to build this application, but we managed to build a working application. For some of us, we had very little web development experience and had to learn a lot in order to build this project.

## What is next for this project?
The game can be extended in several ways. By for example further improving the algorithm for reccomending flights or making it so that users of the same flight can join the same lobby by inputing their flight numbers.

## What would we improve on for next time?
We would allocate more testing time to the game itself. Use that time then to make it more fun and more engaging for people.

## Accomplishments that we are proud of.
Successfuly incorporating all of the elements for the web application and combining it into a simple and comprehensive UI.

## Project setup on local server
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
