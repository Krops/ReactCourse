const Sqlite3 = require('better-sqlite3');

const db = new Sqlite3('base.db');


export function deletePost(id) {
  return db.prepare('DELETE FROM posts WHERE id = ?', err => err.message).run(id);
}
export function addPost(object) {
  return db.prepare('INSERT INTO posts (theme, description) VALUES (?, ?)', err => err.message)
    .run(object.theme, object.description);
}
export function updatePost(object, id) {
  db.prepare('UPDATE posts SET theme=?, description=? WHERE id=?', err => err.message)
    .run(object.theme, object.description, id);
}
export function getPosts() {
  return db.prepare('SELECT * FROM posts', err => err.message).all();
}
export function getPost(id) {
  return db.prepare('SELECT * FROM posts WHERE id = ?', err => err.message).get(id);
}
export function createTable() {
  db.prepare('CREATE TABLE posts(id INTEGER NOT NULL PRIMARY KEY,theme text NOT NULL, description text NOT NULL);');
}
