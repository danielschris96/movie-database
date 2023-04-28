const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movies_db'
    },
    console.log('Connected to the movie_db database')
);

app.post('/api/add-movie', (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO movies (name) VALUES (?)', [name], (err, result) => {
        if (err) {
          console.log(err);
        }
        return res.status(201).json({ message: 'Movie added successfully' });
    })
});

app.get('/api/movies', (req, res) => {
    db.query('SELECT movies.name FROM movies', function (err, results) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      return res.status(200).json(results);
    });
  });

app.delete('/api/movie/:id', (req, res) => {
    db.query(`DELETE FROM movies WHERE id = ?`, function ())
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

