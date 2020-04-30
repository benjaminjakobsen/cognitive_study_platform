const express = require('express'); //require express
const router = express.Router(); //creates express router, which handles routes
const authentication = require('../../helpfunc/authenticate');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');

const User = require('../../models/User'); //

router.get('/sessionCheck', authentication, (req, res) => {
  return res.status(200).json({msg: true});
})

router.post('/login', (req, res) => {
  if(!req.body.password || !req.body.email) {
    res.status(400).json({log : "didn't enter in all fields"})
  }
  else {
    User.findOne({email: req.body.email})
      .then(user => {
        if(user.password != req.body.password) {
          return res.status(400).json({log: "Wrong password"})
        }
        jwt.sign(
          { id: user.id },
          keys.jwtSecret,
          { expiresIn: 1800 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                username: user.username,
                email: user.email
              }
            })
          }
        )
      })
      .catch(err => res.status(404).json({log : "user not found"}))
  }

});



module.exports = router; //exports the router
