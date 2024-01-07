const express = require('express');
const path = require('path');
const PORT = 3000;

const weatherController = require('./controllers/weatherController');
const tasksController = require('./controllers/tasksController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));

//! Try taking these TWO below out at some point to see if we really need them 
// app.use(express.static(path.resolve(__dirname, '../client')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });




app.get('/',
    weatherController.getWeather,
    tasksController.getTasks,
    (req, res) => {
        res.status(200).send(res.locals.all)
    })


app.post('/addTasks',
    tasksController.addTask,
    (req, res) => {
        res.status(200).send(res.locals.dayTasks);
    })



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));