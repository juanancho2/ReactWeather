import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,FOG,WINDY} from './../Constants/Weather';
import PropTypes from 'prop-types';

const icons =
{    
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "sunny-day",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [FOG]: "day-fog",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
   const icon= icons[weatherState];

   if(icon) 
      return <WeatherIcons name={icon} size="2x"/>;
   else
      return <WeatherIcons name={"day-sunny"} size="2x" />;
};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
        getWeatherIcon(weatherState)
        }    
        <span>{ `${temperature} C°` }</span>    
    </div>
);

WeatherTemperature.propTypes = {
temperature: PropTypes.number.isRequired,
weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;