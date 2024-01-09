import React from 'react';
import TasksContainer from './TasksContainer.jsx';
import WeatherContainer from './WeatherContainer.jsx'


const DayContainer = () => {

    return(
        <div className='dayContainer'>
             <div><WeatherContainer/></div>
             <div><TasksContainer/></div>
        </div>
    )
}

export default DayContainer;