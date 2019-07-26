const sqlite3 = require('better-sqlite3');

const db = new sqlite3('base.db');


module.exports = {
  deletePost(id) {
    db.prepare('DELETE FROM posts WHERE id = ?', (err) => {
      if (err) {
        return console.log(err.message);
      }
    }).run(id);
    return 'SUCCESS';
  },
  addPost(object) {
    db.prepare('INSERT INTO posts (theme, description) VALUES (?, ?)', function (err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }).run(object.theme, object.description);
  },
  updatePost(object, id) {
    db.prepare('UPDATE posts SET theme=?, description=? WHERE id=?', function (err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been updated with rowid ${this.lastID}`);
    }).run(object.theme, object.description, id);
  },
  getPosts() {
    return db.prepare('SELECT * FROM posts', (err) => {
      if (err) {
        return console.log(err.message);
      }
    }).all();
  },
  getPost(id) {
    return db.prepare('SELECT * FROM posts WHERE id = ?', (err) => {
      if (err) {
        return console.log(err.message);
      }
    }).get(id);
  },
  createTable() {
    const createTable = 'CREATE TABLE posts(id INTEGER NOT NULL PRIMARY KEY,theme text NOT NULL, description text NOT NULL);';
    db.prepare(createTable);
  },
};
