require('dotenv').config(); // 1. Carga las variables del archivo .env
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.static('.')); 
// Esto le dice a Express: "Si te piden un archivo, búscalo en esta carpeta"

app.use(cors());
app.use(express.json());

// 2. Usamos process.env para leer las variables ocultas
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a la BD MySQL');
});

// --- RUTAS ---

// 1. GET: Obtener incidente
app.get('/incidentes', (req, res) => { 
    // Ordenamos por fecha descendente (lo más nuevo primero)
    db.query('SELECT * FROM incidentes ORDER BY fecha DESC', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 2. POST: Crear incidente
app.post('/incidentes', (req, res) => {
    const { tipo, ip_origen, criticidad, fecha, estado } = req.body;
    const sql = 'INSERT INTO incidentes (tipo, ip_origen, criticidad, fecha, estado) VALUES (?, ?, ?, ?, ?)';
    
    db.query(sql, [tipo, ip_origen, criticidad, fecha, estado], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Incidente registrado', id: result.insertId });
    });
});

// 3. PUT: Actualizar incidente
app.put('/incidentes/:id', (req, res) => {
    const { id } = req.params; // Se recibe el id desde la URL
    const { tipo, ip_origen, criticidad, fecha, estado } = req.body;// datos del body
    const sql = 'UPDATE incidentes SET tipo=?, ip_origen=?, criticidad=?, fecha=?, estado=? WHERE id=?';
    
    db.query(sql, [tipo, ip_origen, criticidad, fecha, estado, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Incidente actualizado' });
    });
});

// 4. DELETE: Borrar incidente
app.delete('/incidentes/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM incidentes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Eliminado' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});