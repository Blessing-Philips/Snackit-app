const express = require('express');

const mongoose =  require('mongoose');

const router = express.Router();

const Category = require('../models/CategoryModel');

const Product = require('../models/productModel');

router.get('/products', async (req, res) => {
    try {
        const products = await(Product.find())
        res.status(200).send({data : products})
    } catch (err){
        res.status(400).send({error : err})
    }
});


router.get('/categories', async (req, res) => {
    try {
        const categories = await(Category.find())
        res.status(200).send({data : categories})
    } catch (err) {
        res.status(400).send({error : err})
    }
});

/*router.get('/products-by-categories/:categoryId', async (req, res) => {
    try{
        const categoryId = req.params.categoryId
        console.log("category received: ", categoryId)

        const products = await Product.aggregate([
            { $match: { category: new mongoose.Types.ObjectId(categoryId) }},
            { $group: {
                _id: '$category',
                products: { $push: '$$ROOT'}
            }},
            { $project: { name: '$_id', products: 1, _id: 0}}
        ])
            console.log("Fetched products: ", products);
            
        res.status(200).send({ data: products})
    } catch (err) {
        res.status(400).send({ error: err.message})
    }
})*/

router.get('/products-by-categories/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        console.log("category received: ", categoryId);

        // Directly query the database to check if the category exists
        const categoryExists = await Category.exists({ _id: categoryId });
        console.log("Category exists: ", categoryExists);

        const products = await Product.find({ 'category._id': categoryId })
            .populate('category._id')
            .exec();

        console.log("Fetched products: ", products);

        res.status(200).send({ data: products });
    } catch (err) {
        console.error("Error fetching products: ", err);
        res.status(400).send({ error: err.message });
    }
});



module.exports = router;