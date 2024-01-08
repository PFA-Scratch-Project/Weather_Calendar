import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../reducers/taskSlice.js';


const Task = () => {
    const { newTask } = useSelector((state) => state.task);
    console.log(newTask);
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        // sample userTasks endpoint, check in with backend team
        await fetch('/userTasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // sample task property name, check how the SQL table is labeled
            body: JSON.stringify({task: document.getElementById('newTask').value})
        })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <button onClick={() => dispatch(addTask())}> New Task </button>
            <div> {newTask} </div>
        </div>
    )

}

export default Task;