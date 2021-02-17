import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

// creates and opens the database
let encaps_mock_db = new Database('./db/encaps_mock.db', OPEN_READWRITE | OPEN_CREATE, (err) => { // you did need to add  OPEN_READWRITE | OPEN_CREATE here there default is just do demonstrate opening modes
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the encaps_test database.');
});

//runs sql to create table
encaps_mock_db.run(`
    CREATE TABLE IF NOT EXISTS barrel_data(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        postion TEXT
        );
    
    `, [], (err) => {
    // capture any error if there is one.
    if (err) {
        console.log("Theres been an error");
        console.log(err.message);
    }
});

//runs sql to create table
encaps_mock_db.run(`
    CREATE TABLE IF NOT EXISTS execution_data(
        id INTEGER PRIMARY KEY,
        operator_id INTEGER FOR
        start REAL NOT NULL,
        expected_end REAL NOT NULL,
        actual_end DEAL, 
        status TEXT, 
        postion TEXT
        );
    
    `, [], (err) => {
    // capture any error if there is one.
    if (err) {
        console.log("Theres been an error");
        console.log(err.message);
    }
});

//runs sql to create table
encaps_mock_db.run(`
    CREATE TABLE IF NOT EXISTS operator_data(
        id INTEGER PRIMARY KEY,
        employee_num TEXT NOT NULL,
        level TEXT NULL
        );
    `, [], (err) => {
    // capture any error if there is one.
    if (err) {
        console.log("Theres been an error");
        console.log(err.message);
    }
});

encaps_mock_db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
