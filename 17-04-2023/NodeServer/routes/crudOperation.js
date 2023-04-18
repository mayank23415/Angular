const express = require('express');
const client = require('../model/connection');
const {
    json
} = require('body-parser');

const router = express.Router();




router.post('/', async (req, res) => {
    const data = {
        _id: req.body._id,
        name: req.body.name,
        position: req.body.position,
        age: req.body.age,
        result: req.body.result
    }
    await client.db('Student').collection('results').insertOne(data);
})


router.get('/', async (req, res) => {
    const data = await client.db('Student').collection('results').find().toArray();
    res.send(data);
})

router.delete('/:id', async (req, res) => {
    const str = JSON.parse(req.params.id);
    await client.db('Student').collection('results').deleteOne({
        _id: str
    });
})

router.put('/:id', async (req, res) => {
    const str = JSON.parse(req.params.id);

    await client.db('Student').collection('results').updateOne({
        _id: str
    }, {
        $set: {
            name: req.body.name,
            position: req.body.position,
            age: req.body.age,
            result: req.body.result
        }
    })
})



module.exports = router;