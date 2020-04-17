const db = require('../data/db-config');

module.exports = {
    get,
    add

}

function get () {
    return db('projects');
}

function add (data) {
    return db('projects')
    .insert(data)
}