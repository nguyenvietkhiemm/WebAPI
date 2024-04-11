const Task = require('../models/task');

class TaskController {
    // [GET] /api/tasks/
    getAllTasks(req, res, next) {
        Task.find()
            .then(task => {
                if (task) {
                    res.status(200).json(task);
                }
                else {
                    res.status(404).json({ msg: 'No task found' });
                }
            })
            .catch(next);
    }

    // [POST] /api/tasks
    createTask(req, res, next) {
        const task = new Task(req.body);

        task.save()
            .then(() => res.status(200).json(task))
            .catch(next);
    }

    // [GET] /api/tasks/:id
    getTask(req, res, next) {
        Task.findById(req.params.id)
            .then(task => {
                if (task) {
                    res.status(200).json(task);
                }
                else {
                    res.status(404).json({ msg: `No task found with id ${req.params.id}` });
                }
            })
            .catch(next);
    }

    // [PUT] /api/tasks/:id
    updateTask(req, res, next) {
        Task.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.status(200).json({
                 msg: 'Updated task',
                 task: req.body,
            }))
            .catch(next);
    }

    // [DELETE] /api/tasks/:id
    deleteTask(req, res, next) {
        Task.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ msg: 'Deleted task' }))
            .catch(next);
    }
}

module.exports = new TaskController();