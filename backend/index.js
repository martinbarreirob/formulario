const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario_mysql',
  password: 'tu_contraseña_mysql',
  database: 'formulario_db'
});

connection.connect();

// Rutas de la API

// Ruta para agregar una persona
app.post('/personas', (req, res) => {
  const { nombre, edad, email } = req.body;
  const query = 'INSERT INTO personas (nombre, edad, email) VALUES (?, ?, ?)';

  connection.query(query, [nombre, edad, email], (err, results) => {
    if (err) throw err;
    res.json({ success: true, id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
