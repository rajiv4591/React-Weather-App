var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var cityName = this.refs.cityName.value;
        if(cityName.length > 0) {
            this.refs.cityName.value = "";
            this.props.getWeatherDetails(cityName);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="cityName" />
                <button className="button expanded hollow">Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;