const { json } = require('body-parser');
const express = require('express')
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var{ User } = require('../model/User')

router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log("Error",JSON.stringify(err,undefined,2))}
    })
})

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    User.findById(req.params.id,(err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error", JSON.stringify(err, undefined, 2)) }
    })
})

router.post('/',(req,res)=>{
    var usr = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        type:req.body.type
    })
    usr.save((err,docs)=>{
        if(!err){res.send(docs)}
        else { console.log("Error in saving", JSON.stringify(err, undefined, 2)) }
    })
})

router.put('/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

        var usr ={
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            type: req.body.type
        }
        User.findByIdAndUpdate(req.params.id,{$set:usr},{new:true},(err, docs) => {
            if (!err) { res.send(docs) }
            else { console.log("Error in updating", JSON.stringify(err, undefined, 2)) }
        })
})

router.delete('/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    User.findByIdAndRemove(req.params.id,(err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error in deleting", JSON.stringify(err, undefined, 2)) }
    })
})

module.exports = router;