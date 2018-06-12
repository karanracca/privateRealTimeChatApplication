const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    "fullname" : String,
    "nickname" : String,
    "email" : String,
    "password" : String,
    "avatar": String
});

const User = mongoose.model('User', user);

module.exports = User;