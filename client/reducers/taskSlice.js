import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const taskApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
//     endpoints: (builder) => ({
//         addUserTask: builder.mutation({
//             query: () => ({
//                 url: '/addTasks',
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: {
//                         user_id: '01', 
//                         date: date, 
//                         title: document.getElementById('title').value, 
//                         description: document.getElementById('description').value 
//                     }
//             })
//         })
//     })
// })

// export const { useAddUserTaskQuery } = taskApi;


const taskSlice = createSlice({
    name: 'task',
    initialState: {
        buttonClicked: false,
    },
    reducers: {
        addTask: (state, action) => {
            state.buttonClicked = true;

            // state.newTask.push(5);
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;





// original handle click function 

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