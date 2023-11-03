/**
 * Name: David Sims
 * Student Number: 301268408
 * Project: Comp229 Midterm Project
 * FileName: COMP220-F2023-MIDTERM-301268408
 */



let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
