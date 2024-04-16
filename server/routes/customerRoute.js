const express = require('express');

<<<<<<< HEAD
const Customer = require('../models/customerModel');

const router = express.Router();

router.post('/new-user', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });

    customer.save((err, data) => {
        if (err) {
            res.status(404).send({ error : err })
        } else {
            console.log("User added! ", data)
            res.status(200).send({ data: data})
        }
    })
    
});

module.exports = router
=======
const customer = require('../mo')

const router = express().Router;

router.post('/', async (req, res) => {

})
>>>>>>> 0e95c99582deaaefa945af7a19bc5d4ecad5afde
