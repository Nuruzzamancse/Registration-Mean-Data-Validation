const express = require('express');
var router = express.Router();

const student = require('../model/studentInformation');
const admin = require('../model/admin');


//retrieving data from database
router.get('/student',(req,res,next)=>{
    student.find(function(err,students){
            if(err){
                res.json(err);
            }
            else{
                res.json(students);
            }
        })
      
})

router.post('/auth',(req,res,next)=>{
    let email = req.body.email,
        password = req.body.password;
        
    admin.find({email: email, password: password}, function(err,admin){
        
            if(err){
                res.json({
                    success: false
                });
            }
            else{
                if (admin.length > 0) {
                    res.json({
                        success: true
                    });
                } else {
                    res.json({
                        success: false
                    });
                }
                
            }
        })
      
});


//inserting new data
router.post('/student',(req,res,next)=>{
    let newStudent = new student({
        name: req.body.name,
        roll: req.body.roll,
        fathersName: req.body.fathersName,
        dateOfBirth: Date.now(),
        phone: req.body.phone,
        address: req.body.address,
        educationalQualification: req.body.educationalQualification
    });
    newStudent.save((err,student)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Item has been added successfully'});
        }
        
    })
});


router.post('/admin',(req,res,next)=>{
    let newAdmin = new admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      
    });
    
    newAdmin.save((err,admin)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Item has been added successfully'});
        }
        
    })
});

//updating data

router.put('/student/:id',(req,res,next)=>{
    
    student.findOneAndUpdate({_id: req.params.id},{
        $set:{
            name: req.body.name,
            roll: req.body.roll,
            fathersName: req.body.fathersName,
            dateOfBirth: req.body.dateOfBirth,
            phone: req.body.phone,
            address: req.body.address,
            educationalQualification: req.body.educationalQualification
      
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

})

//deleting data

router.delete('/student/:id',(req,res,next)=>{

    student.remove({_id: req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

})

module.exports = router;