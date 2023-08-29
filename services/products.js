const Products = require("../models/products")

exports.getAllProducts = async() => {
    try {
        let resp = await Products.find({})
        return resp
    } catch(error) {
        return error
    }
}