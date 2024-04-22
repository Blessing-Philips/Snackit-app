const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema (
    {
        name: {type: String, required: true},
        email: {
            type: String,
            lowercase: true,
            required: true
        },
        password: {
            type: Number,
            required: true,
            min: 6
        },
        phone: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('Admin', AdminSchema)