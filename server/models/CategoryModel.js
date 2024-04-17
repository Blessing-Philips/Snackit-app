
const mongoose = require('mongoose');
//=======
const mongoose = require("mongoose");
//>>>>>>> 0e95c99582deaaefa945af7a19bc5d4ecad5afde

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : { type : String, required : true }
});

module.exports = mongoose.model('Category', categorySchema);