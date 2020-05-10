const mongoose = require('mongoose'); //Requires mongoose
const Schema = mongoose.Schema; //Imports schemas from mongoose

const UserSchema = new Schema({ //Creates a schema
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required : true
    },
    email: {
      type : String,
      required : true
    },
    nback: {
      type : Array
    },
    palaces : {
      type : Array
    }
});

module.exports = User = mongoose.model('user', UserSchema);
