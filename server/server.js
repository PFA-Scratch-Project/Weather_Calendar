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

// Catch all handler
app.use((req, res) => {
    res.status(400).send(`404. The page you're looking for doesn't exist!`);
})

// Global err handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: { 'Express global err handler caught unknown middleware error:': err },
        status: 500,
        message: 'An error occured on our end. Our appologies!'
    }
    const errObj = Object.assign({}, defaultErr, err);
    console.log('Global Error: ', errObj.log);
    return res.status(errObj.status).json(errObj.message);
})

app.get('/',
    tasksController.getTasks,
    (req, res) => {
        res.status(200).send(res.locals.all)
    })


app.post('/addTasks',
    tasksController.addTask,
    (req, res) => {
        res.status(200).send(res.locals.addedTask);
    })


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

//! Is this really necessary? Check where app is being imported
module.exports = app;