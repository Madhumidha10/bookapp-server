const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: 'Name is required',
            unique: true
        }, 
        image: {
            type: String,
            require: 'Image is required'
        },
        author: { 
            type: String, 
            required: 'Brand is required'
        }, 
          description: {
            type: String,
            required: 'Description is required'
        },
        price: { 
            type: Number, 
            required: 'Price is required'
        }, 
         rating: { 
            type: Number, 
            required: 'Rating is required'
        }, 
    
    }, 
    {
        timestamps: true
    }
);

const Book = mongoose.model('books', bookSchema);

module.exports = Book;