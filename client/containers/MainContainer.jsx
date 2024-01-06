import React from 'react';
import DayContainer from './Day.jsx';
import MonthContainer from './Month.jsx';
import WeekContainer from './Week.jsx';
import TasksContainer from './Tasks.jsx'; 


const MainContainer = () => {

    return (
      <div className="mainContainer">
        <div className="outerBox">
          <MonthContainer/>
          <WeekContainer/>
          <DayContainer/>
          <TasksContainer/>
        </div>
      </div>
    )
    
}

export default MainContainer;