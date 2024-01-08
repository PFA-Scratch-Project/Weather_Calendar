import React from 'react';
import DayContainer from './Day.jsx';
import MonthContainer from './Month.jsx';
import WeekContainer from './Week.jsx'; 


const MainContainer = () => {

    return (
      <div className="mainContainer">
        <div className="outerBox">
          <MonthContainer/>
          <WeekContainer/>
          <DayContainer/>
        </div>
      </div>
    )
    
}

export default MainContainer;