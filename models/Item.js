const mongoose = require('mongoose'); //Requires mongoose
const Schema = mongoose.Schema; //Imports schemas from mongoose

const ItemSchema = new Schema({ //Creates a schema
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
