// Require Express
// Importing hompage, login, produce modules
const router = require('express').Router();
const homepage = require('./homepage');
const login = require('login');
const produce = require('produce');

// Code for seeds depending on what we decide 
router.use('/homepage', homepage);
router.use('/login', login);
router.use('/produce', produce);

// Exporting router 
module.exports = router;

