const express = require('express');
const router = express.Router()

const UserModel = require('../models/Users')



router.get('/get', (req, res) => {
  //let searchTerm = req.query.searchTerm;
  // UserModel.find({})
  //   .exec((err, response) => {
  //     if (err) {
  //       res.json(err);
  //     } else {
        
        
  //       res.json(response);
  //     }
  //   });
});



router.post('/post', async (req, res) => {
  
});


module.exports = router 