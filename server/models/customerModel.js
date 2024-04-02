const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        name : { type : String, required : true },
        email : {
            type : String,
            required : true,
            lowercase : true
        },
        password : {
            type : Number,
            required : true,
            min : 8,
            max : 8
        },
        phone : { type : Number, required : true, max : 11 }
    }
);

module.exports = ('Customer', CustomerSchema)