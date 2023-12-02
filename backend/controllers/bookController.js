// controllers/bookController.js
const Book = require('../models/Book');
const controllerBook = {};
controllerBook.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    console.log('New Book:', newBook); // Agrega este console.log
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al agregar un nuevo libro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

controllerBook.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log('All Books:', books);
    res.status(200).json(books);
  } catch (error) {
    console.error('Error al obtener la lista de libros:', error);
    console.error(error.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = controllerBook;
