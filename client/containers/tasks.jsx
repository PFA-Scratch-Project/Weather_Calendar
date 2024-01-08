import React from 'react';
import Task from '../components/task.jsx';

const TasksContainer = () => {

    return (
        <div className='tasksOuterContainer'>
          <div className='taskContainer'>
            <h2> Tasks </h2>
            <Task />
          </div>
        </div>
    )
}

export default TasksContainer;