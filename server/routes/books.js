/**
 * Name: David Sims
 * Student Number: 301268408
 * Project: Comp229 Midterm Project
 * FileName: COMP220-F2023-MIDTERM-301268408
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  ADD - GET the Book Details page in order to add a new Book
router.get('/details', (req, res, next) => {
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/details', {
        title: 'Add Book',
        books: books
      });
    }
  });
});

//  ADD - POST process the Book Details page and create a new Book - CREATE
router.post('/details', async (req, res, next) => {
  try 
  {
      await book.create(     
          {
          "Title": req.body.title,
          "Description": req.body.description,
          "Price": req.body.price,
          "Author": req.body.author,
          "Genre": req.body.genre
      });
      console.log("Title", req.body.title);
      res.redirect('/books');
  }
  
  catch(err)
  {
      console.log(err);
  }
});

// EDIT- GET the Book Details page in order to edit an existing Book
router.get('/details/:id', (req, res, next) => {
    let id = req.params.id;

    book.findById(id, (err, bookToEdit) => {
      if(err){
        console.log(err);
        res.end(err);
      }
      else{
        res.render('books/details', {title: 'Edit the Book', books: bookToEdit});
      }
    })
});

// EDIT - POST - process the information passed from the details form and update the document
router.post('/details/:id', (req, res, next) => {
    let id = req.params.id;

    let updateBook = book({
      "_id": id,
      "Title": req.body.title,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
    });

    book.updateOne({_id: id}, updateBook, (err) => {
      if(err){
        console.log(err);
        res.end(err);
      }
      else{
        res.redirect('/books');
      }
    })
});

// GET - process the delete by user id

router.get('/delete/:id', async (req, res, next) => {
    let id = req.params.id;
  
    try 
    {
        await book.findByIdAndRemove(id)
        res.redirect('/books');
    }
    catch(err)
    {
        console.log(err);
    }
  
});



module.exports = router;
