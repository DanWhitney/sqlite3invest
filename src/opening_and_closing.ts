import { Database } from 'sqlite3'

//create a database

// The database function has a call back function that is run
// then the database connects.

let db = new Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the in-memory SQlite database');
})



// It is a good practice to close a database connection when 
// you are done with it. To close a database connection, you 
// call the close() method of the Database object as follows:

// Similar to the Database(), the close() method also accepts 
// a callback that indicates whether an error occurred during 
// closing the database connection.
db.close(
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
// The close() method will wait for all pending queries completed 
// before actually closing the database.
console.log("test")