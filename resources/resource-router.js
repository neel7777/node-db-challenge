const express = require('express');

const resources = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) =>{
    resources
    .get()
    .then(resource=>{
        res.json(resource)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding resource'})
    })
})

router.post('/', (req, res) =>{
    resources
    .add(req.body)
    .then(resource=>{
        res.json(resource)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding resource'})
    })
})

module.exports = router;