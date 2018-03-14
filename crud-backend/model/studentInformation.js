const mongoose = require('mongoose');

const studentInformation = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    roll: {
        type:Number,
        required:true
    },
    fathersName:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    educationalQualification:{
        type:String,
        required:true
    }

});

const student = module.exports = mongoose.model('student',studentInformation);