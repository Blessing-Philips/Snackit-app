const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : { type : String, required : true }
});

//const Category = mongoose.model('Category', categorySchema);

const ProductSchema = new Schema(
    {
        name: { type : String, required : true },
        description: {
            type : String,
            required : true,
            minLength : 3
        },
        price: { type: Number, required: true },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        foodItems: [String],
        imageURL: { type: String }
    }
);

module.exports = mongoose.model('Product', ProductSchema);
