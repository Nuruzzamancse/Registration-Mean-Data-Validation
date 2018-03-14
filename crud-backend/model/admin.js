const mongoose = require('mongoose');

const adminInformation = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required: true
    }

});

const admin = module.exports = mongoose.model('admin',adminInformation);