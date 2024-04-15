const express = require('express');

const Category = require('../models/CategoryModel');

const Product = require('../models/productModel');

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        const categories = await(Category.find())
        res.status(200).send({data : categories})
    } catch (err) {
        res.status(400).send({error : err})
    }
});

/*router.get('/products-by-categories/:categoryId', async (req, res) => {

    try {
        const categoryId = req.params.categoryId
        console.log("category received: ", categoryId)

        const products = await Product.aggregate([
            { $match: { category: categoryId }},
            { $group: {
                _id: '$category',
                products: { $push: '$$ROOT'}
            }},
            { $project: { name: '$_id', products: 1, _id: 0}}
        ])
        res.status(200).send({ data: products})
    } catch (err) {
        res.status(400).send({ error: err})
    }
})*/

module.exports = router