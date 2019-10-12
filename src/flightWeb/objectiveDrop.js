const axios = require('axios');

const newDate = new Date();
const day = newDate.getDate() + 1;
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear();
const date = (`${year }-${month}-${day}`);

const getFlights = () => {
  const request = `https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browsequotes/v1.0/UK/GBP/en-GB/BCN-sky/anywhere/${
    date}`;
  try {
    return axios.get(request, {
      headers: {
        'api-key': 'skyscanner-hackupc2019',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const countFlights = async () => {
  const flights = getFlights()
    .then((response) => {
      if (response.data.Quotes) {
        // all locations are saved to this variable
        const places = response.data.Places;

        // flights loaded are saved here
        const flights = response.data.Quotes;

        // generate random number
        const random = Math.floor(Math.random() * (flights.length));

        // chosen flight for the object
        const objectFlight = flights[random];

        // find destination
        const objectLocationId = objectFlight.OutboundLeg.DestinationId;

        for (let i = 0; i < places.length; i++) {
          if (places[i].PlaceId == objectLocationId) {
            const objectLocation = places[i];
            console.log(`The object is in ${  objectLocation.CountryName}`);
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

countFlights();
