const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    item : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        default : null,
    },
    about : {
        type : String,
        default : null,
    }
}, { timestamps: true });

const Products = mongoose.model('product', newSchema);

module.exports = Products;
