const mongoose = require('mongoose'); //Requires mongoose
const Schema = mongoose.Schema; //Imports schemas from mongoose

const MemoryPalaceSchema = new Schema({ //Creates a schema
    name : {
      type : String,
      required : true
    },
    items : {
      type : Array,
      required : true
    }
});

module.exports = MemoryPalace = mongoose.model('memoryPalace', MemoryPalaceSchema);
