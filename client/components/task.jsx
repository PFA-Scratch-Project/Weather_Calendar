import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../reducers/taskSlice.js';


const Task = () => {
    const { newTask } = useSelector((state) => state.task);
    console.log(newTask);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addTask())}> New Task </button>
            <div> {newTask} </div>
        </div>
    )

}

export default Task;