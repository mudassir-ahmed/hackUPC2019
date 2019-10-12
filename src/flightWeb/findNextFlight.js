const axios = require('axios')

//create the date to run the games, tomorrows date
var newDate = new Date();
var day = newDate.getDate() + 1;
var month = newDate.getMonth() + 1;
var year = newDate.getFullYear();

//output the date in teh correct format
var date = (year + "-" + month + "-" + day);

//reads the input and saves it
const args = process.argv.slice(2);
var origin = args[0];

//creates the name of the location so it can be used to retieve data
var startingLocation = origin + '-sky';

//this part of the code accesses the api using the api key
const getFlights = () => {
  var request = 'https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browsequotes/v1.0/UK/GBP/en-GB/' + startingLocation + '/anywhere/' + date;
  try {
    return axios.get(request, {
      headers: {
        'api-key': 'skyscanner-hackupc2019'
      }
    })
  } catch (error) {
    console.error(error)
  }
}

//Data retireved from the API is used in thi section of the code
const countFlights = async () => {
  const flights = getFlights()
    .then(response => {
      if (response.data.Quotes) {
        //locations are saved in this variable
        var places = response.data.Places;

        //the chosen flights are saved in this variable
        var flights = response.data.Quotes;

        //the chosen carrier
        var carrier = response.data.Carriers;

        //creats a random number and finds the flight address
        //that is linked to this flight number
        var random = Math.floor(Math.random()*(flights.length));
        var flight_1 = flights[random];
        var destinationId_1 = flight_1.OutboundLeg.DestinationId;
        var carrier_1 = flight_1.OutboundLeg.CarrierIds;
        var cost_1 = flight_1.MinPrice;

        //if courier is Vueling, do not charge
        if (carrier_1 == "1865"){
          cost_1 = 0;
        }

        var random = Math.floor(Math.random()*(flights.length));
        var flight_2 = flights[random];
        var destinationId_2 = flight_2.OutboundLeg.DestinationId;
        var carrier_2 = flight_2.OutboundLeg.CarrierIds;
        var cost_2 = flight_2.MinPrice;
        if (carrier_2 == "1865"){
          cost_2 = 0;
        }

        //array which holds the countries and the prices of teh tickets
        var outputCountries = {}

        //loop to find the details of the destination country we are going to
        for (var i = 0; i < places.length; i++) {

          if(places[i].PlaceId == destinationId_1){
            destination_1 = places[i];
            //inputs the data into the array
            outputCountries[destination_1.CountryName] = cost_1;
          }
          if(places[i].PlaceId == destinationId_2){
            destination_2 = places[i];
            //inputs the data into the array
            outputCountries[destination_2.CountryName] = cost_2;
          }
        }
        console.log(outputCountries);
      }
    })
    .catch(error => {
      console.log("please check your internet connection")
    })
}

countFlights();
