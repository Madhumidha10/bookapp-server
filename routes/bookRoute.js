const express=require('express')
const router=express.Router()
const {getAllBook}=require('../controllers/bookControllers')

 router.get('/getAllBooks',getAllBook)

module.exports=router



