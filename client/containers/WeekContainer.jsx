import React from 'react';
import DayContainer from './DayContainer.jsx';

const WeekContainer = () => {

    const weekArray = [];

    

    return(
        <div style={{display: 'inline-flex'}} className='weekContainer'>
          <span> <DayContainer/> </span> 
        </div>
    )
}

export default WeekContainer;