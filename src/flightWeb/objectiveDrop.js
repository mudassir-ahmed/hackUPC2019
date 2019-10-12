const axios = require('axios')

var newDate = new Date();
var day = newDate.getDate() + 1;
var month = newDate.getMonth() + 1;
var year = newDate.getFullYear();
var date = (year + "-" + month + "-" + day);

const getFlights = () => {
  var request = 'https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browsequotes/v1.0/UK/GBP/en-GB/BCN-sky/anywhere/' + date;
  console.log(request);
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

const countFlights = async () => {
  const flights = getFlights()
    .then(response => {
      if (response.data.Quotes) {
        //all locations are saved to this variable
        var places = response.data.Places;

        //flights loaded are saved here
        var flights = response.data.Quotes;

        //generate random number
        var random = Math.floor(Math.random()*(flights.length));

        //chosen flight for the object
        var objectFlight = flights[random];
        console.log(objectFlight);

        //find destination
        var objectLocationId = objectFlight.OutboundLeg.DestinationId;

        for (var i = 0; i < places.length; i++) {
          if(places[i].PlaceId == objectLocationId){
            var objectLocation = places[i];
            console.log("The bone is in " + objectLocation.CountryName);
            console.log(places[i]);
          }
        }
      }
    })
    .catch(error => {
      console.log(error)
  })
}

countFlights();
