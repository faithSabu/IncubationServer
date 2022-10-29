const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:String,
        email:String,
        phone:Number,
        password:String,
        timeStamp:Date
    }
)

const users = mongoose.model('users', userSchema)

module.exports = {
    users
}