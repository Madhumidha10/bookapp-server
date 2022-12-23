const Book=require('../models/bookModal')

const getAllBook=async(req,res)=>{
try {
    const books=await Book.find({})
    res.send(books)
} catch (error) {
    return res.status(400).json({ message: error});
}
}
module.exports={getAllBook}