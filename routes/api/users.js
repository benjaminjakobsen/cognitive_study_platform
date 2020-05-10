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
        { expiresIn: 3600 },
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

router.post('/edit', authentication, (req, res) => {
  let updateUserObject = {}
  if(req.body.username != ""){
    updateUserObject.username = req.body.username;
  }
  if(req.body.password != ""){
    updateUserObject.password = req.body.password;
  }
  if(req.body.email != ""){
    updateUserObject.email = req.body.email
  }
  User.findByIdAndUpdate(req.body.id, updateUserObject)
    .then(user => {res.status(200).json({msg : "Data successfully changed"})})
    .catch(err => res.status(404).json({msg : "An unknown error accured"}))
})

router.post('/info', authentication, (req, res) => {
  User.findById(req.body.id)
    .then(user => {res.json(user)})
    .catch(err => res.status(404).json({msg: "user not found"}))
})


router.delete('/delete', authentication, (req, res) => { //Delete request
  User.findById(req.body.id) //Finds schema with the id given
    .then(user => user.remove().then(() => res.json({user : "user deleted"}))) //removes user from database
    .catch(err => res.status(404).json({user : "user not found"})) //If it can't find user with the given id
})



module.exports = router; //exports the router
