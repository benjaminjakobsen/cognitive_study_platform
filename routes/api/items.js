const express = require('express'); //require express
const router = express.Router(); //creates express router, which handles routes

const Item = require('../../models/Item'); //

router.get('/', (req, res) => { //Get request
  Item.find()
    .then(items => res.json(items)); //Promise created, if sucessful then return response with items in json format.
});

router.post('/', (req, res) => { //Post request
  const newItem = new Item({ //Creates new object from schema
    name: req.body.name
});

  newItem.save().then(item => res.json(item)); //Tries to save the newly created object in database and if promise fullfilled then send response with the object in json format.
});

router.delete('/:id', (req, res) => { //Delete request
  Item.findById(req.params.id) //Finds schema with the id given
    .then(item => item.remove().then(() => res.json({item deleted}))) //removes item from database
})
.catch(err => res.status(404).json({item not found})) //If it can't find item with the given id

module.exports = router; //exports the router
