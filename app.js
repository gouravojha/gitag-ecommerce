require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const port = process.env.PORT || 40000

const uploadRoute = require('./routes/uploader')
const sellerRoute = require('./routes/seller')

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

app.use('/media',uploadRoute)
app.use('/seller',sellerRoute)

app.listen(port,(error)=>{
    if(error) throw error
    console.log(`Running on http://localhost:${port}`)
})