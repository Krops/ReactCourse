const express = require('express');
var router = express.Router();
var db = require('../models/db');



router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

router.get('/posts', (req, res) => {
    res.setHeader('Content-Type','application/json')
    return res.send(db.getPosts());
});

router.get('/posts/:postId', (req, res) => {
    var post = db.getPost(req.params.postId)
    if (post){
        return res.send(post);       
    } else{
        return res.status(404).send('Not found');
    }
});


router.post('/addPost', (req, res) => {
    var errors = validateObject(req.body);
    if(errors.length){
        return res.status(400).send(errors);
    }
    return res.status(201).send(db.addPost(req.body));
    
});

router.put('/posts/:postId', (req, res) => {
    var errors = validateObject(req.body);
    if(errors.length){
        return res.status(400).send(errors);
    }
    return res.send(db.updatePost(req.body, req.params.postId));
});

router.delete('/posts/:postId', (req, res) => {
    return res.send(db.deletePost(req.params.postId));
});

router.get('/createTable', (req, res) => {
    res.setHeader('Content-Type','application/json')
    return res.send(db.createTable());
});

function validateObject(object){
    var errors = [];
    if (typeof(object.theme) == 'undefined'){
        errors.push("theme should be present");
    } else if(typeof(object.description) == 'undefined'){
        errors.push("description should be present");
    }
    else {
        if(object.theme.length<4){
            errors.push("length of theme should be longer then 3 symbols")
        }
        if(object.theme.length>50) {
            errors.push("length of theme should be shorter then 50 symbols")
        }
        if(object.description.length<4){
            errors.push("length of description should be longer then 3 symbols")
        }
        if(object.description.length>200) {
            errors.push("length of description should be shorter then 50 symbols")
        }
    }
    return errors
}

module.exports = router;