import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        newTask: []
    },
    reducers: {
        addTask: (state, action) => {
            const handleClick = async (event) => {
                const rawDate = date.Now();
                    const day = rawDate.getDate();
                    const month = rawDate.getMonth();
                    const year = rawDate.getYear();
                    const date = `${day}-${month}-${year}`;
                // sample userTasks endpoint, check in with backend team

                console.log('right before fetch');
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
                .then((res) => res.json())
                .then((data) => console.log('Data: ' + data))
                .catch((error) => console.log(error));
            }
            
            state.newTask.push(
            <div>
                <form method="POST" action="/addTasks"> 
                    <input type="text" placeholder="Title" id="title" />
                    <input type="text" placeholder="Description" id="description" />
                    <button type="submit" onSubmit={handleClick}> Submit </button>
                </form>
            </div>);

            // state.newTask.push(5);
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;