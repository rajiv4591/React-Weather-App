var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <p>It is {temp} in {city}</p>
    );
};

module.exports = WeatherMessage;