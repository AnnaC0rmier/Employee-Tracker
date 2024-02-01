const express = require('express');
const mysql = require('mysql2');
const actionPrompt = require('./index.js')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Alc12096!',
    database: 'workplace_db'
  },
  console.log(`Connected to the courses_db database.`)
);

db.query('INSERT INTO department (dept_name) VALUES (?)', async function (err, results) {
  try {
    await actionPrompt();
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  } catch (error) {
    console.error('Error during actionPrompt:', error);
  }
});





app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








