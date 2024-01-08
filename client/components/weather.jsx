import React, {useState, useEffect} from 'react'; 


const Weather = () => {
    const [weather, showWeather] = useState();

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=348c3c87a6fc4cfc838200532240601&q=New York&aqi=no')
        .then(response => response.json())
        .then(data => {
            const weatherNow = [];
            weatherNow.push(
            <div id='fc'> 
                <p> {data.current.temp_f} / {data.current.temp_c} </p> 
            </div>);
            showWeather(weatherNow);
        })
        .catch(error => {
            return console.log(JSON.stringify(error));
        })
    }, []);

    return (
        <div> {weather} </div>
    );
};

export default Weather;



/* Using React to obtain weather data */

/** 
 * import React, {useState, useEffect} from 'react';
 * const [weather, showWeather] = useState();

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=348c3c87a6fc4cfc838200532240601&q=New York&aqi=no')
        .then(response => response.json())
        .then(data => {
            const weatherNow = [];
            weatherNow.push(<div id={data.current.temp_f}> <p> {data.current.temp_f} </p> </div>);
            weatherNow.push(<div id={data.current.temp_c}> <p> {data.current.temp_c} </p> </div>);
            showWeather(weatherNow);
        })
        .catch(error => {
            return console.log(JSON.stringify(error));
        })
    }, []);

    return (
        <div> {weather} </div>
    );
*/

/* Attempt with fetchBaseQuery & createAsyncThunk */
/**
 * import { useDispatch, useSelector } from 'react-redux';
 * import { fetchWeather } from '../reducers/weatherSlice.js';
 * import { useGetCurrentQuery } from '../reducers/weatherSlice.js';
 * 
 * const { temp_f } = useGetCurrentQuery();
    console.log(temp_f);

    // read weather variable from weather reducer
    // const { weather, loading, error } = useSelector(state => state.weather);
    // console.log(weather);
    // console.log(loading);

    // // calling redux action using dispatch hook
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchWeather());
    // }, []);

    return (
        <div> 
            {!loading && weather.length > 0 ? {weather} : []}

            <p>'apple'</p>
        </div>
    );
 */