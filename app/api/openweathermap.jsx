var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4551f6b65ac68f87ddf5dd65ff3384bb&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error (response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, function (error) {
            throw new Error ('There was an error fetching weather for this city');
        });
    }
}