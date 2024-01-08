import React from 'react';
import TasksContainer from './TasksContainer.jsx';
import WeatherContainer from './WeatherContainer.jsx'


const DayContainer = () => {

    return(
        <div className='dayContainer'>
             <h3>Day container here</h3>
             <WeatherContainer/>
             <TasksContainer/>
        </div>
    )
}

export default DayContainer;