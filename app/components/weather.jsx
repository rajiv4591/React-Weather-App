var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        var vm = this;
        vm.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(function (response) {
            vm.setState({
                location: location,
                temp: response,
                isLoading: false
            });
        }, function (error) {
            vm.setState({
                isLoading: false
            });
            alert(error);
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage city={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm getWeatherDetails={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;