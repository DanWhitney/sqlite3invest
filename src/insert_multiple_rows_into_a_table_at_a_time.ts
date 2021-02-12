// To insert data into an SQLite table from a Node.js application, 
// you follow these steps:
//
// Open a database connection.
// Execute an INSERT statement.
// Close the database connection.

// For the demonstration, we will create a new database named sample.db 
// in the db folder.
//
// When you open a database connection in the default mode, the database 
//is created if it does not exist.

import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let db = new Database('./db/sample.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});


// In the sample.db database, we create a table called langs for 
// storing programming languages:

db.run('CREATE TABLE langs(name text)', (err)=> {
  // capture any error if there is one.
  if (err) {
    console.log("Theres been an error");
    console.log(err.message);
  }
});

// Now, we are ready to insert data into the langs table.


// Insert multiple rows into a table at a time

// To insert multiple rows at a time into a table, you 
// use the following form of the INSERT statement:

// INSERT INTO table_name(column_name)
// VALUES(value_1), (value_2), (value_3),...

// To simulate this in the Node.js application, we first need to 
// construct the INSERT statement with multiple placeholders:

// INSERT INTO table_name(column_name)
// VALUES(?), (?), (?),...

// Suppose, you want to insert rows into the langs table with the 
// data from the following languages array:

let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];

// To construct the INSERT statement, we use the map() method to 
// map each element in the languages array into (?) and then join all placeholders together.

let placeholders = languages.map((language) => '(?)').join(',');

let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;

// show the sql output
console.log(`Sql: ${sql}`)

db.run(sql, languages, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});


// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});