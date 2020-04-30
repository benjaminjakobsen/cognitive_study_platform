const express = require('express'); //require express
const router = express.Router(); //creates express router, which handles routes
const authentication = require('../../helpfunc/authenticate');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');

const User = require('../../models/User'); //

router.get('/', (req, res) => { //Get request
  User.findById()
    .then(user => res.json(user))
    .catch(err => res.status(404).json({user : "user not found"})) //Promise created, if sucessful then return response with users in json format.
});

router.post('/register', (req, res) => { //Post request
  const newUser = new User({ //Creates new object from schema
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  newUser.save().then(user => {
      jwt.sign(
        { id: user.id },
        keys.jwtSecret,
        { expiresIn: 50 },
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
  }); //Tries to save the newly created object in database and if promise fullfilled then send response with the object in json format.
});


router.delete('/delete', authentication, (req, res) => { //Delete request
  console.log(req.body.id);
  User.findById(req.body.id) //Finds schema with the id given
    .then(user => user.remove().then(() => res.json({user : "user deleted"}))) //removes user from database
    .catch(err => res.status(404).json({user : "user not found"})) //If it can't find user with the given id
})



module.exports = router; //exports the router
