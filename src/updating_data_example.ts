// To update data in the SQLite database from a Node.js 
// application, you use these steps:

// 1. Open a database connection.
// 2. Execute an UPDATE statement.
// 3. Close the database connection.

// For the demonstration, we will use the langs table in
// the sample.db database that we created in the previous 
// tutorial.

// Updating data example
// To update data in a table, you use the UPDATE statement
// as follows:

// UPDATE table_name
// SET column_name = value_1
// WHERE id = id_value;

// To execute the UPDATE statement in the Node.js application
// , you call the run() method of the Database object:

// db.run(sql, params, function(err){
// 
//});

// The run() method executes an UPDATE statement with 
// specified parameters and calls a callback afterwards.

// The err argument of the callback stores the error 
// detail in case the execution has any problem 
// e.g., syntax error, locking, etc.

// If the UPDATE statement is executed successfully, the this
// object of the callback function will contain the 'changes' 
// property that stores the number of rows updated.

// The following program illustrates how to update a row in 
// the langs table from C to Ansi C:

import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let db = new Database('./db/sample.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

let data = ['Ansi C', 'C'];
let sql = `UPDATE langs
            SET name = ?
            WHERE name = ?`;


db.run(sql, data, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) updated: ${this.changes}`);

});

// remember to close the database

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});