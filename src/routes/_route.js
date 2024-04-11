const tasks = require('./tasks');
const site = require('./site');
function route(app) {
    app.use('/api/tasks', tasks);

    app.use('/:slug', site);
    app.use('/', site);
}

module.exports = route;
