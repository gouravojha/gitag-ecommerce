const express = require('express')
const router = express.Router()
const {uploadMiddleware} = require('../services/uploader')
const uploadService = require('../controllers/uploader')

router.post('/upload',uploadMiddleware.single('file'),uploadService.uploadService)

module.exports = router
