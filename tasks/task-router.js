const express = require('express');

const tasks = require('./task-model');

const router = express.Router();

router.get('/', (req, res) =>{
    tasks
    .get()
    .then(task=>{
        res.json(task)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding task'})
    })
})

router.post('/', (req, res) =>{
    tasks
    .add(req.body)
    .then(task=>{
        res.json(task)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding task'})
    })
})

module.exports = router;