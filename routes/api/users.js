const express = require('express'); //require express
const router = express.Router(); //creates express router, which handles routes

const User = require('../../models/User'); //

router.get('/', (req, res) => { //Get request
  User.find()
    .then(users => res.json(users)); //Promise created, if sucessful then return response with users in json format.
});

router.post('/', (req, res) => { //Post request
  const newUser = new User({ //Creates new object from schema
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
});

  newUser.save().then(user => res.json(user)); //Tries to save the newly created object in database and if promise fullfilled then send response with the object in json format.
});

router
.delete('/:id', (req, res) => { //Delete request
  User.findById(req.params.id) //Finds schema with the id given
    .then(user => user.remove().then(() => res.json({user : "user deleted"}))) //removes user from database
    .catch(err => res.status(404).json({user : "user not found"})) //If it can't find user with the given id
})


module.exports = router; //exports the router
