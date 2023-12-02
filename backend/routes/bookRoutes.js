// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Ruta para agregar un nuevo libro
router.post('/add', bookController.addBook);

// Ruta para obtener todos los libros
router.get('/all', bookController.getAllBooks);

module.exports = router;
