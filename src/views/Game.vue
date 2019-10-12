<template>
  <div class="game">
    <div class="score-dashboard">
      <div class="score-dashboard__score">{{ budget }}</div>
      <div class="score-dashboard__user">{{ userName }}</div>
    </div>

    <div class="current-location">
      <div class="current-location__lead">You're currently in</div>
      <div class="current-location__location">{{ currentCountry }}</div>
    </div>
    <CharacterIcon state="sprint" color="blue" />
    <div class="lead">Where to next?</div>

    <transition-group name="travel-list" tag="div" class="travel-options">
      <div
        v-for="(travelItem, index) in travelItems"
        v-bind:key="index"
        class="travel-options__option"
        @click="remove(index)"
      >
        <div class="travel-options__option__location">{{ travelItem.location }}</div>
        <div class="travel-options__option__price">&euro;{{ travelItem.price }}</div>
      </div>
    </transition-group>

    <div class="loader" :style="`background-color: ${isLobbyReady ? '#23f12b' : '#f44336'}`"></div>

    <div class="countdown">{{ countdown }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import CharacterIcon from '@/components/CharacterIcon.vue';

const TIME_LIMIT = 25;

// Starting game state
const GEM_LOCATION = 'Spain';
const ORIGIN = 'BCN';

export default {
  sockets: {
    client_handle_launch_game_event(data) {
      console.log(data.gem_location);
    },
  },
  components: {
    CharacterIcon,
  },
  created() {
    this.decrementCountdown();
    this.flightNumber = this.$route.params.flightNumber;
    this.userName = this.$route.params.userName;
    // Set up travel list for first time
    this.updateTravelList(ORIGIN);
  },
  data() {
    return {
      flightNumber: '',
      userName: '',
      countdown: TIME_LIMIT,
      budget: 10000,
      currentCountry: GEM_LOCATION,
      isLobbyReady: false, // until changed to true
      travelItems: [
        {
          location: 'location',
          price: '100,00',
        },

        {
          location: 'location',
          price: '260,00',
        },
      ],
    };
  },
  methods: {
    remove(index) {
      const selectedCity = this.travelItems[index];
      // this.travelItems.splice(index, 1);
      console.log(
        'CODE TO USE FOR NEXT SEARCH: ',
        this.travelItems[index].skyscannerCode,
      );
      this.budget -= selectedCity.price;
      this.currentCountry = selectedCity.location;
      this.updateTravelList(selectedCity.skyscannerCode);
    },
    decrementCountdown() {
      setTimeout(() => {
        this.countdown = this.countdown - 1;
        if (this.countdown >= 0) {
          this.decrementCountdown();
        } else {
          // Game lost becuase time ran out.
          this.$router.push({
            name: 'winLose',
            params: { isWinner: false },
          });
        }
      }, 1000);
    },
    async updateTravelList(origin) {
      // create the date to run the games, tomorrows date
      const newDate = new Date();
      const day = newDate.getDate() + 1;
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();

      // output the date in teh correct format
      const date = `${year}-${month}-${day}`;

      // creates the name of the location so it can be used to retieve data
      const startingLocation = `${origin}-sky`;

      const request = `https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browsequotes/v1.0/UK/GBP/en-GB/${startingLocation}/anywhere/${date}`;

      axios
        .get(request, {
          headers: {
            'api-key': 'skyscanner-hackupc2019',
          },
        })
        .then((response) => {
          console.log('thennnn');
          if (response.data.Quotes) {
            // locations are saved in this variable
            const places = response.data.Places;

            // the chosen flights are saved in this variable
            const flights = response.data.Quotes;

            // the chosen carrier
            const carrier = response.data.Carriers;

            // creats a random number and finds the flight address
            // that is linked to this flight number
            var random = Math.floor(Math.random() * flights.length);
            const flight_1 = flights[random];
            console.log(flight_1);
            const destinationId_1 = flight_1.OutboundLeg.DestinationId;
            const carrier_1 = flight_1.OutboundLeg.CarrierIds;
            let cost_1 = flight_1.MinPrice;

            // if courier is Vueling, do not charge
            if (carrier_1 == '1865') {
              cost_1 = 0;
            }

            var random = Math.floor(Math.random() * flights.length);
            const flight_2 = flights[random];
            const destinationId_2 = flight_2.OutboundLeg.DestinationId;
            const carrier_2 = flight_2.OutboundLeg.CarrierIds;
            let cost_2 = flight_2.MinPrice;
            if (carrier_2 == '1865') {
              cost_2 = 0;
            }

            // array which holds the countries and the prices of teh tickets
            const outputCountries = {};

            let destination_1;
            let destination_2;

            // loop to find the details of the destination country we are going to
            for (let i = 0; i < places.length; i++) {
              if (places[i].PlaceId == destinationId_1) {
                destination_1 = places[i];
                // finds skyscanner code
                var skyscannerCode_1 = destination_1.SkyscannerCode;
              }

              if (places[i].PlaceId == destinationId_2) {
                destination_2 = places[i];
                // finds skyscanner code
                var skyscannerCode_2 = destination_2.SkyscannerCode;
              }
            }

            /* var outputCountries = `${'{ "destinations" : ['
          + '{ "location": '}${destination_1.CountryName},"skyscannerCode":${
          skyscannerCode_1} "price":${cost_1} },`
          + `{ "location": ${destination_2.CountryName},"skyscannerCode":${
            skyscannerCode_2} "price":${cost_2} } ]}`; */

            const destinations = [
              {
                location: destination_1.CountryName,
                skyscannerCode: skyscannerCode_1,
                price: cost_1,
              },
              {
                location: destination_2.CountryName,
                skyscannerCode: skyscannerCode_2,
                price: cost_2,
              },
            ];

            console.log(destinations);

            this.travelItems = destinations;
          }
        })
        .catch((error) => {
          console.log('An error occured.', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.4;
}

.loader {
  width: 20px;
  height: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
}

.travel-list-item {
  transition: all 3s;
  display: inline-block;
  margin-right: 10px;
}
.travel-list-enter, .travel-list-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all 3s;
  transform: translateY(30px);
}
.travel-list-leave-active {
}

.game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.score-dashboard {
  &__score {
    font-size: 34px;
  }

  &__user {
    font-size: 14px;
    opacity: 0.5;
  }
}

.current-location {
  margin: 25px 0;

  .current-location__lead {
    opacity: 0.3;
  }

  .current-location__location {
    font-size: 25px;
    font-weight: bold;
  }
}

.lead {
  margin-top: 10px;
  opacity: 0.3;
}

.travel-options {
  width: 100%;

  &__option {
    &,
    &:link,
    &:visited {
      background-color: #ffcc00;
      color: #ffffff;
      padding: 20px 30px;
      border-radius: 8px;
      text-align: left;
      max-width: 250px;
      margin: 10px auto;
      width: 100%;
      border: none;
    }

    &:hover,
    &:active {
      background-color: #deb100;
      transition: 0.2s ease;
    }

    &__location {
      font-size: 20px;
      font-weight: bold;
    }

    &__price {
      font-size: 14px;
      font-weight: bold;
      opacity: 0.75;
    }
  }
}
</style>
