// Require Express
// Importing the api routes 
const router = require('express').Router();
const apiRoutes = require('./api');

// Making the api routes module accessible 
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Incorrect route'));

// Exporting router
module.exports = router;