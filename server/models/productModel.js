const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category'
            },
            name: {type: String}
        },
        foodItems: [String],
        imageURL: { type: String }
    }
);

module.exports = mongoose.model('Product', ProductSchema);

