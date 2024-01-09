import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../reducers/taskSlice.js';
import orangeCatScream from './orangeCatScream.jpg';


const Task = () => {
    const { buttonClicked } = useSelector((state) => state.task);
    console.log(buttonClicked);
    const dispatch = useDispatch();

    const rawDate = new Date();
        const day = rawDate.getDate();
        const month = rawDate.getMonth();
        const year = rawDate.getYear();
        const date = `${day}-${month}-${year}`;

    //const date = '2024-01-08';
    
    return (
        <div>
            {/* <button id='catbutton' onClick={() => dispatch(addTask())}> */}
                 <img id="cat" src={orangeCatScream} onClick={() => dispatch(addTask())}/> 
            {/* </button> */}

            { buttonClicked ?  
                <div>
                    <form method="POST" action="/addTasks"> 
                        <input type="text" name="title" placeholder="Title" id="title" />
                        <input type="text" name="description" placeholder="Description" id="description" />
                        <input type="hidden" name="date" value={date} />
                        <button type="submit" className="submitbutton"> Submit </button>
                    </form>
                </div>
                :
                ''
            }
            
        </div>
    )

}

export default Task;

// handleClick function

// const handleClick = async (event) => {
    //     console.log(event);
    //     event.preventDefault();
    //     const rawDate = Date.Now();
    //         const day = rawDate.getDate();
    //         const month = rawDate.getMonth();
    //         const year = rawDate.getYear();
    //         const date = `${day}-${month}-${year}`;
    //     // sample userTasks endpoint, check in with backend team

    //     await fetch('/addTasks', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         // sample task property name, check how the SQL table is labeled
    //         body: JSON.stringify({
    //             user_id: '01', 
    //             date: date, 
    //             title: document.getElementById('title').value, 
    //             description: document.getElementById('description').value 
    //         })
    //     })
    //     .then((res) => {
    //         console.log(res);
    //         res.json()})
    //     .then((data) => console.log('Data: ' + data))
    //     .catch((error) => console.log(error));
// }