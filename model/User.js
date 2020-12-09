/*Model folder represent the Schema that represents the database. 
if we are storing an User object into databse then it descibes the structure of User like name , email etc.
*/

const mongoose = require('mongoose') , Schema = mongoose.Schema

//Creating Schema

const UserDetail = new Schema({
    name : String, 
    email : String, 
    phone : Number,
    type : String
})

//creating table 

const User = mongoose.model('User',UserDetail)

module.exports = {User};

