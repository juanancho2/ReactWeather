import React from 'react';
import Location from './Location';
import WeatherData from './WeaterData';

const weatherLocation = () => {
    return (<div>
        <Location city={"Popayan"}></Location>
        <WeatherData></WeatherData>
    </div>);
} ;

 export default weatherLocation;