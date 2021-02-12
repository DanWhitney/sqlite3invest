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

// Insert one row into a table
// To execute an INSERT statement, you use the run() method of the Database object:

// db.run(sql, params, function(err){
// 
// });

// The run() method executes an INSERT statement with specified
// parameters and calls a callback afterwards.

// If an error occurred, you can find the detailed information in the 
// err argument of the callback function.

// In case the statement is executed successfully, the this object of 
// the callback function will contain two properties:

// lastID    property stores the value of the last inserted row ID.
// changes   property stores the rows affected by the query.

// The following insert.js program illustrates how to insert a row into the langs table:

db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
  console.log(`the change affected ${this.changes}`);
});

// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});