const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        name : { 
            type : String, 
            min : 2,
            max : 50,
            required : true 
        },
        email : {
            type : String,
            required : true,
            lowercase : true
        },
        password : {
            type : Number,
            required : true,
            min : 6
            //max : 8
        },
        phone : { type : Number, required : true, }
    }
);

module.exports = mongoose.model('Customer', CustomerSchema)