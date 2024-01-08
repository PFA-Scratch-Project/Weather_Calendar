import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../reducers/taskSlice.js';


const Task = () => {
    const { buttonClicked } = useSelector((state) => state.task);
    //console.log(buttonClicked);
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        console.log(event);
        event.preventDefault();
        const rawDate = Date.Now();
            const day = rawDate.getDate();
            const month = rawDate.getMonth();
            const year = rawDate.getYear();
            const date = `${day}-${month}-${year}`;
        // sample userTasks endpoint, check in with backend team

        await fetch('/addTasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // sample task property name, check how the SQL table is labeled
            body: JSON.stringify({
                user_id: '01', 
                date: date, 
                title: document.getElementById('title').value, 
                description: document.getElementById('description').value 
            })
        })
        .then((res) => {
            console.log(res);
            res.json()})
        .then((data) => console.log('Data: ' + data))
        .catch((error) => console.log(error));
}

    return (
        <div>
            <button onClick={() => dispatch(addTask())}> New Task </button>
            <div>
                <form method="POST" action="/addTasks"> 
                    <input type="text" name="title" placeholder="Title" id="title" />
                    <input type="text" name="description" placeholder="Description" id="description" />
                    <button type="submit" onSubmit={handleClick}> Submit </button>
                </form>
            </div>
            
        </div>
    )

}

export default Task;