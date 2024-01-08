import React, {useState, useEffect} from 'react'; 


const Weather = () => {
    const [weather, showWeather] = useState();
    const rawDate =new Date().toDateString();
    

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=348c3c87a6fc4cfc838200532240601&q=new york &aqi=no')
        .then(response => response.json())
        .then(data => {
            const weatherNow = [];
            weatherNow.push(
            <div className='weatherData' key='weather'> 
                <p>{`Date: ${rawDate}`}</p>
                <p><span className='weatherText' id='city'>City: </span><span>{data.location.name} </span></p> 
                <img src={data.current.condition.icon}/>
                <p><span className='weatherText' id='weather'>Weather: </span><span>{data.current.condition.text} </span></p> 
                <p><span className='weatherText' id='tempfahrenheit'>Temperature: </span><span>{`${data.current.temp_f} °F`}/ {`${data.current.temp_c} °C`} </span></p>  
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

    /////////future forecast
//     fetch('http://api.weatherapi.com/v1/forecast.json?key=6d5b69770cb5476eb14144120240601&q=new york&days=3')
//     .then(response => response.json())
//     .then(weatherData => {
//          console.log('location:', weatherData.location.name);
//          console.log('localDate:', weatherData.location.localtime.slice(0, -5));
//          console.log('currentWeather:', weatherData.current.condition.text);
//          console.log('weatherIcon:', weatherData.current.condition.icon)
//          console.log('currentTempFahrenheit:', `${weatherData.current.temp_f} °F`);
//          console.log('currentTempCelsius:', `${weatherData.current.temp_c} °C`);
//          console.log('currentHumidity:', weatherData.current.humidity);
//          console.log('tomorrowDate:',  weatherData.forecast.forecastday[0].date);
//          console.log('tomorrowWeather:',  weatherData.forecast.forecastday[0].day.condition.text);
//          console.log('tomorrowWeatherIcon:',  weatherData.forecast.forecastday[0].day.condition.icon);
//          console.log('tomorrowTempFahrenheit:',  `${weatherData.forecast.forecastday[0].day.avgtemp_f} °F`);
//          console.log('tomorrowTempCelsius:',  `${weatherData.forecast.forecastday[0].day.avgtemp_c} °C`);
//          console.log('tomorrowHumidity:',  weatherData.forecast.forecastday[0].day.avghumidity);
//          console.log('dayAfterTomorrowDate:',  weatherData.forecast.forecastday[1].date);
//          console.log('dayAfterTomorrowWeather:',  weatherData.forecast.forecastday[1].day.condition.text);
//          console.log('dayAfterTomorrowWeatherIcon:',  weatherData.forecast.forecastday[1].day.condition.icon);
//          console.log('dayAfterTomorrowTempFahrenheit:', `${weatherData.forecast.forecastday[1].day.avgtemp_f} °F`);
//          console.log('dayAfterTomorrowTempCelsius:', `${weatherData.forecast.forecastday[1].day.avgtemp_c} °C`);
//          console.log('tomorrowHumidity:',  weatherData.forecast.forecastday[1].day.avghumidity);
//     })
//       .catch(error => console.log('failed to fetch weather data'));