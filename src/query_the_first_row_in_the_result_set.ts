// Query the first row in the result set

// When you know that the result set contains zero or one row 
// e.g., querying a row based on the primary key or querying 
// with only one aggregate function such as count, sum, max, min, etc.
// you can use the get() method of Database object.

// db.get(sql, params, (err, row) => {
    // process the row here 
// });

// The get() method executes an SQL query and calls the callback function 
// on the first result row. In case the result set is empty, the row argument 
// is undefined.

// The following program demonstrates how to query a langs and returns one row:

import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let db = new Database('./db/sample.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

let sql = `SELECT * FROM langs ORDER BY name LIMIT 1`;

db.get(sql, [], (err, row) => {
  if (err) {
    throw console.error(err.message);
  }
  return row 
    ? console.log(row.name)
    : console.log(`No record found`);
});


// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});