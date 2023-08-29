const productService = require('../services/products')

exports.getAllProducts = async(req,res) => {
    try {
        let resp = await productService.getAllProducts()
        if(resp) {
            return res.json(resp)
        }
        return res.status(404).json({message : 'No Product Found'})
    } catch(error) {
        return res.status(500).json({message : "Internal Server Error"})
    }
}