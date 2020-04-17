const express = require('express');
const server = express();


const ProjectRouter = require('./projects/project-router');
const ResourcesRouter = require('./resources/resource-router');
const TaskRouter = require('./tasks/task-router');



server.use(express.json());
server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TaskRouter)

server.get('/', (req, res)=>{
    res.send('Hello from home page!')
})

module.exports = server;