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
            
            state.newTask.push(
            <div>
                <form method="POST" action="/userTasks"> 
                    <input type="text" placeholder="new task" id="newTask" />
                    <button type="submit" onSubmit={handleClick}> Submit </button>
                </form>
            </div>);

            // state.newTask.push(5);
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;