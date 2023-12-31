require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const port = process.env.PORT || 40000

const uploadRoute = require('./routes/uploader')
const sellerRoute = require('./routes/seller')
const productRoute = require('./routes/products')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log(error)
});

app.get('/',(req,res)=>{
    res.json({status:'Server is Live !!'})
})

app.use('/media',uploadRoute)
app.use('/seller',sellerRoute)
app.use('/product',productRoute)

app.listen(port,(error)=>{
    if(error) throw error
    console.log(`Running on http://localhost:${port}`)
})