const express = require('express')
const router = express.Router()
const sellerController = require("../controllers/seller")

router.post('/register',sellerController.registerSeller)


module.exports = router

