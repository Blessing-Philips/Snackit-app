const express = require('express');

const Customer = require('../models/customerModel');

const router = express.Router();

/*const data = {
    name: "Bless",
    email: "Bless1@gmail.com",
    password: 12343647,
    phone: 9078632032
};

Customer.insertMany([data]);
console.log(data)*/

/*You can also initialize everything once by using: 
const {name, email, phone, _id} = req.body
*/

router.post('/new-user', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        _id: req.body._id
    });

    const new_user = await customer.save();
    res.json(new_user)
    console.log(new_user)
});

router.get('/user', async (req, res) => {
    try {
        const user = await(Customer.find());
        res.status(400).json(user);
    } catch (err) {
        res.status(400).send({error: err.message})
    }
})

module.exports = router;
