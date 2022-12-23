const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('mongoDB server connected')
})
db.on('error',()=>{
    console.log('mongoDB server connection failed')
})

module.exports=mongoose