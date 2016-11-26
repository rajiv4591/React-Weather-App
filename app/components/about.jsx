var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p> This is a weather application built on React. It gives you the current temperature of the city you enter</p>
            <p>Here are some tools that are used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used:
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - This API was used to search for weather by city name.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;