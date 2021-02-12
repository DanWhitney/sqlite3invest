// Query rows with each() method

// The each() method executes an SQL query with specified
// parameters and calls a callback for every row in the result set.

// The following illustrates the signature of the each() method:

// db.each(sql,params, (err, result) => {
   // process each row here
// });

// If the result set is empty, the callback is never called. 
// In case there is an error, the err parameter contains the 
// detailed information.

// The following program illustrates how to use the each() 
// method to query name data from the langs table.

import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let db = new Database('./db/sample.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

let sql = `SELECT Name name
            FROM langs
            ORDER BY Name`;

db.each(sql, [], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.name}`);
});

// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});