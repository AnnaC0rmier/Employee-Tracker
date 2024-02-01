const express = require('express');
const mysql = require('mysql2');
const index = requrie('index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Alc12096!',
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);




app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
