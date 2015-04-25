// PRIMARY AUTHOR: Mikael Mengistu

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;



var UserSchema = mongoose.Schema({

  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: int
  

});

var User = mongoose.model('User', UserSchema);
module.exports = User;