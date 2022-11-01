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
const users = mongoose.model('users', userSchema);

const applicationSchema = mongoose.Schema(
    {
        name:String,
        address:String,
        city:String,
        state:String,
        email:String,
        phone:Number,
        companyName:String,
        comapanyDescription:String,
        companyName:String,
        a:String,
        b:String,
        c:String,
        d:String,
        e:String,
        f:String,
        g:String,
        h:String,
        i:String,
        j:String,
        typeOfIncubation:String,
        userId:String,
        timeStamp:Date
    })
    const applications = mongoose.model('applications',applicationSchema);

module.exports = {
    users,
    applications
}