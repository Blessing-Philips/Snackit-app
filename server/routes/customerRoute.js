const express = require('express');

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

module.exports = router;
