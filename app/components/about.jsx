var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p> This is a weather application built on React. It gives you the current temperature of the city you enter</p>
            <p>Here are some tools that are used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used:
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - This API was used to search for weather by city name.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/" target="_blank">Foundation</a> - Foundation css framework was used for stylings.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;