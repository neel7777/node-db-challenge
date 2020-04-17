const db = require('../data/db-config');

module.exports = {
    get,
    add

}

function get () {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
        'tasks.id',
        'tasks.task_description',
        'tasks.completed',
        'projects.project_name',
        'projects.project_description'
    )
}

function add (data) {
    return db('tasks')
    .insert(data)
}