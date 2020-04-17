const express = require('express');

const projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) =>{
    projects
    .get()
    .then(project=>{
        res.json(project)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding project'})
    })
})

router.post('/', (req, res) =>{
    projects
    .add(req.body)
    .then(project=>{
        res.json(project)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding project'})
    })
})

module.exports = router;