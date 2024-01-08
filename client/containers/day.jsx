import React from 'react';
import Weather from '../components/weather.jsx';
import TasksContainer from './Tasks.jsx';


const DayContainer = () => {

    return(
      <div className='dayOuterContainer'>
        <div className='dayContainer'>
          <h2> 1 </h2>
          <Weather />
          <TasksContainer />
        </div>
      </div>
    )
}

export default DayContainer;