import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, SNOW, WINDY } from './../constants/weathers'

const getWeatherIcon = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return CLOUD;
        case CLOUDY:
            return CLOUDY;
        case SUN:
            return SUN;
        case SNOW:
            return SNOW;
        case WINDY:
            return WINDY;
        default:
            return weatherState;
    }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {<WeatherIcons name={getWeatherIcon(weatherState)} size="2x"></WeatherIcons>}
        <span>{`${temperature} C`}</span>
    </div>
);

export default WeatherTemperature;


