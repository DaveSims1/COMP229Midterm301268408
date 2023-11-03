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

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});


module.exports = router;
