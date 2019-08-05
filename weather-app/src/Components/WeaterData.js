import React from 'react';
import Extrainfo from './WeatherExtraInfo';
import Temp from './WeatherTemperature';

const WeatherData = () => (
            <div>
                <Temp></Temp> 
                <Extrainfo humidity={80} wind={"20 m/s"}></Extrainfo>
            </div>);


export default WeatherData;