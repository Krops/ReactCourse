var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('base.db',  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
    (err) => { 
        console.error(err)
    });
console.log("kjej")
let createTable = "CREATE TABLE posts(id INTEGER NOT NULL PRIMARY KEY,theme text NOT NULL, description text NOT NULL);"
db.run(createTable);
function addPost(object){
	db.run(`INSERT INTO posts(theme,description) VALUES(?), (?)`, [object.theme, object.description], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
}

db.serialize(() => {
  db.each(`SELECT * FROM posts`, (err, row) => {
    if (err) {
      console.error(err);
    }

    console.log(row);
  });
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


