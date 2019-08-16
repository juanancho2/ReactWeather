import React from 'react';
import Extrainfo from './WeatherExtraInfo';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,FOG,WINDY} from './../Constants/Weather';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
            <div>
                <WeatherTemperature 
                       temperature={20} 
                       weatherState={CLOUD}
                /> 
                <Extrainfo humidity={80} wind={"20 m/s"}></Extrainfo>
            </div>);


export default WeatherData;