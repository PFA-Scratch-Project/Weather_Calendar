const db = require('../models/dataModels');

const tasksController = {};

tasksController.getTasks = async (req, res, next) => {
    const { date } = req.body;

    const tasksQuery = `SELECT
    Tasks.title, Tasks.description 
    FROM Tasks
    WHERE Tasks.date = ${date}
    `

    try {
        const tasksQueryResult = await db.query(tasksQuery);
        res.locals.tasksQuery = tasksQueryResult;
    }
    catch {
        return next({
            log: `Error with get tasks query: ${err}`,
            message: `Error with get tasks query`
        })
    }
    return next();
}

tasksController.addTask = async (req, res, next) => {
    const { user_id, date, title, description } = req.body;
    console.log('title & description: ', title, description);

    const queryValues = [
        user_id,
        date,
        title,
        description
    ];

    const addTaskQuery = `INSERT INTO Tasks
        (user_id, date, title, description)
        VALUES ($1, $2, $3, $4) RETURNING *`

    try {
        const addTaskResult = await db.query(addTaskQuery, queryValues);
        res.locals.addedTask = addTaskResult;
    }
    catch {
        return next({
            log: `Error adding task: ${err}`,
            message: 'Error adding task to profile'
        });
    };
    return next();
}

module.exports = tasksController;