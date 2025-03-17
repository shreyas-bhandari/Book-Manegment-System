const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

// To get all books
router.get('/', async (req, res) => {

    try {
        const books = await Book.find({});

        return res.json({books });
    } catch (error) {
        console.log(error);

        return res.json({message:'error'});
    }

    
});

//to list single book
router.get('/:bookId',async  (req, res) => {

    console.log(req.params.bookId);

    try {

       

         const book = await Book.findById(req.params.bookId);

         return res.json({ book });
        
    } catch (error) {
        console.log(error);

        return res.json({message:'Error'});
        
    }
    
});

//to create a new book
router.post('/', async (req, res) => {
        console.log(req.body);

        try{
            const book = await Book.create(req.body);
            return res.json({ book:book });
        
        }   
        catch(error){
            console.log(error);
        
            return res.json({message:'Error'});
           }    


    const book = await Book.create(req.body);

    res.json({ book:book });
});

//to update a book
router.put('/:bookId',async (req, res) => {

    console.log(req.params.bookId);
    try {
        

    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });

    return res.json({ book });
    } catch (error) {
        console.log(error);
        return res.json({message:'Error'});
        
    }
    });

//to delete a book
router.delete('/:bookId',async (req, res) => {

   try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
     return res.json({ message: 'Book deleted',book });
    
   } catch (error) { 
    console.log(error);
    return res.json({message:'Error'});
    
   }
});




// Export the router
module.exports = router;
