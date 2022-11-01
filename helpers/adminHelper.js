const USERS = require('../model/schema').users
const APPLICATION = require('../model/schema').applications
const bcrypt = require('bcrypt')
const { response } = require('express')

module.exports = {
    getApplicationData:()=>{
        return new Promise((resolve,reject)=>{
            APPLICATION.find().then((data)=>{
                resolve(data);
            })
        })
    }
}