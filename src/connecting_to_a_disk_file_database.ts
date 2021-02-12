
// To connect to a disk file database, instead of passing
// the ':memory:' string, you pass the path to the database file.
// For example, to connect to the encaps_test database file 
// stored in the db folder, you use the following statement:


import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

let encaps_db = new Database('./db/encaps_test.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the encaps_test database.');
});


// There are three opening modes:

// sqlite3.OPEN_READONLY: open the database for read-only.
// sqlite3.OPEN_READWRITE : open the database for reading and writing.
// sqlite3.OPEN_CREATE: open the database, if the database does not exist, create a new database.

// The sqlite3.Database() accepts one or more mode as the 
// second argument. By default, it uses the OPEN_READWRITE | OPEN_CREATE mode. 
// It means that if the database does not exist, the new 
// database will be created and is ready for read and write.

// additional notes.
// 1. The directory for the database must be present

// close the database when finished
encaps_db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
