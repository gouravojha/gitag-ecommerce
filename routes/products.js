const express = require('express')
const router = express.Router()
const productController = require("../controllers/products")

router.get('/all-products',productController.getAllProducts)


module.exports = router

