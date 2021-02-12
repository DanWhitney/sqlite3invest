// To query data in SQLite database from a Node.js application, you use these steps:

// Open a database connection.
// 1. Execute a SELECT statement and process the result set.
// 2. Close the database connection.
// 3. The sqlite3 module provides you with some methods for querying data such as all(), each() and get().

// The all() method allows you to execute an SQL query with
// specified parameters and call a callback to access the 
// rows in the result set.

// The following is the signature of the all() method:

// db.all(sql,params,(err, rows ) => {
    // process rows here    
// });

// The err argument stores the error detail in case there 
// was an error occurred during the execution of the query. 
// Otherwise, the err will be null. 
// If the query is executed successfully, the rows argument 
// contains the result set of the query.

// Because the all() method retrieves all rows and places 
// them in the memory, therefore, for the large result set,
// you should use the each() method.

// The following example illustrates how to query data from
// the langs table in the sample database using the all() method:

import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let db = new Database('./db/sample.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

let sql = `SELECT DISTINCT Name name FROM langs ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});


// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
