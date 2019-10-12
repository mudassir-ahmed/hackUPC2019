const axios = require('axios');

// Data retireved from the API is used in thi section of the code
async function countFlights(origin) {
  // create the date to run the games, tomorrows date
  const newDate = new Date();
  const day = newDate.getDate() + 1;
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  // output the date in teh correct format
  const date = (`${year}-${month}-${day}`);

  // creates the name of the location so it can be used to retieve data
  const startingLocation = `${origin}-sky`;

  const request = `https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browsequotes/v1.0/UK/GBP/en-GB/${
    startingLocation}/anywhere/${date}`;


  axios.get(request, {
      headers: {
        'api-key': 'skyscanner-hackupc2019',
      },
    })
    .then((response) => {
      if (response.data.Quotes) {
        // locations are saved in this variable
        const places = response.data.Places;

        // the chosen flights are saved in this variable
        const flights = response.data.Quotes;

        // the chosen carrier
        const carrier = response.data.Carriers;

        // creats a random number and finds the flight address
        // that is linked to this flight number
        var random = Math.floor(Math.random() * (flights.length));
        const flight_1 = flights[random];
        const destinationId_1 = flight_1.OutboundLeg.DestinationId;
        const carrier_1 = flight_1.OutboundLeg.CarrierIds;
        let cost_1 = flight_1.MinPrice;

        // if courier is Vueling, do not charge
        if (carrier_1 == '1865') {
          cost_1 = 0;
        }

        var random = Math.floor(Math.random() * (flights.length));
        const flight_2 = flights[random];
        const destinationId_2 = flight_2.OutboundLeg.DestinationId;
        const carrier_2 = flight_2.OutboundLeg.CarrierIds;
        let cost_2 = flight_2.MinPrice;
        if (carrier_2 == '1865') {
          cost_2 = 0;
        }

        // array which holds the countries and the prices of teh tickets
        const outputCountries = {};

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

        const destinations = [{
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
      }
    })
    .catch((error) => {
      console.log('An error occured.', error);
    });
}

countFlights('SSH');
