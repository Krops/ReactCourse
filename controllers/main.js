const express = require('express');
var router = express.Router();
var sqlite3 = require('better-sqlite3');

let db = new sqlite3('base.db');


router.get('/posts', (req, res) => {
    res.setHeader('Content-Type','application/json')
    return res.send(getPosts());
});

router.get('/posts/:postId', (req, res) => {
    var post = getPost(req.params.postId)
    if (post){
        return res.send(post);       
    } else{
        return res.status(404).send('Not found');
    }
});


router.post('/addPost', (req, res) => {
    return res.status(201).send(addPost(req.body));
    
});

router.put('/posts/:postId', (req, res) => {
    return res.send(updatePost(req.body, req.params.postId));
});

router.delete('/posts/:postId', (req, res) => {
    return res.send(deletePost(req.params.postId));
});

function deletePost(id) {
    db.prepare("DELETE FROM posts WHERE id = ?", function(err) {
        if (err) {
      return console.log(err.message);
    };
    }).run(id);
    return "SUCCESS"
}

function addPost(object){
    db.prepare("INSERT INTO posts (theme, description) VALUES (?, ?)", function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  }).run(object.theme, object.description);
}

function updatePost(object, id){
    db.prepare(`UPDATE posts SET theme=?, description=? WHERE id=?`, function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been updated with rowid ${this.lastID}`);
  }).run(object.theme, object.description, id);
};


function getPosts(){
    return db.prepare("SELECT * FROM posts", function(err) {
        if (err) {
      return console.log(err.message);
    }
    }).all();
};
function getPost(id){
    return db.prepare("SELECT * FROM posts WHERE id = ?", function(err) {
        if (err) {
      return console.log(err.message);
    };
    }).get(id);
};

module.exports = router;