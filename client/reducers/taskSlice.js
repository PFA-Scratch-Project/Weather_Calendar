import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        newTask: []
    },
    reducers: {
        addTask: (state, action) => {
            state.newTask.push(
            <div>
                <form method="POST" action="/userTasks"> 
                    <input type="text" placeholder="new task" id="newTask" />
                    <button type="submit"> Submit </button>
                </form>
            </div>);

            // state.newTask.push(5);
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;