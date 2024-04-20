const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        OrderID: {
                type:Number
        }
    }
)

module.exports = mongoose.model('Order', )

    