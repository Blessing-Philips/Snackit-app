const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        CustomerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Customer
        },
        Status: { 
            type: String 
        },
        Date: new Date(),

    }
)

module.exports = mongoose.model('Order', OrderSchema)

    